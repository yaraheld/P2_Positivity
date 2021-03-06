export default class FireBall {
  constructor(fireballX, fireballY, fireBallSpeed, color) {
    this.toxicFireBallImage = loadImage(
      "00_Links/09_bossFight/toxic_fireball.gif"
    );
    this.positiveFireBallImage = loadImage(
      "00_Links/09_bossFight/positive_fireball.gif"
    );

    this.fireBallSoundBool = true;

    this.fireballX = fireballX;
    this.fireballY = fireballY;
    this.fireBallSpeed = fireBallSpeed;

    this.fireBallSize = 0;

    this.color = color;

    this.fireBallType = "none";

    //Random 0-9
    this.randomFireBall = Math.floor(Math.random() * 10);
  }

  displayRandomFireBalls(fireballSound) {
    //Fade in
    this.fireBallSize -= 1;
    if (this.fireBallSize < -7) {
      this.fireBallSize = -7;
    }

    if (this.fireBallSoundBool === true) {
      fireballSound.setVolume(0.4);
      fireballSound.play();
      this.fireBallSoundBool = false;
    }

    //random fireball probability (Wahrscheinlichkeit)
    //positive fireball: 0, 1, 2, 3 | negative Fireball  4, 5, 6, 7, 8, 9
    if (this.randomFireBall > 2) {
      //Toxic
      image(
        this.toxicFireBallImage,
        -110 + this.fireballX,
        -50 + this.fireballY,
        this.toxicFireBallImage.width / (10 + this.fireBallSize),
        this.toxicFireBallImage.height / (10 + this.fireBallSize)
      );
      this.fireBallType = "toxic";
    } else {
      //Positive
      image(
        this.positiveFireBallImage,
        -110 + this.fireballX,
        -50 + this.fireballY,
        this.positiveFireBallImage.width / (10 + this.fireBallSize),
        this.positiveFireBallImage.height / (10 + this.fireBallSize)
      );
      this.fireBallType = "positive";
    }

    // //VISUALISATION
    // stroke(this.color);
    // noFill();
    // ellipse(-135 + this.fireballX, -55 + this.fireballY, 50, 50);

    //SPEED
    this.fireballX -= this.fireBallSpeed;
  }
}

export default class FireBall {
  constructor(fireballX, fireballY, fireBallSpeed, color) {
    this.toxicFireBallImage = loadImage(
      "00_Links/09_bossFight/toxic_fireball.gif"
    );
    this.positiveFireBallImage = loadImage(
      "00_Links/09_bossFight/positive_fireball.gif"
    );
    this.fireballX = fireballX;
    this.fireballY = fireballY;
    this.fireBallSpeed = fireBallSpeed;

    this.fireBallSize = 0;

    this.color = color;

    this.fireBallType = "none";

    //Random 0-9
    this.randomFireBall = Math.floor(Math.random() * 10);
  }

  displayRandomFireBalls() {
    //Fade in
    this.fireBallSize -= 1;
    if (this.fireBallSize < -7) {
      this.fireBallSize = -7;
    }

    //random fireball probability (Wahrscheinlichkeit)
    //positive fireball: 0, 1, 2, 3 | negative Fireball  4, 5, 6, 7, 8, 9
    if (this.randomFireBall > 3) {
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
      //Toxic
      image(
        this.positiveFireBallImage,
        -110 + this.fireballX,
        -50 + this.fireballY,
        this.positiveFireBallImage.width / (10 + this.fireBallSize),
        this.positiveFireBallImage.height / (10 + this.fireBallSize)
      );
      this.fireBallType = "positive";
    }

    //VISUALISATION
    stroke(this.color);
    noFill();
    ellipse(-135 + this.fireballX, -55 + this.fireballY, 50, 50);
    this.fireballX -= this.fireBallSpeed;
  }
}

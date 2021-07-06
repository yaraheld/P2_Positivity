export default class FireBall {
  constructor(fireballX, fireballY, fireBallSpeed) {
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
  }

  displayRandomFireBalls() {
    this.fireBallSize -= 1;
    if (this.fireBallSize < -7) {
      this.fireBallSize = -7;
    }
    image(
      this.toxicFireBallImage,
      -110 + this.fireballX,
      -50 + this.fireballY,
      this.toxicFireBallImage.width / (10 + this.fireBallSize),
      this.toxicFireBallImage.height / (10 + this.fireBallSize)
    );
    stroke(255, 255, 0);
    noFill();
    ellipse(-135 + this.fireballX, -55 + this.fireballY, 50, 50);
    this.fireballX -= this.fireBallSpeed;
  }
}

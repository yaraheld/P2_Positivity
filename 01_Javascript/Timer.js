export default class Timer {
  constructor(x, y, time) {
    this.x = x;
    this.y = y;

    this.timeCakeSpeed = 0;
    this.timeCakeSpeedVariable = time;

    this.timeIsOver = false;

    this.timeColor = color(200, 200, 200);
  }

  start() {
    if (this.timeIsOver === false) {
      push();
      translate(this.x, this.y);

      this.timeCakeSpeed += this.timeCakeSpeedVariable;

      //color connected with the time variable
      this.timeColor = color(
        200 + this.timeCakeSpeed / 4,
        200 - this.timeCakeSpeed / 3,
        200 - this.timeCakeSpeed / 3
      );

      angleMode(DEGREES);
      rotate(-90);
      fill(this.timeColor);
      arc(0, 0, 35, 35, HALF_PI + this.timeCakeSpeed, 0);
      stroke(200, 200, 200);
      strokeWeight(3);
      noFill();
      ellipse(0, 0, 50, 50);
      noStroke();
      pop();
      if (this.timeCakeSpeed >= 355) {
        this.timeIsOver = true;
      }
    }
  }

  reset() {
    this.timeCakeSpeed = 0;
    this.timeIsOver = false;
  }

  timeIsUp() {
    if (this.timeIsOver === true) {
      return true;
    }
  }
}

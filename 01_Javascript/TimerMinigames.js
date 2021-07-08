export default class TimerMinigames {
  constructor(x, y, time) {
    this.startTimeCake = false;
    this.countDownNumbers = ["GO", 1, 2];
    this.one = 0;
    this.one2 = 0;
    this.two = 0;
    this.two2 = 0;
    this.go = 0;
    this.go2 = 0;
    this.startTimeCountDown = false;

    this.timeCakeSpeed = 0;
    this.timeCakeSpeedVariable = time;

    this.timesUpFade = 0;
    this.timesUpFade2 = 0;
    this.x = x;
    this.y = y;

    this.timeIsOver = false;
  }

  countDown() {
    push();
    translate(this.x, this.y);
    if (this.timeIsOver === false) {
      this.two += 20;
      if (this.two > 255) {
        this.two2 -= 40;
      }
      if (this.two + this.two2 < -40) {
        this.one += 20;
      }
      if (this.one > 255) {
        this.one2 -= 40;
      }
      if (this.one + this.one2 < -40) {
        this.go += 20;
      }
      if (this.go > 255) {
        this.go2 -= 30;
        this.startTimeCake = true;
      }

      textAlign(CENTER);
      textSize(20);
      fill(21, 17, 77, this.one + this.one2);
      textFont("VCR OSD MONO");
      text(" " + this.countDownNumbers[1], -6, 8);

      fill(21, 17, 77, this.two + this.two2);
      text(" " + this.countDownNumbers[2], -6, 8);

      fill(21, 17, 77, this.go + this.go2);
      text(" " + this.countDownNumbers[0], -6, 8);
    }
    pop();
  }

  timeCake() {
    push();
    translate(this.x, this.y);
    if (this.timeCakeSpeed >= 359) {
      this.timeIsOver = true;
    }
    if (this.timeIsOver === false) {
      angleMode(DEGREES);
      rotate(-90);
      fill(110, 248, 189);
      arc(0, 0, 35, 35, HALF_PI + this.timeCakeSpeed, 0);
      stroke(110, 248, 189);
      strokeWeight(3);
      noFill();
      ellipse(0, 0, 50, 50);
      noStroke();
      if (this.startTimeCake === true) {
        this.timeCakeSpeed += this.timeCakeSpeedVariable;
      }
    }
    pop();
  }

  timesUp() {
    push();
    translate(this.x, this.y);
    if (this.timeIsOver === true) {
      this.timesUpFade += 10;
      if (this.timesUpFade > 255) {
        this.timesUpFade2 -= 20;
      }
      textAlign(CENTER);
      textSize(20);
      fill(110, 248, 189, this.timesUpFade + this.timesUpFade2);
      textFont("VCR OSD MONO");
      text("Time  over", 0, 5);
    }

    pop();
  }

  resetTimesUpVariables() {
    this.one = 0;
    this.one2 = 0;
    this.two = 0;
    this.two2 = 0;
    this.go = 0;
    this.go2 = 0;
    this.startTimeCake = false;
    this.timeCakeSpeed = 0;
    this.timesUpFade = 0;
    this.timesUpFade2 = 0;
    this.timeIsOver = false;
  }

  reset() {
    this.startTimeCake = false;
    this.one = 0;
    this.one2 = 0;
    this.two = 0;
    this.two2 = 0;
    this.go = 0;
    this.go2 = 0;
    this.startTimeCountDown = false;

    this.timeCakeSpeed = 0;

    this.timesUpFade = 0;
    this.timesUpFade2 = 0;

    this.timeIsOver = false;
  }
}

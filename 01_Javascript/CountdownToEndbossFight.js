import { duper, duperBold } from "./main.js";

export default class CountDownToEndbossFight {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.countDownNumbers = ["GO!", 1, 2, 3];

    this.numberThree = 0;
    this.numberThree2 = 0;
    this.numberOne = 0;
    this.numberOne2 = 0;
    this.numberTwo = 0;
    this.numberTwo2 = 0;
    this.go = 0;
    this.go2 = 0;

    this.timeIsOver = false;
  }

  countDown() {
    if (this.timeIsOver === false) {
      push();
      translate(this.x, this.y);

      this.numberThree += 20;
      if (this.numberThree > 255) {
        this.numberThree2 -= 40;
      }

      if (this.numberThree + this.numberThree2 < -40) {
        this.numberTwo += 20;
      }

      if (this.numberTwo > 255) {
        this.numberTwo2 -= 40;
      }
      if (this.numberTwo + this.numberTwo2 < -40) {
        this.numberOne += 20;
      }
      if (this.numberOne > 255) {
        this.numberOne2 -= 40;
      }
      if (this.numberOne + this.numberOne2 < -40) {
        this.go += 20;
      }
      if (this.go > 255) {
        this.go2 -= 40;
      }
      if (this.go2 < -255) {
        this.timeIsOver = true;
      }

      textAlign(CENTER);
      textSize(165);
      textFont(duperBold);

      fill(61, 18, 117, this.numberThree + this.numberThree2);
      text(" " + this.countDownNumbers[3], -15, 15);

      fill(61, 18, 117, this.numberTwo + this.numberTwo2);
      text(" " + this.countDownNumbers[2], -15, 15);

      fill(61, 18, 117, this.numberOne + this.numberOne2);
      text(" " + this.countDownNumbers[1], -15, 15);

      fill(61, 18, 117, this.go + this.go2);
      text(" " + this.countDownNumbers[0], -8, 15);

      pop();
    }
  }

  resetTimesUpVariables() {
    this.numberOne = 0;
    this.numberOne2 = 0;
    this.numberTwo = 0;
    this.numberTwo2 = 0;
    this.go = 0;
    this.go2 = 0;
  }
}

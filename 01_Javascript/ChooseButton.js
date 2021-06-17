import TextAnimation from "./TextAnimation.js";
import SpellButton from "./SpellButton.js";

export default class ChooseButton extends SpellButton {
  constructor(x, y, buttonSentence, speed) {
    super(x, y);

    this.buttonSleeping = loadImage(
      "00_Links/00_UI-Elements/answerBoxSleeping.png"
    );
    this.buttonActive = loadImage(
      "00_Links/00_UI-Elements/answerBoxActive.png"
    );

    this.movingButton = 0;
    this.movingButtonVariable = 3;

    this.speed = speed;
    this.buttonSentence = buttonSentence;
    this.buttonText = new TextAnimation(
      "duper-bold",
      14,
      color(157, 157, 157),
      this.buttonSentence,
      0,
      0,
      this.speed
    );

    this.fadeInVariable = 0;
  }

  fadeIn() {
    this.fadeInVariable += 10;
    if (this.fadeInVariable > 255) {
      this.fadeInVariable = 255;
    }
  }

  designSleeping() {
    tint(255, this.fadeInVariable);
    image(
      this.buttonSleeping,
      this.x,
      this.y,
      this.buttonSleeping.width / 2,
      this.buttonSleeping.height / 2
    );
    this.active = false;

    //Resets position when its not selected
    this.movingButton = 0;

    this.buttonText.textColor = color(157, 157, 157, this.fadeInVariable);
  }

  designActive() {
    tint(255, this.fadeInVariable);
    image(
      this.buttonActive,
      this.x - 35 + this.movingButton,
      this.y,
      this.buttonActive.width / 2,
      this.buttonActive.height / 2
    );

    //Moves Button when selected
    this.movingButton += this.movingButtonVariable;
    if (this.movingButton > 25) {
      this.movingButtonVariable = 0;
    }
    if (this.movingButton < 25) {
      this.movingButtonVariable = 3;
    }

    this.buttonText.textColor = color(255, 236, 53, this.fadeInVariable);
  }

  displayActiveOrSleeping() {
    //first value: midPoint
    //second value: translate Value
    //third value: button detection range:
    //Button image width: 285 px / 2 = +-142 px,
    //Button image height: 55 px / 2 = +-27 px
    if (
      mouseX > 550 + this.x - 142 &&
      mouseX < 550 + this.x + 142 &&
      mouseY < 310 + this.y + 27 &&
      mouseY > 310 + this.y - 27
    ) {
      this.designActive();
    } else {
      this.designSleeping();
    }
  }

  displayButtonSentence() {
    this.buttonText.x = this.x - 123 + this.movingButton;
    this.buttonText.y = this.y + 4;
    this.buttonText.typeWriter();
  }
}
//click-function is right here! Do not forget – its an inheritance

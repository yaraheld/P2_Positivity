export default class ChooseButton extends SpellButton {
  constructor(x, y) {
    super(x, y);

    this.buttonSleeping = loadImage(
      "00_Links/00_UI-Elements/answerBoxSleeping.png"
    );
    this.buttonActive = loadImage(
      "00_Links/00_UI-Elements/answerBoxActive.png"
    );
  }

  designSleeping() {
    image(
      this.answerBoxSleeping,
      this.x,
      this.y,
      this.answerBoxSleeping.width / 2,
      this.answerBoxSleeping.height / 2
    );
  }

  designActive() {
    image(
      this.answerBoxActive,
      this.x - 35,
      this.y,
      this.answerBoxActive.width / 2,
      this.answerBoxActive.height / 2
    );
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
      this.designWhenActive();
    } else {
      this.designWhenSleeping();
    }
  }
}

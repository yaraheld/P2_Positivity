export default class SpellButton {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.buttonSleeping = loadImage(
      "00_Links/00_UI-Elements/spellButtonSleeping.png"
    );
    this.buttonActive = loadImage(
      "00_Links/00_UI-Elements/spellButtonActive.png"
    );
    this.buttonEffect = loadImage(
      "00_Links/00_UI-Elements/spellButtonEffect.gif"
    );
    // this.magicSound = loadSound("Audio/magic.mp3");

    this.counter = 0;
    this.active = false;
  }
  designSleeping() {
    image(
      this.buttonSleeping,
      this.x,
      this.y,
      this.buttonSleeping.width / 2,
      this.buttonSleeping.height / 2
    );
    this.active = false;
  }
  designActive() {
    image(
      this.buttonActive,
      this.x,
      this.y,
      this.buttonActive.width / 2,
      this.buttonActive.height / 2
    );
    image(this.buttonEffect, this.x, this.y, 250, 250);
    // this.magicSound.play();

    // this.counter += 1;
    // if (this.counter > 50) {
    //   this.buttonEffect.pause();
    //   // this.magicSound.pause();
    // }
  }

  displayActiveOrSleeping() {
    //first value: midPoint
    //second value: translate Value
    //third value: button detection range:
    //Button image width: 150 px / 2 = +-75 px,
    //Button image height: 50 px / 2 = +-25 px
    if (
      mouseX > 550 + this.x - 75 &&
      mouseX < 550 + this.x + 75 &&
      mouseY < 310 + this.y + 25 &&
      mouseY > 310 + this.y - 25
    ) {
      this.designActive();
    } else {
      this.designSleeping();
    }
  }

  click() {
    //first value: midPoint
    //second value: translate Value
    //third value: button detection range:
    //Button image width: 150 px / 2 = +-75 px,
    //Button image height: 50 px / 2 = +-25 px
    if (
      mouseX > 550 + this.x - 75 &&
      mouseX < 550 + this.x + 75 &&
      mouseY < 310 + this.y + 25 &&
      mouseY > 310 + this.y - 25
    ) {
      return true;
    } else {
      return false;
    }
  }
}

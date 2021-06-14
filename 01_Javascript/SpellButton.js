export default class SpellButton {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.spellbuttonSleeping = loadImage(
      "00_Links/00_UI-Elements/spellButtonSleeping.png"
    );
    this.spellbuttonActive = loadImage(
      "00_Links/00_UI-Elements/spellButtonActive.png"
    );
    this.spellButtonEffect = loadImage(
      "00_Links/00_UI-Elements/spellButtonEffect.gif"
    );
    // this.magicSound = loadSound("Audio/magic.mp3");

    this.counter = 0;
  }
  design() {
    image(
      this.spellbuttonSleeping,
      this.x,
      this.y,
      this.spellbuttonSleeping.width / 2,
      this.spellbuttonSleeping.height / 2
    );
  }

  hitTest() {
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
      image(
        this.spellbuttonActive,
        this.x,
        this.y,
        this.spellbuttonActive.width / 2,
        this.spellbuttonActive.height / 2
      );
      image(this.spellButtonEffect, this.x, this.y, 250, 250);
      // this.magicSound.play();

      // this.counter += 1;
      // if (this.counter > 50) {
      //   this.spellButtonEffect.pause();
      //   // this.magicSound.pause();
      // }
    }
  }
}

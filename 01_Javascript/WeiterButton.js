import TextAnimation from "./TextAnimation.js";
import SpellButton from "./SpellButton.js";

export default class WeiterButton extends SpellButton {
  constructor(x, y) {
    super(x, y);
    this.buttonSleeping = loadImage(
      "00_Links/00_UI-Elements/weiterButtonSleeping.png"
    );
    this.buttonActive = loadImage(
      "00_Links/00_UI-Elements/weiterButtonActive.png"
    );

    this.buttonText = new TextAnimation(
      "duper-bold",
      25,
      color(157, 157, 157),
      "WEITER",
      this.x - 35,
      this.y + 7,
      50
    );
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
    this.buttonText.textColor = color(157, 157, 157, this.fadeInVariable);
  }

  designActive() {
    tint(255, this.fadeInVariable);
    image(
      this.buttonActive,
      this.x,
      this.y,
      this.buttonActive.width / 2,
      this.buttonActive.height / 2
    );

    image(this.buttonEffect, this.x, this.y, 250, 250);

    this.buttonText.textColor = color(255, 236, 53, this.fadeInVariable);
  }
}

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
      this.x,
      this.y,
      50
    );
  }
}

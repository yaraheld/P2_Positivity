import { duperBold } from "./main.js";
import SpellButton from "./SpellButton.js";
import TextAnimation from "./TextAnimation.js";

export default class StartScreenButton extends SpellButton {
  constructor(x, y) {
    super(x, y);

    this.buttonSleeping = loadImage(
      "00_Links/00_UI-Elements/startButtonSleeping.png"
    );

    this.buttonActive = loadImage(
      "00_Links/00_UI-Elements/startButtonActive.png"
    );

    this.buttonText = new TextAnimation(
      duperBold,
      25,
      color(157, 157, 157),
      "START",
      this.x - 31,
      this.y + 7,
      0.3
    );
  }

  //Method doesn`t need to be called in MainScene (is contained in displayActiveOrSleeping)
  designSleeping() {
    tint(255, this.fadeInVariable);
    image(
      this.buttonSleeping,
      this.x,
      this.y,
      this.buttonSleeping.width / 2,
      this.buttonSleeping.height / 2
    );

    //Fade in for font
    this.buttonText.textColor = color(255, 236, 56, this.fadeInVariable);

    //sets boolean to "true". Thus the sound can be played when the mouse is hovering over the button again
    //& then the sound is starting from the beginning because of "stop"
    this.playButtonSound = true;

    this.buttonSound.stop();
  }
}

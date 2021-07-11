import SpellButton from "./SpellButton.js";
import TextAnimation from "./TextAnimation.js";
import { duper, duperBold } from "./main.js";

export default class FightButton extends SpellButton {
  constructor(x, y, fightButtonText, XpositionOfText) {
    super(x, y);

    this.fightButtonText = fightButtonText;
    this.XpositionOfText = XpositionOfText;
    this.buttonText = new TextAnimation(
      duperBold,
      25,
      color(61, 18, 117),
      this.fightButtonText,
      this.x + this.XpositionOfText,
      this.y + -6,
      0.2
    );

    this.buttonSleeping = loadImage(
      "00_Links/00_UI-Elements/fightButtonSleeping.png"
    );
    this.buttonActive = loadImage(
      "00_Links/00_UI-Elements/fightButtonActive.png"
    );
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

    //Fade in for font
    this.buttonText.textColor = color(61, 18, 117, this.fadeInVariable);

    //sets boolean to "true". Thus the sound can be played when the mouse is hovering over the button again
    //& then the sound is starting from the beginning because of "stop"
    this.playButtonSound = true;
    this.buttonSound.stop();
  }

  //Bigger Button, bigger mouse detection box
  displayActiveOrSleeping() {
    //first value: midPoint
    //second value: translate Value
    //third value: button detection range:
    //Button image width: 150 px / 2 = +-75 px,
    //Button image height: 50 px / 2 = +-25 px
    if (
      mouseX > 550 + this.x - 145 &&
      mouseX < 550 + this.x + 145 &&
      mouseY < 310 + this.y + 15 &&
      mouseY > 310 + this.y - 45
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
      mouseX > 550 + this.x - 125 &&
      mouseX < 550 + this.x + 125 &&
      mouseY < 310 + this.y + 25 &&
      mouseY > 310 + this.y - 25
    ) {
      //sets volume to half valume & plays sound til the end
      this.buttonClickSound.setVolume(0.5);
      this.buttonClickSound.playMode("untilDone");
      this.buttonClickSound.play();
      return true;
    } else {
      return false;
    }
  }
}

import SpellButton from "./SpellButton.js";
import TextAnimation from "./TextAnimation.js";

export default class SpellButtonSelf extends SpellButton {
  constructor(x, y) {
    super(x, y);

    this.buttonText = new TextAnimation(
      "duper-bold",
      15,
      color(157, 157, 157),
      "ZAUBER AUF SICH SELBST ANWENDEN",
      this.x - 105,
      this.y + 5,
      1
    );

    this.buttonSleeping = loadImage(
      "00_Links/00_UI-Elements/spellButtonSelfSleeping.png"
    );
    this.buttonActive = loadImage(
      "00_Links/00_UI-Elements/spellButtonSelfActive.png"
    );
  }

  //Bigger Button, bigger mouse detection box
  displayActiveOrSleeping() {
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
      this.designActive();
    } else {
      this.designSleeping();
    }
  }

  displayButtonSentence() {
    this.buttonText.typeWriter();
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

import { duperBold } from "./main.js";
import TextAnimation from "./TextAnimation.js";
export default class SpellButton {
  constructor(x, y) {
    this.buttonEffect = loadImage("00_Links/00_UI-Elements/glitter.gif");

    this.buttonSound = loadSound("00_Links/00_Audio/magic.mp3");
    this.buttonClickSound = loadSound("00_Links/00_Audio/click.wav");

    this.buttonSleeping = loadImage(
      "00_Links/00_UI-Elements/spellButtonSleeping.png"
    );

    this.buttonActive = loadImage(
      "00_Links/00_UI-Elements/spellButtonActive.png"
    );

    this.x = x;
    this.y = y;

    this.counter = 0;

    this.buttonText = new TextAnimation(
      duperBold,
      15,
      color(157, 157, 157),
      "ZAUBER ANWENDEN",
      this.x - 60,
      this.y + 4,
      0.3
    );
    this.fadeInVariable = 0;
    this.playButtonSound = false;
  }

  fadeIn() {
    this.fadeInVariable += 10;
    if (this.fadeInVariable > 255) {
      this.fadeInVariable = 255;
    }
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
    this.buttonText.textColor = color(157, 157, 157, this.fadeInVariable);

    //sets boolean to "true". Thus the sound can be played when the mouse is hovering over the button again
    //& then the sound is starting from the beginning because of "stop"
    this.playButtonSound = true;

    this.buttonSound.stop();
  }

  //Method doesn`t need to be called in MainScene (is contained in displayActiveOrSleeping)
  designActive() {
    tint(255, this.fadeInVariable);
    image(
      this.buttonActive,
      this.x,
      this.y,
      this.buttonActive.width / 2,
      this.buttonActive.height / 2
    );

    image(this.buttonEffect, this.x - 50, this.y + 5, 160, 90);
    image(this.buttonEffect, this.x + 55, this.y - 15, 160, 90);
    this.buttonEffect.delay(60);

    this.buttonText.textColor = color(255, 236, 53, this.fadeInVariable);

    //Boolean makes it possible, that the sound isn`t played 30 times per second
    if (this.playButtonSound === true) {
      this.buttonSound.setVolume(0.5);
      this.buttonSound.play();
      this.playButtonSound = false;
    }
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
      mouseX > 550 + this.x - 75 &&
      mouseX < 550 + this.x + 75 &&
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

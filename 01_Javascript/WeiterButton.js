import TextAnimation from "./TextAnimation.js";
import SpellButton from "./SpellButton.js";

export default class WeiterButton extends SpellButton {
  constructor(x, y) {
    super(x, y);

    this.buttonSound = loadSound("00_Links/00_Audio/weiter.mp3");

    this.buttonSound = loadSound("00_Links/00_Audio/glitter.mp3");
    this.buttonClickSound = loadSound("00_Links/00_Audio/click.wav");

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
      this.x - 37,
      this.y + 8,
      0.15
    );
  }

  //Method doesn`t need to be called in MainScene (is contained in displayActiveOrSleeping)
  designActive() {
    //Boolean makes it possible, that the sound isn`t played 30 times per second
    if (this.playButtonSound === true) {
      this.buttonSound.setVolume(0.5);
      this.buttonSound.play();
      this.playButtonSound = false;
    }

    tint(255, this.fadeInVariable);
    image(
      this.buttonActive,
      this.x,
      this.y,
      this.buttonActive.width / 2,
      this.buttonActive.height / 2
    );

    image(this.buttonEffect, this.x - 15, this.y + 5, 110, 80);
    image(this.buttonEffect, this.x + 20, this.y - 15, 110, 80);
    this.buttonEffect.delay(60);

    this.buttonText.textColor = color(255, 236, 53, this.fadeInVariable);
  }

  displayActiveOrSleeping() {
    //first value: midPoint
    //second value: translate Value
    //third value: button detection range:
    //Button image width: 150 px / 2 = +-75 px,
    //Button image height: 50 px / 2 = +-25 px
    if (
      mouseX > 550 + this.x - 60 &&
      mouseX < 550 + this.x + 60 &&
      mouseY < 310 + this.y + 25 &&
      mouseY > 310 + this.y - 25
    ) {
      this.designActive();
    } else {
      this.designSleeping();
    }
  }
}

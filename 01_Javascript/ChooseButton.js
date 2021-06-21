import TextAnimation from "./TextAnimation.js";
import SpellButton from "./SpellButton.js";
import Tween from "./Tween.js";

export default class ChooseButton extends SpellButton {
  constructor(x, y, buttonSentence, speed) {
    super(x, y);

    this.buttonSleeping = loadImage(
      "00_Links/00_UI-Elements/answerBoxSleeping.png"
    );
    this.buttonActive = loadImage(
      "00_Links/00_UI-Elements/answerBoxActive.png"
    );

    this.movingButton = 0;
    this.movingButtonVariable = 3;

    this.speed = speed;
    this.buttonSentence = buttonSentence;
    this.buttonText = new TextAnimation(
      "duper-bold",
      17,
      color(157, 157, 157),
      this.buttonSentence,
      0,
      0,
      this.speed
    );

    this.fadeInVariable = 0;

    this.playButtonSound = false;
    this.buttonSound = loadSound("00_Links/00_Audio/woosh_2.wav");
    this.buttonClickSound = loadSound("00_Links/00_Audio/click.wav");

    //Ease in Out (code from "Tweet" (=> Garrit))
    // To start the animation just when this screen appears doesn't work.
    //=> I commented this part out

    // this.movingTweet = 0;
    // this.buttonTweet = 0;

    // this.movingTweet = {
    //   x: -25,
    // };
    // this.buttonTweet = new Tween(this.movingTweet, 1, {
    //   x: 0,
    //   ease: "easeOutSine",
    // });

    // this.buttonTweet.pause();
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
      // + this.movingTweet.x,
      this.y,
      this.buttonSleeping.width / 1.7,
      this.buttonSleeping.height / 1.7
    );
    this.active = false;

    //Resets position when its not selected
    this.movingButton = 0;

    this.buttonText.textColor = color(157, 157, 157, this.fadeInVariable);

    //sets boolean to "true". Thus the sound can be played when the mouse is hovering over the button again
    //& then the sound is starting from the beginning because of "stop"
    this.playButtonSound = true;
    this.buttonSound.stop();
  }

  designActive() {
    //prepare for tweet
    tint(255, this.fadeInVariable);
    image(
      this.buttonActive,
      this.x - 65 + this.movingButton,
      // this.movingTweet.x,
      this.y,
      this.buttonActive.width / 1.7,
      this.buttonActive.height / 1.7
    );

    //Moves Button when selected
    this.movingButton += this.movingButtonVariable;
    if (this.movingButton > 15) {
      this.movingButtonVariable = 0;
    }
    if (this.movingButton < 15) {
      this.movingButtonVariable = 3;
    }

    this.buttonText.textColor = color(255, 236, 53, this.fadeInVariable);

    //Boolean makes it possible, that the sound isn`t played 30 times per second
    if (this.playButtonSound === true) {
      this.buttonSound.play();
      this.playButtonSound = false;
    }
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
      this.designActive();
    } else {
      this.designSleeping();
    }
  }

  displayButtonSentence() {
    (this.buttonText.x = this.x - 145 + this.movingButton),
      // + this.movingTweet.x;
      (this.buttonText.y = this.y + 4);
    this.buttonText.typeWriter();
  }
}
//click-function is right here! Do not forget – its an inheritance

export default class GIFChooseButton {
  constructor(gifAnswerType) {
    this.x = 0;
    this.y = 0;

    this.fadeInVariable = 0;

    this.GIFsize = 1.1;
    this.gifAnswerType = gifAnswerType;
    // this.GIFChooseImage = loadImage(
    //   "00_Links/08_evilMentorMainScene/" + this.gifAnswerType + ".gif"
    // );
    this.playButtonSound = false;
    this.buttonSound = loadSound("00_Links/00_Audio/woosh_2.wav");
    this.buttonClickSound = loadSound("00_Links/00_Audio/click.wav");
  }

  fadeIn() {
    this.fadeInVariable += 10;
    if (this.fadeInVariable > 255) {
      this.fadeInVariable = 255;
    }
  }

  displayActiveOrSleeping(GIFChooseImage) {
    tint(255, this.fadeInVariable);
    image(
      GIFChooseImage,
      this.x,
      this.y,
      GIFChooseImage.width / this.GIFsize,
      GIFChooseImage.height / this.GIFsize
    );

    //first value: midPoint
    //second value: translate Value
    //third value: button detection range:
    //Button image width: 240 px / 2 = +-120 px,
    //Button image height: 180 px / 2 = +-90 px
    if (
      mouseX > 550 + this.x - 120 &&
      mouseX < 550 + this.x + 120 &&
      mouseY < 310 + this.y + 90 &&
      mouseY > 310 + this.y - 90
    ) {
      this.GIFsize = 1;

      noFill();
      stroke(61, 18, 117);
      strokeWeight(2);
      rect(this.x - 120 - 5, this.y - 90 - 5, 250, 190, 3);

      //Boolean makes it possible, that the sound isn`t played 30 times per second
      if (this.playButtonSound === true) {
        this.buttonSound.play();
        this.playButtonSound = false;
      }
    } else {
      //sets boolean to "true". Thus the sound can be played when the mouse is hovering over the button again
      //& then the sound is starting from the beginning because of "stop"
      this.playButtonSound = true;
      this.buttonSound.stop();
      this.GIFsize = 1.1;
    }
  }

  click() {
    //first value: midPoint
    //second value: translate Value
    //third value: button detection range:
    //Button image width: 150 px / 2 = +-75 px,
    //Button image height: 50 px / 2 = +-25 px
    if (
      mouseX > 550 + this.x - 120 &&
      mouseX < 550 + this.x + 120 &&
      mouseY < 310 + this.y + 90 &&
      mouseY > 310 + this.y - 90
    ) {
      //sets volume to half valume & plays sound til the end
      this.buttonClickSound.setVolume(0.5);
      this.buttonClickSound.playMode("untilDone");
      this.buttonClickSound.play();

      //to check the state out of multiple buttons from the same class
      this.state = "choosed";

      return true;
    } else {
      //to check the state out of multiple buttons from the same class
      this.state = "notChoosed";

      return false;
    }
  }
}

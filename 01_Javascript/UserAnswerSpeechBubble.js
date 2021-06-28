import SpeechBubble from "./SpeechBubble.js";
import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences.js";

export default class UserAnswerSpeechBubble extends SpeechBubble {
  constructor(
    speechBubbleType,
    exclamType,
    firstSen,
    firstSenType,
    secondSen,
    secondSenType,
    thirdSen,
    fourthSen,
    fifthSen,
    sixthSen,
    seventhSen,
    eighthSen,
    ninthSen,
    tenthSen
  ) {
    super(
      speechBubbleType,
      exclamType,
      firstSen,
      firstSenType,
      secondSen,
      secondSenType,
      thirdSen,
      fourthSen,
      fifthSen,
      sixthSen,
      seventhSen,
      eighthSen,
      ninthSen,
      tenthSen
    );

    this.speechBubbleType = speechBubbleType;
    this.exclamType = exclamType;

    this.speechBubble = loadImage(
      "00_Links/00_UI-Elements/" + this.speechBubbleType + ".png"
    );

    this.exclamationMark = loadImage(
      "00_Links/00_UI-Elements/" + this.exclamType + ".png"
    );

    this.speech = new TextAnimationWithMultipleSentences(
      -425,
      -50,
      20,
      27,
      1,
      color(62, 19, 118),
      this.firstSen,
      this.firstSenType,
      this.secondSen,
      this.secondSenType,
      this.thirdSen,
      this.fourthSen,
      this.fifthSen,
      this.sixthSen,
      this.seventhSen,
      this.eighthSen,
      this.ninthSen,
      this.tenthSen
    );

    this.speechBubbleType = "textBoxUser";
    this.exclamType = "exclamUser";

    this.speechBubble = loadImage(
      "00_Links/00_UI-Elements/" + this.speechBubbleType + ".png"
    );

    this.exclamationMark = loadImage(
      "00_Links/00_UI-Elements/" + this.exclamType + ".png"
    );
  }

  fadeIn() {
    this.fadeInVariable += 10;
    if (this.fadeInVariable > 255) {
      this.fadeInVariable = 255;
    }
  }

  //this function doesn't need to be called in the MainScene – its included in the displaySpeechBubble() function
  exclamationMarkBling() {
    //-1 makes the animation appear later
    this.exclamMarkFade = Math.sin(this.exclamMarkFadeVariable - 1);
    this.exclamMarkFadeVariable += 0.1;

    noStroke();
    //sinus is from 0 to 1 – so it has to be multiplied with 255 (color). Then it is from 0 to 255
    //the first value is delaying the appearence of the dots / I just experimented some time

    tint(255, this.exclamMarkFade * 255);
    image(
      this.exclamationMark,
      -463,
      -145,
      this.exclamationMark.width / 1.6,
      this.exclamationMark.height / 1.6
    );
  }

  displaySpeechBubble() {
    //needs push() & pop(). Otherwise the Speechbubble would blink, too
    push();
    this.exclamationMarkBling();
    pop();

    //needs here a tin fade effect (previous NPC Speechbubble didn`t need it, there were another tint fade before from another method)
    tint(255, this.fadeInVariable);

    //NPC problem speechbubble
    image(
      this.speechBubble,
      -306,
      42,
      this.speechBubble.width / 1.64,
      this.speechBubble.height / 1.44
    );
  }
}

import SpeechBubble from "./SpeechBubble.js";
import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences.js";

//CANT MAKE A F***** EXTENSION BECAUSE OF A DOUBLED PNG ERROR (CLASS EXTENSION DIDN´T OVERWRITE PNG TO GIF IN MainSceneSelf CLASS)
export default class SpeechBubbleSelf {
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
    //the first two rows could be written in "duperBold" and not "duper",
    //so the possibility to make them bold is added (firstSenType/secondSenType)
    //because of that a for-loop is not possible/very complicated
    this.firstSen = firstSen;
    this.firstSenType = firstSenType;
    this.secondSen = secondSen;
    this.secondSenType = secondSenType;

    this.thirdSen = thirdSen;
    this.fourthSen = fourthSen;
    this.fifthSen = fifthSen;
    this.sixthSen = sixthSen;
    this.seventhSen = seventhSen;
    this.eighthSen = eighthSen;
    this.ninthSen = ninthSen;
    this.tenthSen = tenthSen;

    this.fadeInVariable = 0;

    this.speechCanAppearNow = false;

    //change the position of the text
    this.speech = new TextAnimationWithMultipleSentences(
      -290,
      0,
      19,
      25,
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
    this.speechBubbleType = speechBubbleType;
    this.exclamType = exclamType;

    this.speechBubble = loadImage(
      "00_Links/00_UI-Elements/" + this.speechBubbleType + ".gif"
    );

    this.exclamationMark = loadImage(
      "00_Links/00_UI-Elements/" + this.exclamType + ".png"
    );

    this.exclamMarkFade = 0;
    this.exclamMarkFadeVariable = 0;
  }

  fadeIn() {
    this.fadeInVariable += 10;
    if (this.fadeInVariable > 255) {
      this.fadeInVariable = 255;
    }
  }

  //------change thoughtbubble position/size
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
      -65,
      -5,
      this.exclamationMark.width / 1.6,
      this.exclamationMark.height / 1.6
    );
  }

  ////------change thoughtbubble position/size
  displaySpeechBubble() {
    //needs push() & pop(). Otherwise the Speechbubble would blink, too
    push();
    this.exclamationMarkBling();
    pop();

    //NPC problem speechbubble
    this.speechBubble.delay(100); //standard speed
    image(
      this.speechBubble,
      -285,
      -40,
      this.speechBubble.width / 1.25,
      this.speechBubble.height / 1.25
    );

    //Stops Gif (12 Pics)
    if (this.speechBubble.getCurrentFrame() === 9) {
      this.speechBubble.pause();
      //Text appears, when speechBubble-GIF has ended
      this.speechCanAppearNow = true;
    }

    //------NEW: Text has to be centered at the y-axis, too
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length === 0 &&
      this.thirdSen.length === 0 &&
      this.fourthSen.length === 0 &&
      this.fifthSen.length === 0 &&
      this.sixthSen.length === 0 &&
      this.seventhSen.length === 0 &&
      this.eighthSen.length === 0 &&
      this.ninthSen.length === 0 &&
      this.tenthSen.length === 0
    ) {
      this.speech.y = 0;
    }
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length > 1 &&
      this.thirdSen.length === 0 &&
      this.fourthSen.length === 0 &&
      this.fifthSen.length === 0 &&
      this.sixthSen.length === 0 &&
      this.seventhSen.length === 0 &&
      this.eighthSen.length === 0 &&
      this.ninthSen.length === 0 &&
      this.tenthSen.length === 0
    ) {
      this.speech.y = -8;
    }
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length > 1 &&
      this.thirdSen.length > 1 &&
      this.fourthSen.length === 0 &&
      this.fifthSen.length === 0 &&
      this.sixthSen.length === 0 &&
      this.seventhSen.length === 0 &&
      this.eighthSen.length === 0 &&
      this.ninthSen.length === 0 &&
      this.tenthSen.length === 0
    ) {
      this.speech.y = -20;
    }
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length > 1 &&
      this.thirdSen.length > 1 &&
      this.fourthSen.length > 1 &&
      this.fifthSen.length === 0 &&
      this.sixthSen.length === 0 &&
      this.seventhSen.length === 0 &&
      this.eighthSen.length === 0 &&
      this.ninthSen.length === 0 &&
      this.tenthSen.length === 0
    ) {
      this.speech.y = -40;
    }
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length > 1 &&
      this.thirdSen.length > 1 &&
      this.fourthSen.length > 1 &&
      this.fifthSen.length > 1 &&
      this.sixthSen.length === 0 &&
      this.seventhSen.length === 0 &&
      this.eighthSen.length === 0 &&
      this.ninthSen.length === 0 &&
      this.tenthSen.length === 0
    ) {
      this.speech.y = -50;
    }
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length > 1 &&
      this.thirdSen.length > 1 &&
      this.fourthSen.length > 1 &&
      this.fifthSen.length > 1 &&
      this.sixthSen.length > 1 &&
      this.seventhSen.length === 0 &&
      this.eighthSen.length === 0 &&
      this.ninthSen.length === 0 &&
      this.tenthSen.length === 0
    ) {
      this.speech.y = -65;
    }
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length > 1 &&
      this.thirdSen.length > 1 &&
      this.fourthSen.length > 1 &&
      this.fifthSen.length > 1 &&
      this.sixthSen.length > 1 &&
      this.seventhSen.length > 1 &&
      this.eighthSen.length === 0 &&
      this.ninthSen.length === 0 &&
      this.tenthSen.length === 0
    ) {
      this.speech.y = -78;
    }
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length > 1 &&
      this.thirdSen.length > 1 &&
      this.fourthSen.length > 1 &&
      this.fifthSen.length > 1 &&
      this.sixthSen.length > 1 &&
      this.seventhSen.length > 1 &&
      this.eighthSen.length > 1 &&
      this.ninthSen.length === 0 &&
      this.tenthSen.length === 0
    ) {
      this.speech.y = -92;
    }
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length > 1 &&
      this.thirdSen.length > 1 &&
      this.fourthSen.length > 1 &&
      this.fifthSen.length > 1 &&
      this.sixthSen.length > 1 &&
      this.seventhSen.length > 1 &&
      this.eighthSen.length > 1 &&
      this.ninthSen.length > 1 &&
      this.tenthSen.length === 0
    ) {
      this.speech.y = -105;
    }
    if (
      this.firstSen.length > 1 &&
      this.secondSen.length > 1 &&
      this.thirdSen.length > 1 &&
      this.fourthSen.length > 1 &&
      this.fifthSen.length > 1 &&
      this.sixthSen.length > 1 &&
      this.seventhSen.length > 1 &&
      this.eighthSen.length > 1 &&
      this.ninthSen.length > 1 &&
      this.tenthSen.length > 1
    ) {
      this.speech.y = -118;
    }
  }
  //To center the sentences
  displaySpeechSentences() {
    if (this.speechCanAppearNow === true) {
      push();
      textAlign(CENTER);
      //NPC problem speech
      //"Fade in" runs only, when you call the color of the origin class. Because "textColor" is in the (draw) function.
      //"this.generalTextColor" is just defined once in the constructor and doesn`t update itself
      this.speech.first.textColor = color(62, 19, 118, this.fadeInVariable);
      this.speech.second.textColor = color(62, 19, 118, this.fadeInVariable);

      this.speech.sentences();
      pop();
    }
  }
}

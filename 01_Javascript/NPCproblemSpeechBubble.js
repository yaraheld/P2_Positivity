import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences.js";

export default class NPCproblemSpeechBubble {
  constructor(
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
    //the first two rows could be written in "duper-bold" and not "duper",
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

    //
    this.NPCProblemSpeech = new TextAnimationWithMultipleSentences(
      -435,
      -60,
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

    this.NPCproblemSpeechBubble = loadImage(
      "00_Links/00_UI-Elements/textBoxSad.png"
    );

    this.exclamationMark = loadImage("00_Links/00_UI-Elements/exclamSad.png");
    this.exclamMarkFade = 0;
    this.exclamMarkFadeVariable = 0;
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
    this.exclamMarkFade = Math.sin(this.exclamMarkFadeVariable);
    this.exclamMarkFadeVariable += 0.1;

    noStroke();
    //sinus is from 0 to 1 – so it has to be multiplied with 255 (color). Then it is from 0 to 255
    //the first value is delaying the appearence of the dots / I just experimented some time

    tint(255, this.exclamMarkFade * 255);
    image(
      this.exclamationMark,
      -120,
      -77,
      this.exclamationMark.width / 1.6,
      this.exclamationMark.height / 1.6
    );
  }

  displaySpeechBubble() {
    //needs push() & pop(). Otherwise the Speechbubble would blink, too
    push();
    this.exclamationMarkBling();
    pop();

    //NPC problem speechbubble
    image(
      this.NPCproblemSpeechBubble,
      -297,
      10,
      this.NPCproblemSpeechBubble.width / 1.64,
      this.NPCproblemSpeechBubble.height / 1.44
    );
  }

  displaySpeechSentences() {
    //NPC problem speech
    //"Fade in" runs only, when you call the color of the origin class. Because "textColor" is in the (draw) function.
    //"this.generalTextColor" is just defined once in the constructor and doesn`t update itself
    this.NPCProblemSpeech.first.textColor = color(
      62,
      19,
      118,
      this.fadeInVariable
    );
    this.NPCProblemSpeech.second.textColor = color(
      62,
      19,
      118,
      this.fadeInVariable
    );

    this.NPCProblemSpeech.sentences();
  }
}

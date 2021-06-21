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

    //entspr.  varieablen nich einsetze!
    this.NPCProblemSpeech = new TextAnimationWithMultipleSentences(
      -435,
      -60,
      19,
      25,
      1,
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
  }

  displaySpeechBubble() {
    //-------------a class for itself (FADE IN!)
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
    this.NPCProblemSpeech.generalTextColor = color(0, 0, 0, 0);
    this.NPCProblemSpeech.sentences();
  }
}

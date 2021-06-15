import TextAnimation from "./TextAnimation";

export default class TextAnimationWithMultipleSentences {
  constructor(
    x,
    y,
    generalTextSize,
    spacing,
    generalSpeed,
    generalTextColor,
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
    this.x = x;
    this.y = y;
    //space between text rows
    this.spacing = spacing;

    //the first two rows could be written in "duper-bold" and not "duper",
    //so the possibility to make them bold is added (firstSenType/secondSenType)
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

    this.generalTextSize = generalTextSize;
    this.generalTextFont = "Duper";
    this.generalSpeed = generalSpeed;
    this.generalTextColor = generalTextColor;

    //creates a single text animation for the first sentence/first row
    //y-value gets higher with every new row => arrange sentences below each other

    this.first = 0;
    this.second = 0;
    this.third = 0;
    this.fourth = 0;
    this.fifth = 0;
    this.sixth = 0;
    this.seventh = 0;
    this.eighth = 0;
    this.ninth = 0;
    this.tenth = 0;

    this.sentenceNumberArray = [
      this.first,
      this.second,
      this.third,
      this.fourth,
      this.fifth,
      this.sixth,
      this.seventh,
      this.eighth,
      this.ninth,
      this.tenth,
    ];

    // this.second = new TextAnimation(
    //   this.secondSenType,
    //   this.generalTextSize,
    //   this.generalTextColor,
    //   this.secondSen,
    //   0,
    //   1 * this.spacing,
    //   this.generalSpeed
    // );
    // this.third = new TextAnimation(
    //   this.generalTextFont,
    //   this.generalTextSize,
    //   this.generalTextColor,
    //   this.thirdSen,
    //   0,
    //   2 * this.spacing,
    //   this.generalSpeed
    // );
    // this.fourth = new TextAnimation(
    //   this.generalTextFont,
    //   this.generalTextSize,
    //   this.generalTextColor,
    //   this.fourthSen,
    //   0,
    //   3 * this.spacing,
    //   this.generalSpeed
    // );
    // this.fifth = new TextAnimation(
    //   this.generalTextFont,
    //   this.generalTextSize,
    //   this.generalTextColor,
    //   this.fifthSen,
    //   0,
    //   4 * this.spacing,
    //   this.generalSpeed
    // );
    // this.sixth = new TextAnimation(
    //   this.generalTextFont,
    //   this.generalTextSize,
    //   this.generalTextColor,
    //   this.sixthSen,
    //   0,
    //   5 * this.spacing,
    //   this.generalSpeed
    // );
    // this.seventh = new TextAnimation(
    //   this.generalTextFont,
    //   this.generalTextSize,
    //   this.generalTextColor,
    //   this.seventhSen,
    //   0,
    //   6 * this.spacing,
    //   this.generalSpeed
    // );
    // this.eighth = new TextAnimation(
    //   this.generalTextFont,
    //   this.generalTextSize,
    //   this.generalTextColor,
    //   this.eighthSen,
    //   0,
    //   7 * this.spacing,
    //   this.generalSpeed
    // );
    // this.ninth = new TextAnimation(
    //   this.generalTextFont,
    //   this.generalTextSize,
    //   this.generalTextColor,
    //   this.ninthSen,
    //   0,
    //   8 * this.spacing,
    //   this.generalSpeed
    // );
    // this.tenth = new TextAnimation(
    //   this.generalTextFont,
    //   this.generalTextSize,
    //   this.generalTextColor,
    //   this.tenthSen,
    //   0,
    //   9 * this.spacing,
    //   this.generalSpeed
    // );
  }

  sentences() {
    push();
    translate(this.x, this.y);

    for (this.k = 0; this.k < 10; this.k++) {
      this.sentenceNumberArray[this.k] = new TextAnimation(
        this.firstSenType,
        this.generalTextSize,
        this.generalTextColor,
        this.firstSen,
        0,
        this.k * this.spacing,
        this.generalSpeed
      );
    }

    this.sentenceNumberArray[0].typeWriter();
    for (this.i = 0; this.i < 10; this.i++) {
      if (this.sentenceNumberArray[this.i].typingEnded === true) {
        this.sentenceNumberArray[this.i + 1].typeWriter();
      }
    }

    // this.first.typeWriter();

    // if (this.first.typingEnded === true) {
    //   this.second.typeWriter();
    // }

    // if (this.second.typingEnded === true) {
    //   this.third.typeWriter();
    // }

    // if (this.third.typingEnded === true) {
    //   this.fourth.typeWriter();
    // }

    // if (this.fourth.typingEnded === true) {
    //   this.fifth.typeWriter();
    // }

    // if (this.fifth.typingEnded === true) {
    //   this.sixth.typeWriter();
    // }

    // if (this.sixth.typingEnded === true) {
    //   this.seventh.typeWriter();
    // }

    // if (this.seventh.typingEnded === true) {
    //   this.eighth.typeWriter();
    // }

    // if (this.eighth.typingEnded === true) {
    //   this.ninth.typeWriter();
    // }
    // if (this.ninth.typingEnded === true) {
    //   this.tenth.typeWriter();
    // }

    pop();
  }

  displayAllTextAtOnce() {
    this.first.displayAllTextAtOnce();
    this.second.displayAllTextAtOnce();
    this.third.displayAllTextAtOnce();
    this.fourth.displayAllTextAtOnce();
    this.fifth.displayAllTextAtOnce();
    this.sixth.displayAllTextAtOnce();
    this.seventh.displayAllTextAtOnce();
    this.eighth.displayAllTextAtOnce();
    this.ninth.displayAllTextAtOnce();
  }
}

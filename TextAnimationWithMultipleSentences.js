import TextAnimation from "./TextAnimation";

export default class TextAnimationWithMultipleSentences {
  constructor(
    x,
    y,
    spacing,
    firstSen,
    firstSenType,
    secondSen,
    secondSenType,
    thirdSen,
    fourthSen,
    fifthSen,
    sixthSen,
    SeventhSen,
    eighthSen,
    ninthSen,
    tenthSen
  ) {
    this.x = x;
    this.y = y;
    this.spacing = spacing;

    this.firstSen = firstSen;
    this.firstSenType = firstSenType;
    this.secondSen = secondSen;
    this.secondSenType = secondSenType;
    this.thirdSen = thirdSen;
    this.fourthSen = fourthSen;
    this.fifthSen = fifthSen;
    this.sixthSen = sixthSen;
    this.SeventhSen = SeventhSen;
    this.eighthSen = eighthSen;
    this.ninthSen = ninthSen;
    this.tenthSen = tenthSen;

    this.first = 0;

    this.generalTextSize = 15;
    this.generalTextFont = "Duper";
    this.generalSpeed = 50;
  }

  sentences() {
    this.first = new TextAnimation();
  }
}

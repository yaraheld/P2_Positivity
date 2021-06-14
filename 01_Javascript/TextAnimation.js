export default class TextAnimation {
  constructor(textFont, textSize, textColor, firstSentence, x, y, speed) {
    this.firstSentence = firstSentence;
    this.textFont = textFont;
    this.textSize = textSize;
    this.textColor = textColor;
    this.x = x;
    this.y = y;
    this.counter = 0;
    this.speed = speed;
    this.typeSpeed = true;
    this.n = 0;
    this.typingEnded = false;
  }

  typeWriter() {
    if (this.typeSpeed === true) {
      if (this.n < this.firstSentence.length) {
        fill(this.textColor);
        noStroke();
        textFont(this.textFont);
        textSize(this.textSize);
        text(this.firstSentence.substring(0, this.n + 1), this.x, this.y);
        this.n++;
        this.typeSpeed = false;
      }
      //So that it doesnt disappear, when every string is finished and n is equal to the string length
      if (this.n === this.firstSentence.length) {
        fill(this.textColor);
        noStroke();
        textFont(this.textFont);
        textSize(this.textSize);
        text(this.firstSentence.substring(0, this.n + 1), this.x, this.y);
      }

      if (this.n === this.firstSentence.length) {
        this.typingEnded = true;
      }
    } else {
      //during typeSpeed is false, it is blacked out. During this time it displays the previous status
      fill(this.textColor);
      noStroke();
      textFont(this.textFont);
      textSize(this.textSize);
      text(this.firstSentence.substring(0, this.n + 1), this.x, this.y);
    }
    this.counter += this.speed;
    if (this.counter > 50) {
      this.counter = 0;
      this.typeSpeed = true;
    }
  }
  displayAllTextAtOnce() {
    this.n = this.firstSentence.length;
  }
}

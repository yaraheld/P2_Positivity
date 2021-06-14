export default class TextAnimation {
  constructor(textFont, textSize, firstSentence, x, y, speed) {
    this.firstSentence = firstSentence;
    this.textFont = textFont;
    this.textSize = textSize;
    this.x = x;
    this.y = y;
    this.counter = 0;
    this.speed = speed;
    this.typeSpeed = true;
    this.n = 0;
  }

  typeWriter() {
    if (this.typeSpeed === true) {
      if (this.n < this.firstSentence.length) {
        fill(255);
        noStroke();
        textFont(this.textFont);
        textSize(this.textSize);
        text(this.firstSentence.substring(0, this.n + 1), this.x, this.y);
        this.n++;
        this.typeSpeed = false;
      }
    }
    this.counter += this.speed;
    if (this.counter > 50) {
      this.counter = 0;
      this.typeSpeed = true;
    }
  }
}

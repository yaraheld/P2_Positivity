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

        //source: can`t find the source again :((( For the next time I know better.

        //substring:
        //string is like an array
        //span between first array-index (0) and second array-index (this.n + 1)
        //like random function: random(0, this.n + 1)
        text(this.firstSentence.substring(0, this.n + 1), this.x, this.y);
        this.n++;
        this.typeSpeed = false;
      }
      //With this function the text doesnt disappears
      // when every string is completed and n is equal to the string length
      if (this.n === this.firstSentence.length) {
        fill(this.textColor);
        noStroke();
        textFont(this.textFont);
        textSize(this.textSize);
        text(this.firstSentence.substring(0, this.n + 1), this.x, this.y);
      }
      //typing ends, when every letter is displayed
      if (this.n === this.firstSentence.length) {
        this.typingEnded = true;
      }
    } else {
      //when typeSpeed is false, the text is blacked out for this time.
      //So this function displays the currently text when typeSpeed=false
      fill(this.textColor);
      noStroke();
      textFont(this.textFont);
      textSize(this.textSize);
      text(this.firstSentence.substring(0, this.n + 1), this.x, this.y);
    }

    //speed, how fast the next letter is displayed
    this.counter += this.speed;
    if (this.counter > 1) {
      this.counter = 0;
      this.typeSpeed = true;
    }
  }

  //use for mouseClicked
  displayAllTextAtOnce() {
    this.n = this.firstSentence.length;
  }
}

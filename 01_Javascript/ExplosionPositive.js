export default class ExplosionPositive {
  constructor(x, y) {
    this.positive = loadImage(
      "./00_Links/09_bossFight/explosion_positive_small.gif"
    );
    this.x = x;
    this.y = y;
    this.counter = 0;
    this.end = false;
  }

  explosionPositive() {
    this.counter += 1;
    //2 seconds
    if (this.counter > 50) {
      this.counter = 50;
      this.positive.pause();
      this.end = true;
    }
    this.positive.delay(50);
    image(
      this.positive,
      this.x,
      this.y,
      this.positive.width,
      this.positive.height
    );
  }
}

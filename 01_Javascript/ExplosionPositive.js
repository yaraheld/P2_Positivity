export default class ExplosionPositive {
  constructor(x, y) {
    this.positive = loadImage("./00_Links/09_bossFight/explosion_positive.gif");
    this.x = x;
    this.y = y;
    this.counter = 0;
    this.end = false;
  }

  explosionPositive() {
    this.counter += 1;
    //4 seconds
    if (this.counter > 120) {
      this.counter = 120;
      this.positive.pause();
      this.end = true;
    }
    image(
      this.positive,
      this.x,
      this.y,
      this.positive.width / 2,
      this.positive.height / 2
    );
  }
}

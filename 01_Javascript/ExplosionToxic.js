export default class ExplosionToxic {
  constructor(x, y) {
    this.toxic = loadImage("./00_Links/09_bossFight/explosion_toxic_small.gif");

    this.x = x;
    this.y = y;
    this.counter = 0;
    this.end = false;
  }

  explosionToxic() {
    this.counter += 1;
    //2 seconds
    if (this.counter > 50) {
      this.counter = 50;
      this.toxic.pause();
      this.end = true;
    }
    this.toxic.delay(50);
    image(this.toxic, this.x, this.y, this.toxic.width, this.toxic.height);
  }
}

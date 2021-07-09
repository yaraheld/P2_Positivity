export default class ExplosionToxic {
  constructor(x, y) {
    this.toxic = loadImage("./00_Links/09_bossFight/explosion_toxic.gif");

    this.x = x;
    this.y = y;
    this.counter = 0;
    this.end = false;
  }

  explosionToxic() {
    this.counter += 1;
    //4 seconds
    if (this.counter > 120) {
      this.counter = 120;
      this.toxic.pause();
      this.end = true;
    }
    image(
      this.toxic,
      this.x,
      this.y,
      this.toxic.width / 2,
      this.toxic.height / 2
    );
  }
}

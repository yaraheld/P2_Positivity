import SpellButtonSelf from "./SpellButtonSelf.js";
import TextAnimation from "./TextAnimation.js";

export default class SpellButtonMentor extends SpellButtonSelf {
  constructor(x, y) {
    super(x, y);

    this.buttonText = new TextAnimation(
      "duper-bold",
      15,
      color(157, 157, 157),
      "ZAUBER AUF DEN MENTOR ANWENDEN",
      this.x - 112,
      this.y + 4,
      1
    );
  }
}

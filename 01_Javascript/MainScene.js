import SpellButton from "./SpellButton";
export default class MainScene {
  constructor() {
    this.chef_szene_1 = loadImage("00_Links/02_chefMainScene/chef_szene_1.png");
    this.chef_neutral = loadImage("00_Links/02_chefMainScene/chef_neutral.png");
    this.spellButton = new SpellButton(-10, 200);
  }

  panoramaScreen() {
    image(
      this.chef_szene_1,
      -20,
      -20,
      this.chef_szene_1.width / 1.1,
      this.chef_szene_1.height / 1.1
    );
    this.spellButton.design();
  }

  spellButtonHitTest() {
    this.spellButton.hitTest();
  }

  npcProblemScreen() {
    image(
      this.chef_neutral,
      0,
      -300,
      this.chef_neutral.width,
      this.chef_neutral.height
    );
  }

  chooseAnswerScreen() {}

  answerScreen() {}

  npcReactionScreen() {}

  itemScreen() {}
}

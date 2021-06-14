import SpellButton from "./SpellButton";
export default class MainScene {
  constructor() {
    this.panoramaScreenImage = loadImage(
      "00_Links/02_chefMainScene/panoramaScreen.png"
    );
    this.NPCproblem = loadImage("00_Links/02_chefMainScene/NPCproblem.png");

    this.happy = loadImage("00_Links/02_chefMainScene/happy.png");
    this.mad = loadImage("00_Links/02_chefMainScene/mad.png");
    this.normal = loadImage("00_Links/02_chefMainScene/normal.png");
    this.thinking = loadImage("00_Links/02_chefMainScene/thinking.png");

    this.aura_happy = loadImage("00_Links/00_UI-Elements/Aura_happy.png");
    this.aura_mad = loadImage("00_Links/00_UI-Elements/Aura_mad.png");
    this.aura_neutral = loadImage("00_Links/00_UI-Elements/Aura_neutral.png");
    this.aura_sad = loadImage("00_Links/00_UI-Elements/Aura_sad.png");
    this.aura_shocked = loadImage("00_Links/00_UI-Elements/Aura_shocked.png");
    this.aura_toxic = loadImage("00_Links/00_UI-Elements/Aura_toxic.png");

    this.ground = loadImage("00_Links/00_UI-Elements/ground.png");

    this.spellButton = new SpellButton(-10, 200);
    this.showPanoramaScreenBool = true;
    this.showNPCProblemScreenBool = false;
  }

  showPanoramaScreen() {
    this.showPanoramaScreenBool = true;
  }

  showNPCProblemScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = true;
  }

  panoramaScreen() {
    if (this.showPanoramaScreenBool === true) {
      image(
        this.panoramaScreenImage,
        -20,
        -20,
        this.panoramaScreenImage.width / 1.1,
        this.panoramaScreenImage.height / 1.1
      );
      this.spellButton.design();
    }
  }

  spellButtonHitTest() {
    if (this.showPanoramaScreenBool === true) {
      this.spellButton.hitTest();
    }
  }

  npcProblemScreen() {
    if (this.showNPCProblemScreenBool === true) {
      image(
        this.ground,
        300,
        200,
        this.ground.width / 1.5,
        this.ground.height / 1.5
      );

      image(
        this.aura_sad,
        180,
        0,
        this.aura_sad.width / 1.3,
        this.aura_sad.height / 1.3
      );

      image(
        this.NPCproblem,
        180,
        0,
        this.NPCproblem.width / 1.3,
        this.NPCproblem.height / 1.3
      );
    }
  }

  chooseAnswerScreen() {}

  answerScreen() {}

  npcReactionScreen() {}

  itemScreen() {}
}

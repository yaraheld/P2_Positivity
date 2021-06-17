import SpellButton from "./SpellButton.js";
import ChooseButton from "./chooseButton.js";
import WeiterButton from "./weiterButton.js";

export default class MainScene {
  constructor() {
    this.happy = loadImage("00_Links/02_chefMainScene/happy.png");
    this.mad = loadImage("00_Links/02_chefMainScene/mad.png");
    this.normal = loadImage("00_Links/02_chefMainScene/normal.png");
    this.thinking = loadImage("00_Links/02_chefMainScene/thinking.png");

    this.aura_happy = loadImage("00_Links/00_UI-Elements/Aura_happy.png");
    this.aura_mad = loadImage("00_Links/00_UI-Elements/Aura_mad.png");
    this.aura_neutral = loadImage("00_Links/00_UI-Elements/Aura_neutral.png");
    this.aura_sad = loadImage("00_Links/00_UI-Elements/Aura_sad.png");
    this.aura_shocked = loadImage("00_Links/00_UI-Elements/Aura_shock.png");
    this.aura_toxic = loadImage("00_Links/00_UI-Elements/Aura_toxic.png");

    this.ground = loadImage("00_Links/00_UI-Elements/ground.png");

    //Panorama Screen
    this.panoramaScreenImage = loadImage(
      "00_Links/02_chefMainScene/panoramaScreen.png"
    );
    this.spellButton = new SpellButton(-10, 200);
    this.showPanoramaScreenBool = true;

    //NPCproblem Screen
    this.NPCproblem = loadImage("00_Links/02_chefMainScene/NPCproblem.png");
    this.showNPCProblemScreenBool = false;
    this.weiterButtonAnswerScreen = new WeiterButton(-250, 150);

    //AnswerScreen
    this.showAnswerScreenBool = false;

    this.firstTextButton = new ChooseButton(-350, -100, "ERSTE ANTWORT", 20);
    this.secondTextButton = new ChooseButton(-350, -25, "ZWEITE ANTWORT", 20);
    this.thirdTextButton = new ChooseButton(-350, 50, "DRITTE ANTWORT", 20);
    this.fourthTextButton = new ChooseButton(-350, 125, "VIERTE ANTWORT", 20);
  }

  //for mouseClicked
  showPanoramaScreen() {
    this.showPanoramaScreenBool = true;
  }

  panoramaScreen() {
    if (this.showPanoramaScreenBool === true) {
      //checks the state of the button every time
      this.spellButton.fadeIn();
      this.spellButton.displayActiveOrSleeping();
      this.spellButton.displayButtonSentence();

      //Pics
      image(
        this.panoramaScreenImage,
        -20,
        -20,
        this.panoramaScreenImage.width / 1.1,
        this.panoramaScreenImage.height / 1.1
      );
    }
  }

  //for mouseClicked
  spellButtonClick() {
    //returns true when it is clicked in the correct area
    if (this.showPanoramaScreenBool === true) {
      return this.spellButton.click();
    }
  }

  //for mouseClicked
  showNPCProblemScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = true;
  }

  npcProblemScreen() {
    if (this.showNPCProblemScreenBool === true) {
      this.weiterButtonAnswerScreen.fadeIn();
      this.weiterButtonAnswerScreen.displayActiveOrSleeping();
      this.weiterButtonAnswerScreen.displayButtonSentence();
    }
  }

  //for mouseClicked
  weiterButtonAnswerScreenClick() {
    if (this.showNPCProblemScreenBool === true) {
      return this.weiterButtonAnswerScreen.click();
    }
  }

  //for mouseClicked
  showChooseAnswerScreen() {
    this.showNPCProblemScreenBool = false;
    this.showAnswerScreenBool = true;
  }

  chooseAnswerScreen() {
    if (this.showAnswerScreenBool === true) {
      //buttons (comes first, that the fade in works properly)
      this.firstTextButton.fadeIn();
      this.firstTextButton.displayActiveOrSleeping();
      this.firstTextButton.displayButtonSentence();

      this.secondTextButton.fadeIn();
      this.secondTextButton.displayActiveOrSleeping();
      this.secondTextButton.displayButtonSentence();

      this.thirdTextButton.fadeIn();
      this.thirdTextButton.displayActiveOrSleeping();
      this.thirdTextButton.displayButtonSentence();

      this.fourthTextButton.fadeIn();
      this.fourthTextButton.displayActiveOrSleeping();
      this.fourthTextButton.displayButtonSentence();

      //Pics
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

  answerScreen() {}

  npcReactionScreen() {}

  itemScreen() {}
}

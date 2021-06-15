import ChooseButton from "./chooseButton";
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

    //Panorama Screen
    this.spellButton = new SpellButton(-10, 200);
    this.showPanoramaScreenBool = true;
    this.showNPCProblemScreenBool = false;

    //NPCproblem Screen
    this.firstTextButton = new ChooseButton(-350, -100, "ERSTE ANTWORT");
    this.secondTextButton = new ChooseButton(-350, -25, "ZWEITE ANTWORT");
    this.thirdTextButton = new ChooseButton(-350, 50, "DRITTE ANTWORT");
    this.fourthTextButton = new ChooseButton(-350, 125, "VIERTE ANTWORT");
  }

  showPanoramaScreen() {
    this.showPanoramaScreenBool = true;
  }

  panoramaScreen() {
    if (this.showPanoramaScreenBool === true) {
      //Pics
      image(
        this.panoramaScreenImage,
        -20,
        -20,
        this.panoramaScreenImage.width / 1.1,
        this.panoramaScreenImage.height / 1.1
      );

      //Button
      //checks the state of the button every time
      this.spellButton.displayActiveOrSleeping();
      this.spellButton.displayButtonSentence();
      this.spellButton.fadeIn();
    }
  }

  spellButtonClick() {
    //returns true when it is clicked in the correct area
    if (this.showPanoramaScreenBool === true) {
      return this.spellButton.click();
    }
  }

  showNPCProblemScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = true;
  }

  npcProblemScreen() {
    //Pics
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

      // //buttons
      this.firstTextButton.displayActiveOrSleeping();
      this.firstTextButton.fadeIn();
      this.firstTextButton.displayButtonSentence();

      this.secondTextButton.displayActiveOrSleeping();
      this.secondTextButton.fadeIn();
      this.secondTextButton.displayButtonSentence();

      this.thirdTextButton.displayActiveOrSleeping();
      this.thirdTextButton.fadeIn();
      this.thirdTextButton.displayButtonSentence();

      this.fourthTextButton.displayActiveOrSleeping();
      this.fourthTextButton.fadeIn();
      this.fourthTextButton.displayButtonSentence();
    }
  }

  chooseAnswerScreen() {}

  answerScreen() {}

  npcReactionScreen() {}

  itemScreen() {}
}

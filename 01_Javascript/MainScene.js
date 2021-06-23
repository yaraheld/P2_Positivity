import SpellButton from "./SpellButton.js";
import ChooseButton from "./chooseButton.js";
import WeiterButton from "./weiterButton.js";
import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences.js";
import NPCProblemSpeechBubble from "./NPCProblemSpeechBubble.js";
import Timer from "./Timer.js";

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

    //-----------------------------------------------------Panorama Screen
    this.panoramaScreenImage = loadImage(
      "00_Links/02_chefMainScene/panoramaScreen.png"
    );
    this.spellButton = new SpellButton(-10, 200);
    this.showPanoramaScreenBool = true;

    //-----------------------------------------------------NPCproblem Screen
    this.NPCproblem = loadImage("00_Links/02_chefMainScene/NPCproblem.png");

    this.showNPCProblemScreenBool = false;
    this.weiterButtonAnswerScreen = new WeiterButton(-210, 205);
    this.npcProblemSpeechbubble = new NPCProblemSpeechBubble(
      "Ich dachte, dass Geld immer",
      "Duper-Bold",
      "alles wett macht...",
      "Duper-Bold",
      "Aber was soll ich damit, wenn",
      "sich meine Frau immer mehr",
      "von mir distanziert?",
      "Moment, warum erzähle ich",
      "Ihnen das überhaupt?",
      "",
      "",
      ""
    );

    this.typingInDotsFade = 0;
    this.typingInDotsFadeVariable = 0;

    //-----------------------------------------------------chooseAnswerScreen
    this.showChooseAnswerScreenBool = false;

    this.toxicTextButton = new ChooseButton(
      -300,
      -80,
      "VERSUCHEN SIE, POSITIV ZU BLEIBEN.",
      0.7
    );
    this.positiveTextButton = new ChooseButton(
      -300,
      -9,
      "VERSUCHEN SIE, PRIORITÄTEN ZU SETZEN.",
      0.7
    );
    this.neutralTextButton = new ChooseButton(
      -300,
      63,
      "UIUIUI MEINE BLASE...",
      0.7
    );
    this.negativeTextButton = new ChooseButton(
      -300,
      135,
      "DAS GEHT MICH EIGENTLICH NICHTS AN...",
      0.7
    );

    //for random order
    this.buttonArray = [1, 2, 3, 4];
    this.randomOrderJustOnce = false;
    this.counter = 0;
    this.temp = 0;

    // Toxic => FIRST Button (-80)
    // Positive => SECOND (-9)
    // Neutral => THIRD (63),
    // Negative => FOURTH (135)
    this.buttonPositionValues = [-80, -9, 63, 135];

    this.chooseAnswerScreenTimer = new Timer(480, -250, 0.5);

    //-----------------------------------------------------AnswerScreen
    this.showAnswerScreenBool = false;
  }

  //-------------------------------------------------------------------------------------------------Panorama screen
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
      //fade in, too because of the tint fade of the .fadeIn() method
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

  //-------------------------------------------------------------------------------------------------NPC problem screen
  //for mouseClicked
  showNPCProblemScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = true;
  }

  npcProblemScreen() {
    if (this.showNPCProblemScreenBool === true) {
      //WeiterButton
      this.weiterButtonAnswerScreen.fadeIn();
      this.weiterButtonAnswerScreen.displayActiveOrSleeping();
      this.weiterButtonAnswerScreen.displayButtonSentence();

      //Pics
      //pics fade in because auf weiterButtonAnswerScreen.fadeIn (nopush() and pop() were used
      image(
        this.ground,
        300,
        230,
        this.ground.width / 1.5,
        this.ground.height / 1.5
      );

      image(
        this.aura_sad,
        180,
        -20,
        this.aura_sad.width / 1.3,
        this.aura_sad.height / 1.3
      );

      image(
        this.NPCproblem,
        180,
        10,
        this.NPCproblem.width / 1.2,
        this.NPCproblem.height / 1.2
      );

      this.npcProblemSpeechbubble.fadeIn();
      this.npcProblemSpeechbubble.displaySpeechBubble();
      this.npcProblemSpeechbubble.displaySpeechSentences();
    }
  }

  //for mouseClicked
  weiterButtonAnswerScreenClick() {
    if (this.showNPCProblemScreenBool === true) {
      return this.weiterButtonAnswerScreen.click();
    }
  }

  //-------------------------------------------------------------------------------------------------Choose answer screen
  //for mouseClicked
  showChooseAnswerScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = false;
    this.showChooseAnswerScreenBool = true;
  }

  //doesn't need to be clalled in Main, because chooseAnswerScreen includes this Method
  typingInDots() {
    //-1 makes the animation appear later
    this.typingInDotsFade = Math.sin(this.typingInDotsFadeVariable - 1);
    this.typingInDotsFadeVariable += 0.1;

    noStroke();
    //sinus is from 0 to 1 – so it has to be multiplied with 255 (color). Then it is from 0 to 255
    //the first value is delaying the appearence of the dots / I just experimented some time

    //first dot
    fill(62, 19, 118, 150 + this.typingInDotsFade * 255);
    ellipse(-463, -130, 8, 8);
    //second dot
    fill(62, 19, 118, 75 + this.typingInDotsFade * 255);
    ellipse(-450, -130, 8, 8);
    //third dot
    fill(62, 19, 118, this.typingInDotsFade * 255);
    ellipse(-437, -130, 8, 8);
  }

  //doesn't need to be clalled in Main, because chooseAnswerScreen includes this Method
  randomChooseAnswer() {
    if (this.randomOrderJustOnce === false) {
      this.counter = this.buttonArray.length;

      // While there are elements in the array
      while (this.counter > 0) {
        // Pick a random index: random number in the range 0 to less than 1; then scale it up to counter (4 Buttons)
        this.index = Math.floor(Math.random() * this.counter);

        // Decrease counter by 1
        this.counter--;

        // And swap the last element with it
        this.temp = this.buttonArray[this.counter];
        this.buttonArray[this.counter] = this.buttonArray[this.index];
        this.buttonArray[this.index] = this.temp;
      }
      console.log(this.buttonArray);
      //So from the last value (counter = 4) to the first value (counter = 1) of the array the values are replaced with a random value
      this.randomOrderJustOnce = true;
    }
  }

  chooseAnswerScreen() {
    if (this.showChooseAnswerScreenBool === true) {
      this.randomChooseAnswer();

      //push() & pop(), so that the NPC and the aura isn`t affected from the fade in again (same pic, but fades in two times)
      push();

      //sets buttons in random position:
      //this.buttonArray = [1, 2, 3, 4];
      // this.buttonPositionValues = [-80, -9, 63, 135];
      for (this.i = 0; this.i < 4; this.i++) {
        switch (true) {
          case this.buttonArray[this.i] === 1:
            this.toxicTextButton.y = this.buttonPositionValues[this.i];
            break;
          case this.buttonArray[this.i] === 2:
            this.positiveTextButton.y = this.buttonPositionValues[this.i];
            break;
          case this.buttonArray[this.i] === 3:
            this.neutralTextButton.y = this.buttonPositionValues[this.i];
            break;
          case this.buttonArray[this.i] === 4:
            this.negativeTextButton.y = this.buttonPositionValues[this.i];
            break;
        }
      }

      //buttons (comes first, that the fade in works properly)
      this.toxicTextButton.fadeIn();
      this.toxicTextButton.displayActiveOrSleeping();
      this.toxicTextButton.displayButtonSentence();

      this.positiveTextButton.fadeIn();
      this.positiveTextButton.displayActiveOrSleeping();
      this.positiveTextButton.displayButtonSentence();

      this.neutralTextButton.fadeIn();
      this.neutralTextButton.displayActiveOrSleeping();
      this.neutralTextButton.displayButtonSentence();

      this.negativeTextButton.fadeIn();
      this.negativeTextButton.displayActiveOrSleeping();
      this.negativeTextButton.displayButtonSentence();

      //"Typing in"-Dots
      this.typingInDots();
      pop();

      //Pics
      image(
        this.ground,
        300,
        230,
        this.ground.width / 1.5,
        this.ground.height / 1.5
      );

      image(
        this.aura_sad,
        180,
        -20,
        this.aura_sad.width / 1.3,
        this.aura_sad.height / 1.3
      );

      image(
        this.NPCproblem,
        180,
        10,
        this.NPCproblem.width / 1.2,
        this.NPCproblem.height / 1.2
      );

      //timer
      this.chooseAnswerScreenTimer.start();
      this.chooseAnswerScreenTimer.timeIsUp();

      //when timer ends, you choose automatically "neutral" answer
      if (this.chooseAnswerScreenTimer.timeIsUp()) {
        this.neutralTextButton.state = "choosed";
        this.showAnswerScreen();
      }
    }
  }

  //for mouseClicked
  chooseAnswerScreenClick() {
    if (this.showChooseAnswerScreenBool === true) {
      return (
        this.toxicTextButton.click() ||
        this.positiveTextButton.click() ||
        this.neutralTextButton.click() ||
        this.negativeTextButton.click()
      );
    }
  }

  //for mouseClicked
  showAnswerScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = false;
    this.showChooseAnswerScreenBool = false;
    this.showAnswerScreenBool = true;
  }

  answerScreen() {
    if (this.showAnswerScreenBool === true) {
      if (this.toxicTextButton.state === "choosed") {
        fill(0);
        textSize(20);
        text("TOXIC", 0, 0);
      } else if (this.positiveTextButton.state === "choosed") {
        fill(0);
        textSize(20);
        text("POSITIVE", 0, 0);
      } else if (this.neutralTextButton.state === "choosed") {
        fill(0);
        textSize(20);
        text("NEUTRAL", 0, 0);
      } else if (this.negativeTextButton.state === "choosed") {
        fill(0);
        textSize(20);
        text("NEGATIVE", 0, 0);
      }
    }
  }

  npcReactionScreen() {}

  itemScreen() {}
}

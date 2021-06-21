import SpellButton from "./SpellButton.js";
import ChooseButton from "./chooseButton.js";
import WeiterButton from "./weiterButton.js";
import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences.js";
import NPCProblemSpeechBubble from "./NPCProblemSpeechBubble.js";

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

    //AnswerScreen
    this.showChooseAnswerScreenBool = false;

    this.positiveTextButton = new ChooseButton(
      -300,
      -80,
      "VERSUCHEN SIE, PRIORITÄTEN ZU SETZEN.",
      0.7
    );
    this.negativeTextButton = new ChooseButton(
      -300,
      -9,
      "DAS GEHT MICH EIGENTLICH NICHTS AN...",
      0.7
    );
    this.neutralTextButton = new ChooseButton(
      -300,
      63,
      "UIUIUI MEINE BLASE...",
      0.7
    );
    this.toxicTextButton = new ChooseButton(
      -300,
      135,
      "VERSUCHEN SIE, POSITIV ZU BLEIBEN.",
      0.7
    );

    this.randomAnswerOrder = Math.floor(random(0, 4));
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
    // let arr = [1, 2, 3, 4, 5, 6];
    // let randomReihenfolgeOnce = "false";
    // let showShowRandomReihenfolge = "false";
    //   if (pleaseStop === true) {
    //     if (countToNewRandom.length === 6) {
    //       levelUpPhase = "true";
    //       levelUpFadeBoolian = "true";
    //     }
    //   }
    //   if (randomReihenfolgeOnce === "true") {
    //     signforCard = [];
    //     counter = arr.length;
    //     blendInShuffleVariable = "true";
    //     round.push(1);
    //     roundCount = "true";
    //     // While there are elements in the array
    //     while (counter > 0) {
    //       // Pick a random index
    //       index = Math.floor(Math.random() * counter);
    //       // Decrease counter by 1
    //       counter--;
    //       // And swap the last element with it
    //       temp = arr[counter];
    //       arr[counter] = arr[index];
    //       arr[index] = temp;
    //     }
    //     randomReihenfolgeOnce = "false";
    //   }
    // }
  }

  chooseAnswerScreen() {
    if (this.showChooseAnswerScreenBool === true) {
      this.randomChooseAnswer();
      //push() & pop(), so that the NPC and the aura isn`t affected from the fade in again (same pic, but fades in two times)
      push();
      //buttons (comes first, that the fade in works properly)
      this.positiveTextButton.fadeIn();
      this.positiveTextButton.displayActiveOrSleeping();
      this.positiveTextButton.displayButtonSentence();

      this.negativeTextButton.fadeIn();
      this.negativeTextButton.displayActiveOrSleeping();
      this.negativeTextButton.displayButtonSentence();

      this.neutralTextButton.fadeIn();
      this.neutralTextButton.displayActiveOrSleeping();
      this.neutralTextButton.displayButtonSentence();

      this.toxicTextButton.fadeIn();
      this.toxicTextButton.displayActiveOrSleeping();
      this.toxicTextButton.displayButtonSentence();

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
    }
  }

  answerScreen() {}

  npcReactionScreen() {}

  itemScreen() {}
}

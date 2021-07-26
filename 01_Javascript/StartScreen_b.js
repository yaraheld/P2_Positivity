import { duper, duperBold } from "./main.js";
import StartScreenButton from "./StartScreenButton.js";
import TextAnimation from "./TextAnimation.js";
import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences.js";

export default class StartScreen {
  constructor() {
    this.startButton = new StartScreenButton(0, 70);
    this.startScreen = true;
    this.startIntroductionBool = false;

    this.smiley = loadImage("./00_Links/001_aStartScreen/smiley.png");

    this.startScreenText = new TextAnimation(
      duper,
      20,
      color(255, 236, 56),
      "Entwickle ein gesundes & positives Mindset.",
      0,
      200,
      1
    );

    this.fadeInVariable = 0;

    //Introduction
    this.fadeInIntroduction = 0;
    this.introductionText = new TextAnimationWithMultipleSentences(
      0,
      -100,
      19,
      25,
      1,
      color(255),
      "Wenn du willst, beantworte die Fragen ehrlich.",
      duper,
      "  ",
      duper,
      "Alle Antworten haben Auswirkungen auf ein Event am Ende der Simulation.",
      "Dort kannst du auch noch einige Tipps für das nächste Mal abstauben. ",
      "Jetzt werfen wir dich erstmal ein bisschen ins kalte Wasser.",
      "   ",
      "Es fängt alles an, als du eines Morgens in deinem Bett aufwachst…",
      "     ",
      "     ",
      "     "
    );

    this.introductionFadeOut = 0;

    //To begin scenes (first on from introduction scene)
    this.showFirstScreen = false;
    this.showFirstScreenJustOnce = false;
  }

  fadeIn() {
    if (this.startScreen === true) {
      this.fadeInVariable += 10;
      if (this.fadeInVariable > 255) {
        this.fadeInVariable = 255;
      }
    }
  }

  displayStartScreen() {
    if (this.startScreen === true) {
      //Background
      fill(61, 18, 117);
      rect(-550, -310, 1100, 620);

      tint(255, this.fadeInVariable);
      //Smiley
      image(
        this.smiley,
        0,
        0,
        this.smiley.width / 1.5,
        this.smiley.height / 1.5
      );

      //Font
      push();
      textAlign(CENTER);
      fill(255, this.fadeInVariable);
      textFont(duper);
      textSize(140);
      text("Positivity", 0, -50);
      pop();

      //Sentence
      push();
      textAlign(CENTER);
      this.startScreenText.textColor = color(255, 236, 53, this.fadeInVariable);
      this.startScreenText.typeWriter();
      pop();
    }
  }

  displayStartButton() {
    if (this.startScreen === true) {
      this.startButton.fadeIn();
      this.startButton.displayActiveOrSleeping();
      this.startButton.displayButtonSentence();
    }
  }

  startButtonClick() {
    if (this.startScreen === true) {
      return this.startButton.click();
    }
  }

  displayIntroduction() {
    if (this.startIntroductionBool === true) {
      this.fadeInIntroduction += 10;
      if (this.fadeInIntroduction > 255) {
        this.fadeInIntroduction = 255;
        this.startScreen = false;
      }

      //Background
      fill(61, 18, 117, this.fadeInIntroduction);
      rect(-550, -310, 1100, 620);

      push();
      textAlign(CENTER);
      //Fade in
      this.introductionText.first.textColor = color(
        255,
        this.fadeInIntroduction
      );

      //Last sentence has different color and duperBold
      this.introductionText.seventh.textFont = duperBold;
      this.introductionText.seventh.textColor = color(
        255,
        236,
        53,
        this.fadeInIntroduction
      );
      this.introductionText.sentences();
      pop();

      //Blend in to next scene
      if (this.introductionText.everySentenceHasEnded === true) {
        //Have to made extra statement with this.showFirstScreenJustOnce===false, because otherwise
        // this.showFirstScreenJustOnce is very time true, because introductionFadeOut is everytime over 255
        //and thus the first introscene in main.js is displayed the whole time
        if (this.showFirstScreenJustOnce === false) {
          this.introductionFadeOut += 2;
          if (this.introductionFadeOut > 255) {
            this.introductionFadeOut = 255;
            this.showFirstScreen = true;
            this.showFirstScreenJustOnce = true;
            this.startIntroductionBool = false;
          }
        }
        fill(255, this.introductionFadeOut);
        rect(-550, -310, 1100, 620);
      }
    }
  }
}

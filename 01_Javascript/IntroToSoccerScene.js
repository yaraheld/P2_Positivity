import BetweenScene from "./BetweenScene.js";
import BetweenScenesText from "./BetweenScenesText.js";
import WeiterButton from "./WeiterButton.js";
import { duper, duperBold } from "./main.js";

export default class IntroToSoccerScene extends BetweenScene {
  constructor() {
    super();

    //First screen
    this.firstScreenImageFadeIn = 0;
    this.firstScreenBool = false;
    this.firstScreenImage = loadImage(
      "00_Links/001_introToSoccerScene/firstScreen.png"
    );
    this.firstScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Gäääähn... irgendwie fühle ich mich heute... besonders.. gut!",
      0,
      -200,
      1,
      false
    );
    this.weiterButtonToSecondScreen = new WeiterButton(0, 240);

    //Second screen
    this.secondScreenImagefadeIn = 0;
    this.secondScreenBool = false;
    this.secondScreenImage = loadImage(
      "00_Links/001_introToSoccerScene/secondScreen.png"
    );

    this.secondScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Nanu? Was ist denn das?",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToThirdScreen = new WeiterButton(-170, 70);

    this.weiterButtonToThirdScreen.buttonText.firstSentence = "EI BERÜHREN";
    this.weiterButtonToThirdScreen.buttonText.textSize = 20;
    this.weiterButtonToThirdScreen.buttonText.x = -220;
    this.weiterButtonToThirdScreen.buttonText.y = 75;

    //Third screen
    this.thirdScreenImageFadeIn = 0;
    this.thirdScreenBool = false;
    this.thirdScreenImage = loadImage(
      "00_Links/001_introToSoccerScene/WakeUpScene.png"
    );

    this.thirdScreenText = new BetweenScenesText(
      duperBold,
      18.5,
      "Ein Drache?!“",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToFourthScreen = new WeiterButton(0, 240);

    //Fourth screen
    this.fourthScreenImageFadeIn = 0;
    this.fourthScreenBool = false;
    this.fourthScreenImage = loadImage(
      "00_Links/001_introToSoccerScene/thirdScreen.png"
    );

    this.fourthScreenText = new BetweenScenesText(
      duperBold,
      18.5,
      "Mentor: „Hallo, das Schicksal hat dich auserwählt und dir eine magische Kraft zuteil werden lassen. Ich bin übrigens dein Mentor.“",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToFifthScreen = new WeiterButton(440, 240);

    //Fifth screen
    this.fifthScreenImageFadeIn = 0;
    this.fifthScreenBool = false;
    this.fifthScreenImage = loadImage(
      "00_Links/001_introToSoccerScene/thirdScreen.png"
    );

    this.fifthScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Mentor: „Wenn du deine Magie anwendest, erzählen dir die Leute alles, was sie bedrückt. Versuch sie aufzumuntern!“",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToSixthScreen = new WeiterButton(440, 240);

    //Sixth screen
    this.sixthScreenImageFadeIn = 0;
    this.sixthScreenBool = false;
    this.sixthScreenImage = loadImage(
      "00_Links/001_introToSoccerScene/thirdScreen.png"
    );

    this.sixthScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Mentor: „Die Reaktion deines Gegenübers wird sich in Form einer Rüstung an dir manifestieren. Antworte daher überlegt!“",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToSeventhScreen = new WeiterButton(440, 240);

    //Seventh screen
    this.seventhScreenImageFadeIn = 0;
    this.seventhScreenBool = false;
    this.seventhScreenImage = loadImage(
      "00_Links/001_introToSoccerScene/seventhScreen.png"
    );

    this.seventhScreenText = new BetweenScenesText(
      duperBold,
      18.5,
      "Eine Zauberkraft?! Wo kann man die bitte besser gebrauchen als auf der Arbeit. Los gehts!",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToEighthScreen = new WeiterButton(440, 240);

    //Eighth screen
    this.eighthScreenImageFadeIn = 0;
    this.eighthScreenBool = false;
    this.eighthScreenImage = loadImage(
      "00_Links/001_introToSoccerScene/eighthScreen.png"
    );

    this.eighthScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Ist das im Eingangsbereich nicht Fred aus dem gleichen Abteil? Der sieht aber sauer aus...",
      0,
      170,
      1,
      false
    );

    this.weiterButtonToMainSceneStarts = new WeiterButton(0, 240);
  }

  showFirstScreen() {
    this.firstScreenBool = true;
  }

  firstScreen() {
    if (this.firstScreenBool === true) {
      //For fading in the answer pic
      this.firstScreenImageFadeIn += 10;
      if (this.firstScreenImageFadeIn > 255) {
        this.firstScreenImageFadeIn = 255;
      }
      tint(255, this.firstScreenImageFadeIn);
      image(
        this.firstScreenImage,
        0,
        0,
        this.firstScreenImage.width,
        this.firstScreenImage.height
      );

      //WeiterButton
      this.weiterButtonToSecondScreen.fadeIn();
      this.weiterButtonToSecondScreen.displayActiveOrSleeping();
      this.weiterButtonToSecondScreen.displayButtonSentence();

      this.firstScreenText.fadeIn();
      this.firstScreenText.displayTextBox();
      this.firstScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonSecondScreenClick() {
    if (this.firstScreenBool === true) {
      return this.weiterButtonToSecondScreen.click();
    }
  }

  showSecondScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = true;
  }

  secondScreen() {
    if (this.secondScreenBool === true) {
      this.secondScreenImagefadeIn += 5;
      if (this.secondScreenImagefadeIn > 255) {
        this.secondScreenImagefadeIn = 255;
      }
      tint(255, this.secondScreenImagefadeIn);
      image(
        this.secondScreenImage,
        0,
        0,
        this.secondScreenImage.width,
        this.secondScreenImage.height
      );
      this.secondScreenImage.delay(200);

      //WeiterButton
      this.weiterButtonToThirdScreen.fadeIn();
      this.weiterButtonToThirdScreen.displayActiveOrSleeping();
      this.weiterButtonToThirdScreen.displayButtonSentence();

      this.secondScreenText.fadeIn();
      this.secondScreenText.displayTextBox();
      this.secondScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonThirdScreenClick() {
    if (this.secondScreenBool === true) {
      return this.weiterButtonToThirdScreen.click();
    }
  }

  showThirdScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = true;
  }

  thirdScreen() {
    if (this.thirdScreenBool === true) {
      this.thirdScreenImageFadeIn += 5;
      if (this.thirdScreenImageFadeIn > 255) {
        this.thirdScreenImageFadeIn = 255;
      }
      tint(255, this.thirdScreenImageFadeIn);

      image(
        this.thirdScreenImage,
        0,
        0,
        this.thirdScreenImage.width / 1,
        this.thirdScreenImage.height / 1
      );

      this.thirdScreenText.fadeIn();
      this.thirdScreenText.displayTextBox();
      this.thirdScreenText.displayText();

      //WeiterButton
      this.weiterButtonToFourthScreen.fadeIn();
      this.weiterButtonToFourthScreen.displayActiveOrSleeping();
      this.weiterButtonToFourthScreen.displayButtonSentence();
    }
  }

  //for mouseClicked
  weiterButtonFourthScreenClick() {
    if (this.thirdScreenBool === true) {
      return this.weiterButtonToFourthScreen.click();
    }
  }

  showFourthScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = true;
  }

  fourthScreen() {
    if (this.fourthScreenBool === true) {
      tint(255, 255);
      image(
        this.fourthScreenImage,
        0,
        0,
        this.fourthScreenImage.width / 1,
        this.fourthScreenImage.height / 1
      );

      //WeiterButton
      this.weiterButtonToFifthScreen.fadeIn();
      this.weiterButtonToFifthScreen.displayActiveOrSleeping();
      this.weiterButtonToFifthScreen.displayButtonSentence();

      this.fourthScreenText.fadeIn();
      this.fourthScreenText.displayTextBox();
      this.fourthScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonFifthScreenClick() {
    if (this.fourthScreenBool === true) {
      return this.weiterButtonToFifthScreen.click();
    }
  }

  showFifthScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = false;
    this.fifthScreenBool = true;
  }

  fifthScreen() {
    if (this.fifthScreenBool === true) {
      tint(255, 255);
      image(
        this.fifthScreenImage,
        0,
        0,
        this.fifthScreenImage.width,
        this.fifthScreenImage.height
      );

      //WeiterButton
      this.weiterButtonToSixthScreen.fadeIn();
      this.weiterButtonToSixthScreen.displayActiveOrSleeping();
      this.weiterButtonToSixthScreen.displayButtonSentence();

      this.fifthScreenText.fadeIn();
      this.fifthScreenText.displayTextBox();
      this.fifthScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonSixthScreenClick() {
    if (this.fifthScreenBool === true) {
      return this.weiterButtonToSixthScreen.click();
    }
  }

  showSixthScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = false;
    this.fifthScreenBool = false;
    this.sixthScreenBool = true;
  }

  sixthScreen() {
    if (this.sixthScreenBool === true) {
      tint(255, 255);
      image(
        this.sixthScreenImage,
        0,
        0,
        this.sixthScreenImage.width / 1,
        this.sixthScreenImage.height / 1
      );

      //WeiterButton
      this.weiterButtonToSeventhScreen.fadeIn();
      this.weiterButtonToSeventhScreen.displayActiveOrSleeping();
      this.weiterButtonToSeventhScreen.displayButtonSentence();

      this.sixthScreenText.fadeIn();
      this.sixthScreenText.displayTextBox();
      this.sixthScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonSeventhScreenClick() {
    if (this.sixthScreenBool === true) {
      return this.weiterButtonToSeventhScreen.click();
    }
  }

  showSeventhScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = false;
    this.fifthScreenBool = false;
    this.sixthScreenBool = false;
    this.seventhScreenBool = true;
  }

  seventhScreen() {
    if (this.seventhScreenBool === true) {
      this.seventhScreenImageFadeIn += 5;
      if (this.seventhScreenImageFadeIn > 255) {
        this.seventhScreenImageFadeIn = 255;
      }

      tint(255, this.seventhScreenImageFadeIn);
      image(
        this.seventhScreenImage,
        0,
        0,
        this.seventhScreenImage.width / 1,
        this.seventhScreenImage.height / 1
      );

      //WeiterButton
      this.weiterButtonToEighthScreen.fadeIn();
      this.weiterButtonToEighthScreen.displayActiveOrSleeping();
      this.weiterButtonToEighthScreen.displayButtonSentence();

      this.seventhScreenText.fadeIn();
      this.seventhScreenText.displayTextBox();
      this.seventhScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonEighthScreenClick() {
    if (this.seventhScreenBool === true) {
      return this.weiterButtonToEighthScreen.click();
    }
  }

  showEighthScreen() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = false;
    this.fifthScreenBool = false;
    this.sixthScreenBool = false;
    this.seventhScreenBool = false;
    this.eighthScreenBool = true;
  }

  eighthScreen() {
    if (this.eighthScreenBool === true) {
      this.eighthScreenImageFadeIn += 5;
      if (this.eighthScreenImageFadeIn > 255) {
        this.eighthScreenImageFadeIn = 255;
      }

      tint(255, this.eighthScreenImageFadeIn);
      image(
        this.eighthScreenImage,
        0,
        0,
        this.eighthScreenImage.width / 1,
        this.eighthScreenImage.height / 1
      );

      //WeiterButton
      this.weiterButtonToMainSceneStarts.fadeIn();
      this.weiterButtonToMainSceneStarts.displayActiveOrSleeping();
      this.weiterButtonToMainSceneStarts.displayButtonSentence();

      this.eighthScreenText.fadeIn();
      this.eighthScreenText.displayTextBox();
      this.eighthScreenText.displayText();
    }
  }
  //for mouseClicked
  weiterButtonNextPanoramaScreenFromMainSceneClick() {
    if (this.eighthScreenBool === true) {
      return this.weiterButtonToMainSceneStarts.click();
    }
  }

  showNextPanoramaScreenFromMainScene() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = false;
    this.fifthScreenBool = false;
    this.sixthScreenBool = false;
    this.seventhScreenBool = false;
    this.eighthScreenBool = false;
  }
}

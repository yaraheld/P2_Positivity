import BetweenScene from "./BetweenScene.js";
import BetweenScenesText from "./BetweenScenesText.js";
import WeiterButton from "./WeiterButton.js";
import { duper, duperBold } from "./main.js";

export default class SocialToDimensionScene extends BetweenScene {
  constructor() {
    super();

    //First screen
    this.firstScreenImageFadeIn = 0;
    this.firstScreenBool = false;
    this.firstScreenImage = loadImage(
      "00_Links/05_socialToDimensionScene/firstScreen.png"
    );
    this.firstScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Okay jetzt aber zurück zum Arbeitsplatz...",
      0,
      -200,
      1,
      false
    );
    this.weiterButtonToSecondScreen = new WeiterButton(440, 240);

    //Second screen
    this.secondScreenImageFadeIn = 0;
    this.secondScreenBool = false;
    this.secondScreenImage = loadImage(
      "00_Links/05_socialToDimensionScene/secondScreen.png"
    );

    this.secondScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Huch, der Mentor!",
      110,
      -200,
      1,
      true
    );

    this.weiterButtonToThirdScreen = new WeiterButton(440, 240);

    //Third screen
    this.thirdScreenImageFadeIn = 0;
    this.thirdScreenBool = false;
    this.thirdScreenImage = loadImage(
      "00_Links/05_socialToDimensionScene/thirdScreen.png"
    );

    this.thirdScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Mentor: „Es gibt einen Notfall in einer anderen Dimension! Deine Zauberkraft wird gebraucht!“",
      0,
      245,
      1,
      true
    );

    this.weiterButtonToFourthScreen = new WeiterButton(440, 240);

    //Fourth screen
    this.fourthScreenImageFadeIn = 0;
    this.fourthScreenBool = false;
    this.fourthScreenImage = loadImage(
      "00_Links/05_socialToDimensionScene/thirdScreen.png"
    );

    this.fourthScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Mentor: „Ich bringe dich schnell mit einem Dimensionszauber dort hin!“",
      0,
      245,
      1,
      true
    );

    this.weiterButtonToFifthScreen = new WeiterButton(440, 240);

    //Fifth screen
    this.fifthScreenGIFFadeIn = 0;
    this.fifthScreenBool = false;
    this.fifthScreenGIF = loadImage(
      "00_Links/05_socialToDimensionScene/fifthScreen.gif"
    );

    this.fifthScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Wuuuuushhhh....",
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
      "00_Links/05_socialToDimensionScene/sixthScreen.png"
    );

    this.sixthScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Die andere Dimension besteht aus... Bildschirmen?",
      0,
      -50,
      1,
      false
    );

    this.weiterButtonToMainSceneStarts = new WeiterButton(440, 240);
    this.showNextPanoramaScreenFromMainSceneBool = false;
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
      this.secondScreenImageFadeIn += 5;
      if (this.secondScreenImageFadeIn > 255) {
        this.secondScreenImageFadeIn = 255;
      }
      tint(255, this.secondScreenImageFadeIn);
      image(
        this.secondScreenImage,
        0,
        0,
        this.secondScreenImage.width / 1,
        this.secondScreenImage.height / 1
      );

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

      //WeiterButton
      this.weiterButtonToFourthScreen.fadeIn();
      this.weiterButtonToFourthScreen.displayActiveOrSleeping();
      this.weiterButtonToFourthScreen.displayButtonSentence();

      this.thirdScreenText.fadeIn();
      this.thirdScreenText.displayTextBox();
      this.thirdScreenText.displayText();
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
      this.fourthScreenImageFadeIn += 5;
      if (this.fourthScreenImageFadeIn > 255) {
        this.fourthScreenImageFadeIn = 255;
      }
      tint(
        255
        // , this.fourthScreenImageFadeIn
      );
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
      //WeiterButton
      this.weiterButtonToSixthScreen.fadeIn();
      this.weiterButtonToSixthScreen.displayActiveOrSleeping();
      this.weiterButtonToSixthScreen.displayButtonSentence();

      this.fifthScreenGIFFadeIn += 5;
      if (this.fifthScreenGIFFadeIn > 255) {
        this.fifthScreenGIFFadeIn = 255;
      }
      tint(255, this.fifthScreenGIFFadeIn);
      image(
        this.fifthScreenGIF,
        0,
        40,
        this.fifthScreenGIF.width,
        this.fifthScreenGIF.height
      );
      this.fifthScreenGIF.delay(200);

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
      this.sixthScreenImageFadeIn += 5;
      if (this.sixthScreenImageFadeIn > 255) {
        this.sixthScreenImageFadeIn = 255;
      }
      tint(255, this.sixthScreenImageFadeIn);
      image(
        this.sixthScreenImage,
        0,
        0,
        this.sixthScreenImage.width / 1,
        this.sixthScreenImage.height / 1
      );

      //WeiterButton
      this.weiterButtonToMainSceneStarts.fadeIn();
      this.weiterButtonToMainSceneStarts.displayActiveOrSleeping();
      this.weiterButtonToMainSceneStarts.displayButtonSentence();

      this.sixthScreenText.fadeIn();
      this.sixthScreenText.displayTextBox();
      this.sixthScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonNextPanoramaScreenFromMainSceneClick() {
    if (this.sixthScreenBool === true) {
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
  }
}

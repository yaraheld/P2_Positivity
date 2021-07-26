import BetweenScene from "./BetweenScene.js";
import BetweenScenesText from "./BetweenScenesText.js";
import WeiterButton from "./WeiterButton.js";
import { duper, duperBold } from "./main.js";

export default class CoffeeToInvestorScene extends BetweenScene {
  constructor() {
    super();

    //First screen
    this.firstScreenImage = loadImage(
      "00_Links/03_coffeeToInvestorScene/firstScreen.png"
    );
    this.firstScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Die Hose wird safe Eindruck machen. Auf zum Meeting in der Chefetage!",
      -180,
      -220,
      1,
      false
    );
    this.weiterButtonToSecondScreen = new WeiterButton(210, 200);
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.fadeInPic = 0;

    //Second screen
    this.secondScreenImageFadeIn = 0;
    this.secondScreenImage = loadImage(
      "00_Links/03_coffeeToInvestorScene/secondScreen.png"
    );

    this.secondScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Der traurige Typ am Aufzug... das ist doch der Investor!",
      15,
      -220,
      1,
      false
    );

    this.weiterButtonToMainSceneStarts = new WeiterButton(23, 240);
    this.showNextPanoramaScreenFromMainSceneBool = false;
  }

  showFirstScreen() {
    this.firstScreenBool = true;
  }

  firstScreen() {
    if (this.firstScreenBool === true) {
      //For fading in the answer pic
      this.fadeInPic += 10;
      if (this.fadeInPic > 255) {
        this.fadeInPic = 255;
      }

      push();
      tint(255, this.fadeInPic);
      image(
        this.firstScreenImage,
        0,
        0,
        this.firstScreenImage.width,
        this.firstScreenImage.height
      );
      pop();

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
        this.secondScreenImage.width,
        this.secondScreenImage.height
      );

      //WeiterButton
      this.weiterButtonToMainSceneStarts.fadeIn();
      this.weiterButtonToMainSceneStarts.displayActiveOrSleeping();
      this.weiterButtonToMainSceneStarts.displayButtonSentence();

      this.secondScreenText.fadeIn();
      this.secondScreenText.displayTextBox();
      this.secondScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonNextPanoramaScreenFromMainSceneClick() {
    if (this.secondScreenBool === true) {
      return this.weiterButtonToMainSceneStarts.click();
    }
  }

  showNextPanoramaScreenFromMainScene() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.showNextPanoramaScreenFromMainSceneBool = true;
  }
}

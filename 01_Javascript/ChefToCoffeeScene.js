import BetweenScene from "./BetweenScene.js";
import WeiterButton from "./weiterButton.js";
import BetweenScenesText from "./BetweenScenesText.js";
import { duper, duperBold } from "./main.js";

export default class ChefToCoffeeScene extends BetweenScene {
  constructor() {
    super();

    //First screen
    this.firstScreenGIF = loadImage(
      "00_Links/02_chefToCoffeeScene/firstScreen.gif"
    );
    this.firstScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Die Zeit vergeht ja super schnell... sweet, Mittagspause!",
      0,
      -200,
      1,
      true
    );
    this.weiterButtonToSecondScreen = new WeiterButton(430, 240);
    this.firstScreenBool = false;
    this.secondScreenBool = false;

    //Second screen
    this.secondScreenImageFadeIn = 0;
    this.secondScreenImage = loadImage(
      "00_Links/02_chefToCoffeeScene/secondScreen.png"
    );

    this.secondScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Ah, da sind ja auch schon Steve und Fred, die heimlich das Essen für alle aufgegessen haben.",
      0,
      245,
      1,
      false
    );

    this.weiterButtonToThirdScreen = new WeiterButton(430, 240);
    this.thirdScreenBool = false;

    //Third screen

    this.thirdScreenImage = loadImage(
      "00_Links/02_chefToCoffeeScene/thirdScreen.png"
    );

    this.thirdScreenImageFadeIn = 0;

    this.thirdScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Immerhin kannst du den Kaf...",
      0,
      -20,
      1,
      false
    );

    this.weiterButtonToMainSceneStarts = new WeiterButton(430, 240);
    this.showNextPanoramaScreenFromMainSceneBool = false;
  }

  showFirstScreen() {
    this.firstScreenBool = true;
  }

  firstScreen() {
    if (this.firstScreenBool === true) {
      //WeiterButton
      this.weiterButtonToSecondScreen.fadeIn();
      this.weiterButtonToSecondScreen.displayActiveOrSleeping();
      this.weiterButtonToSecondScreen.displayButtonSentence();

      this.firstScreenText.fadeIn();
      this.firstScreenText.displayTextBox();
      this.firstScreenText.displayText();

      image(
        this.firstScreenGIF,
        0,
        20,
        this.firstScreenGIF.width / 1.3,
        this.firstScreenGIF.height / 1.3
      );
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
      this.weiterButtonToMainSceneStarts.fadeIn();
      this.weiterButtonToMainSceneStarts.displayActiveOrSleeping();
      this.weiterButtonToMainSceneStarts.displayButtonSentence();

      this.thirdScreenText.fadeIn();
      this.thirdScreenText.displayTextBox();
      this.thirdScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonNextPanoramaScreenFromMainSceneClick() {
    if (this.thirdScreenBool === true) {
      return this.weiterButtonToMainSceneStarts.click();
    }
  }

  showNextPanoramaScreenFromMainScene() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.showNextPanoramaScreenFromMainSceneBool = true;
  }
}

import BetweenScene from "./BetweenScene.js";
import BetweenScenesText from "./BetweenScenesText.js";
import WeiterButton from "./weiterButton.js";
import { duper, duperBold } from "./main.js";

export default class DestroyedToEvilMentorScene extends BetweenScene {
  constructor() {
    super();

    //First screen
    this.firstScreenImageFadeIn = 0;
    this.firstScreenBool = false;
    this.firstScreenImage = loadImage(
      "00_Links/07_destroyedToEvilMentorScene/firstScreen.png"
    );
    this.firstScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Und überhaupt... WAS BIST DU, DASS HIER ALLES ZERSTÖRT IST?",
      0,
      -200,
      1,
      true
    );
    this.weiterButtonToSecondScreen = new WeiterButton(0, 240);

    //Second screen
    this.secondScreenImagefadeIn = 0;
    this.secondScreenBool = false;
    this.secondScreenImage = loadImage(
      "00_Links/07_destroyedToEvilMentorScene/secondScreen.png"
    );

    this.secondScreenText = new BetweenScenesText(
      duper,
      18.5,
      "       WARUM HAST DU SO EINEN BESCHISSENEN DIMENSIONSZAUBER ANGEWENDET?!      ",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToThirdScreen = new WeiterButton(0, 240);

    //Third screen
    this.thirdScreenImageFadeIn = 0;
    this.thirdScreenBool = false;
    this.thirdScreenImage = loadImage(
      "00_Links/07_destroyedToEvilMentorScene/thirdScreen.png"
    );

    this.thirdScreenText = new BetweenScenesText(
      duper,
      18.5,
      "       Mentor: „Weißt du was? DIESE GANZEN ENTSCHEIDUNGEN GEHEN MIR AM A**** VORBEI!“       ",
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
      "00_Links/07_destroyedToEvilMentorScene/fourthScreen.png"
    );

    this.fourthScreenText = new BetweenScenesText(
      duperBold,
      18.5,
      "...hast du etwa alles mit Absicht zerstört?!",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToMainSceneStarts = new WeiterButton(0, 240);
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
        30,
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
      // this.secondScreenImagefadeIn += 5;
      // if (this.secondScreenImagefadeIn > 255) {
      //   this.secondScreenImagefadeIn = 255;
      // }
      tint(
        255
        // , this.secondScreenImagefadeIn
      );
      image(
        this.secondScreenImage,
        30,
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
      //Mentor is above the text
      this.thirdScreenText.fadeIn();
      this.thirdScreenText.displayTextBox();
      this.thirdScreenText.displayText();

      // this.thirdScreenImageFadeIn += 5;
      // if (this.thirdScreenImageFadeIn > 255) {
      //   this.thirdScreenImageFadeIn = 255;
      // }
      tint(
        255
        // this.thirdScreenImageFadeIn
      );

      image(
        this.thirdScreenImage,
        30,
        0,
        this.thirdScreenImage.width / 1,
        this.thirdScreenImage.height / 1
      );

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
      this.fourthScreenImageFadeIn += 5;
      if (this.fourthScreenImageFadeIn > 255) {
        this.fourthScreenImageFadeIn = 255;
      }
      tint(255, this.fourthScreenImageFadeIn);
      image(
        this.fourthScreenImage,
        30,
        0,
        this.fourthScreenImage.width / 1,
        this.fourthScreenImage.height / 1
      );

      //WeiterButton
      this.weiterButtonToMainSceneStarts.fadeIn();
      this.weiterButtonToMainSceneStarts.displayActiveOrSleeping();
      this.weiterButtonToMainSceneStarts.displayButtonSentence();

      this.fourthScreenText.fadeIn();
      this.fourthScreenText.displayTextBox();
      this.fourthScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonNextPanoramaScreenFromMainSceneClick() {
    if (this.fourthScreenBool === true) {
      return this.weiterButtonToMainSceneStarts.click();
    }
  }

  showNextPanoramaScreenFromMainScene() {
    this.firstScreenBool = false;
    this.secondScreenBool = false;
    this.thirdScreenBool = false;
    this.fourthScreenBool = false;
  }
}

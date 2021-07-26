import BetweenScene from "./BetweenScene.js";
import BetweenScenesText from "./BetweenScenesText.js";
import WeiterButton from "./WeiterButton.js";
import FightButton from "./FightButton.js";
import { duper, duperBold } from "./main.js";

export default class EvilMentorToEndBossScene extends BetweenScene {
  constructor() {
    super();

    //First screen
    this.firstScreenGIFFadeIn = 0;
    this.firstScreenBool = false;
    this.GIFstopCounter = 0;

    this.ground = loadImage("00_Links/00_UI-Elements/ground.png");

    this.firstScreenText = new BetweenScenesText(
      duper,
      18.5,
      "   Mentor: „UAAAAAARRGGGHHH!“   ",
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
      "00_Links/08_evilMentorToEndBossScene/secondScreen.png"
    );

    this.secondScreenText = new BetweenScenesText(
      duper,
      18.5,
      "Mentor: „Versuch mich erst garnicht aufzuhalten, Mensch.“",
      0,
      -200,
      1,
      true
    );

    this.weiterButtonToMainSceneStarts = new FightButton(
      0,
      195,
      "TROTZDEM WEITER...",
      -90
    );
  }

  showFirstScreen() {
    this.firstScreenBool = true;
  }

  firstScreen(transformationGIF) {
    if (this.firstScreenBool === true) {
      //For fading in the answer pic
      this.firstScreenGIFFadeIn += 5;
      if (this.firstScreenGIFFadeIn > 255) {
        this.firstScreenGIFFadeIn = 255;
      }
      tint(255, this.firstScreenGIFFadeIn);
      image(this.ground, 0, 150, this.ground.width / 2, this.ground.height / 2);
      image(
        transformationGIF,
        20,
        -45,
        transformationGIF.width / 1.2,
        transformationGIF.height / 1.2
      );
      transformationGIF.delay(100);
      this.GIFstopCounter += 1;
      //7 Sek
      if (this.GIFstopCounter > 210) {
        transformationGIF.pause();
      }

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
      //WeiterButton
      this.weiterButtonToMainSceneStarts.fadeIn();
      this.weiterButtonToMainSceneStarts.displayActiveOrSleeping();
      this.weiterButtonToMainSceneStarts.displayButtonSentence();

      this.secondScreenImagefadeIn += 10;
      if (this.secondScreenImagefadeIn > 255) {
        this.secondScreenImagefadeIn = 255;
      }

      tint(255, this.secondScreenImagefadeIn);

      image(
        this.secondScreenImage,
        -60,
        -50,
        this.secondScreenImage.width / 1.5,
        this.secondScreenImage.height / 1.5
      );

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
  }
}

import BetweenScene from "./BetweenScene.js";
import BetweenScenesText from "./BetweenScenesText.js";
import WeiterButton from "./weiterButton.js";

export default class SoccerToChefScene extends BetweenScene {
  constructor() {
    super();

    //First screen
    this.firstScreenImage = loadImage(
      "00_Links/01_soccerToChefScene/firstScreen.png"
    );
    this.firstScreenText = new BetweenScenesText(
      "Duper",
      19,
      "Hm, interessante Zauberkraft... erstmal die Lage im Büro checken.",
      -190,
      -200,
      1,
      false
    );
    this.fadeInPic = 0;
    this.firstScreenBool = false;
    this.weiterButtonToMainSceneStarts = new WeiterButton(210, 200);
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
      this.weiterButtonToMainSceneStarts.fadeIn();
      this.weiterButtonToMainSceneStarts.displayActiveOrSleeping();
      this.weiterButtonToMainSceneStarts.displayButtonSentence();

      this.firstScreenText.fadeIn();
      this.firstScreenText.displayTextBox();
      this.firstScreenText.displayText();
    }
  }

  //for mouseClicked
  weiterButtonNextPanoramaScreenFromMainSceneClick() {
    if (this.firstScreenBool === true) {
      return this.weiterButtonToMainSceneStarts.click();
    }
  }

  showNextPanoramaScreenFromMainScene() {
    this.firstScreenBool = false;
    this.showNextPanoramaScreenFromMainSceneBool = true;
  }
}

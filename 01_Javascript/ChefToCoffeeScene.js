import BetweenScene from "./BetweenScene.js";
import WeiterButton from "./weiterButton.js";
import BetweenScenesText from "./BetweenScenesText.js";

export default class ChefToCoffeeScene extends BetweenScene {
  constructor() {
    super();
    this.firstScreenGIF = loadImage(
      "00_Links/02_chefToCoffeeScene/firstScreen.gif"
    );
    this.firstScreenText = new BetweenScenesText(
      "Duper",
      19,
      "Als du mit deiner alltäglichen Arbeit beginnst, vergeht die Zeit magisch schnell. Schon Mittagspause – geil!",
      0,
      -200,
      1,
      true
    );
    this.weiterButtonToSecondScreen = new WeiterButton(430, 240);
    this.firstScreenBool = false;
    this.secondScreenBool = false;

    //Second Screen
    this.secondScreenImageFadeIn = 0;
    this.secondScreenImage = loadImage(
      "00_Links/02_chefToCoffeeScene/secondScreen.png"
    );
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
    }
  }
}

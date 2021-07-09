import SpellButtonMentor from "./SpellButtonMentor.js";
import MainScene from "./MainScene.js";
import GIFChooseButton from "./GIFChooseButton.js";
import { duper, duperBold } from "./main.js";

export default class EvilMentorMainScene extends MainScene {
  constructor(
    sceneType,

    //Spellbutton x-Postion//
    spellButtonXposition,
    spellButtonYposition,

    //Type of Aura, Textbox and exclamation mark (NPC problem screen)
    npcProblemScreenAuraType,
    npcProblemScreenTextBoxType,
    npcProblemScreenExclamType,

    //NPC problem speechbububle text
    firstNPCproblemtext,
    firstNPCproblemFont,
    secondNPCproblemtext,
    secondNPCproblemFont,
    thirdNPCproblemtext,
    fourthNPCproblemtext,
    fifthNPCproblemtext,
    sixthNPCproblemtext,
    seventhNPCproblemtext,
    eighthNPCproblemtext,
    ninthNPCproblemtext,
    tenthNPCproblemtext,

    //Time
    timeEndurance,

    //Parameter User
    //userHealthGain:
    userHealthGain,
    //userSpeedGain
    userSpeedGain,
    //userPositivityGain
    userPositivityGain,
    //userShieldGain
    userShieldGain,

    // Parameter Boss
    //Toxic
    bossHealthGainToxic,
    bossObjectDamageGainToxic,
    bossObjectAmountGainToxic,
    bossObjectSpeedGainToxic,
    //Neutral
    bossObjectAmountNeutral,
    //Negative
    bossHealthGainNegative,
    bossObjectDamageGainNegative,
    bossObjectAmountGainNegative,
    bossObjectSpeedGainNegative
  ) {
    super(
      sceneType,

      //Spellbutton x-Postion//
      spellButtonXposition,
      spellButtonYposition,

      //Type of Aura, Textbox and exclamation mark (NPC problem screen)
      npcProblemScreenAuraType,
      npcProblemScreenTextBoxType,
      npcProblemScreenExclamType,

      //NPC problem speechbububle text
      firstNPCproblemtext,
      firstNPCproblemFont,
      secondNPCproblemtext,
      secondNPCproblemFont,
      thirdNPCproblemtext,
      fourthNPCproblemtext,
      fifthNPCproblemtext,
      sixthNPCproblemtext,
      seventhNPCproblemtext,
      eighthNPCproblemtext,
      ninthNPCproblemtext,
      tenthNPCproblemtext,

      //Time
      timeEndurance,
      //Parameter User
      //userHealthGain:
      userHealthGain,
      //userSpeedGain
      userSpeedGain,
      //userPositivityGain
      userPositivityGain,
      //userShieldGain
      userShieldGain,

      // Parameter Boss
      //Toxic
      bossHealthGainToxic,
      bossObjectDamageGainToxic,
      bossObjectAmountGainToxic,
      bossObjectSpeedGainToxic,
      //Neutral
      bossObjectAmountNeutral,
      //Negative
      bossHealthGainNegative,
      bossObjectDamageGainNegative,
      bossObjectAmountGainNegative,
      bossObjectSpeedGainNegative
    );

    this.toxicTextButton = new GIFChooseButton("toxic");
    this.positiveTextButton = new GIFChooseButton("positive");
    this.neutralTextButton = new GIFChooseButton("neutral");
    this.negativeTextButton = new GIFChooseButton("negative");

    this.spellButton = new SpellButtonMentor(
      this.spellButtonXposition,
      this.spellButtonYposition
    );

    this.buttonPositionValuesX = [-357, -100, -357, -100];
    this.buttonPositionValuesY = [-45, -45, 150, 150];

    //Had to add this code again from superior class
    //User parameter
    this.userHealth = 0;
    this.userSpeed = 0;
    this.userPositivity = 0;
    this.userShield = 0;
    //User Gain
    this.userHealthGain = userHealthGain;
    this.userSpeedGain = userSpeedGain;
    this.userPositivityGain = userPositivityGain;
    this.userShieldGain = userShieldGain;
    //Boss parameter
    this.bossHealth = 0;
    this.bossObjectDamage = 0;
    this.bossObjectAmount = 0;
    this.bossObjectSpeed = 0;
    //Boss Gain
    //Toxic
    this.bossHealthGainToxic = bossHealthGainToxic;
    this.bossObjectDamageGainToxic = bossObjectDamageGainToxic;
    this.bossObjectAmountGainToxic = bossObjectAmountGainToxic;
    this.bossObjectSpeedGainToxic = bossObjectSpeedGainToxic;
    //Neutral
    this.bossObjectAmountGainNeutral = bossObjectAmountNeutral;
    //Negative
    this.bossHealthGainNegative = bossHealthGainNegative;
    this.bossObjectDamageGainNegative = bossObjectDamageGainNegative;
    this.bossObjectAmountGainNegative = bossObjectAmountGainNegative;
    this.bossObjectSpeedGainNegative = bossObjectSpeedGainNegative;
  }

  //Functions for the "global" userlook class //call these functions from the main.js file
  returnToxicLook() {
    image(
      this.toxicLook,
      -10,
      -60,
      this.toxicLook.width / 1.4,
      this.toxicLook.height / 1.4
    );
  }

  returnPositiveLook() {
    image(
      this.positiveLook,
      -10,
      -60,
      this.positiveLook.width / 1.4,
      this.positiveLook.height / 1.4
    );
  }

  returnNegativeLook() {
    image(
      this.negativeLook,
      -10,
      -60,
      this.negativeLook.width / 1.4,
      this.negativeLook.height / 1.4
    );
  }

  //-------------------------------------------------------------------------------------------------Panorama screen
  //for mouseClicked
  showPanoramaScreen() {
    this.showPanoramaScreenBool = true;
  }

  panoramaScreen() {
    if (this.showPanoramaScreenBool === true) {
      //Pics
      //pics fade in automatically, because of the tint fade of the .fadeIn() method of the spellbutton
      //But has additional fade in, because otherwise the image would be displayed at first and then fades in (there is a flackering at first)
      //Has to be this order so that the button is drawn over the image
      this.panoramaFadeIn += 5;
      if (this.panoramaFadeIn > 255) {
        this.panoramaFadeIn = 255;
      }
      tint(255, this.panoramaFadeIn);
      image(
        this.panoramaScreenImage,
        30,
        0,
        this.panoramaScreenImage.width / 1,
        this.panoramaScreenImage.height / 1
      );

      //Button is drawn over the image
      //(checks the state of the button every time)
      this.spellButton.fadeIn();
      this.spellButton.displayActiveOrSleeping();
      this.spellButton.displayButtonSentence();
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
        this.npcProblemScreenAura,
        180,
        -20,
        this.npcProblemScreenAura.width / 1.3,
        this.npcProblemScreenAura.height / 1.3
      );

      image(
        this.NPCproblem,
        180,
        20,
        this.NPCproblem.width / 1.2,
        this.NPCproblem.height / 1.2
      );

      this.npcProblemSpeechbubble.fadeIn();
      this.npcProblemSpeechbubble.displaySpeechBubble();
      this.npcProblemSpeechbubble.displaySpeechSentences();
    }
  }

  //for mouseClicked
  weiterButtonChooseAnswerScreenClick() {
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
    ellipse(-463, -150, 8, 8);
    //second dot
    fill(62, 19, 118, 75 + this.typingInDotsFade * 255);
    ellipse(-450, -150, 8, 8);
    //third dot
    fill(62, 19, 118, this.typingInDotsFade * 255);
    ellipse(-437, -150, 8, 8);
  }

  //doesn't need to be clalled in Main, because chooseAnswerScreen includes this Method
  randomChooseAnswer() {
    if (this.randomOrderJustOnce === false) {
      this.counter = this.buttonArray.length;

      // While there are elements in the array
      while (this.counter > 0) {
        // Pick a random index: random number in the range 0 to less than 1; then scale it up to counter (4 Buttons)
        this.index = Math.floor(Math.random() * this.counter);

        // Decrease counter by 1
        this.counter--;

        // And swap the last element with it
        this.temp = this.buttonArray[this.counter];
        this.buttonArray[this.counter] = this.buttonArray[this.index];
        this.buttonArray[this.index] = this.temp;
      }
      //So from the last value (counter = 4) to the first value (counter = 1) of the array the values are replaced with a random value
      this.randomOrderJustOnce = true;
    }
  }

  chooseAnswerScreen() {
    if (this.showChooseAnswerScreenBool === true) {
      this.randomChooseAnswer();

      //sets buttons in random position:
      //this.buttonArray = [1, 2, 3, 4];
      // this.buttonPositionValuesY = [-80, -9, 63, 135];
      for (this.i = 0; this.i < 4; this.i++) {
        switch (true) {
          case this.buttonArray[this.i] === 1:
            this.toxicTextButton.x = this.buttonPositionValuesX[this.i];
            this.toxicTextButton.y = this.buttonPositionValuesY[this.i];
            break;
          case this.buttonArray[this.i] === 2:
            this.positiveTextButton.x = this.buttonPositionValuesX[this.i];
            this.positiveTextButton.y = this.buttonPositionValuesY[this.i];
            break;
          case this.buttonArray[this.i] === 3:
            this.neutralTextButton.x = this.buttonPositionValuesX[this.i];
            this.neutralTextButton.y = this.buttonPositionValuesY[this.i];
            break;
          case this.buttonArray[this.i] === 4:
            this.negativeTextButton.x = this.buttonPositionValuesX[this.i];
            this.negativeTextButton.y = this.buttonPositionValuesY[this.i];
            break;
        }
      }

      //buttons (comes first, thus the fade in works properly)
      this.toxicTextButton.fadeIn();
      this.toxicTextButton.displayActiveOrSleeping();

      this.positiveTextButton.fadeIn();
      this.positiveTextButton.displayActiveOrSleeping();

      this.neutralTextButton.fadeIn();
      this.neutralTextButton.displayActiveOrSleeping();

      this.negativeTextButton.fadeIn();
      this.negativeTextButton.displayActiveOrSleeping();

      //"Typing in"-Dots
      this.typingInDots();

      //Pics
      image(
        this.ground,
        400,
        230,
        this.ground.width / 1.5,
        this.ground.height / 1.5
      );

      image(
        this.npcProblemScreenAura,
        280,
        -20,
        this.npcProblemScreenAura.width / 1.3,
        this.npcProblemScreenAura.height / 1.3
      );

      image(
        this.NPCproblem,
        280,
        20,
        this.NPCproblem.width / 1.2,
        this.NPCproblem.height / 1.2
      );

      //timer
      this.chooseAnswerScreenTimer.start();
      this.chooseAnswerScreenTimer.timeIsUp();

      //when timer ends, you choose automatically "neutral" answer
      if (this.chooseAnswerScreenTimer.timeIsUp()) {
        this.neutralTextButton.state = "choosed";
        this.showAnswerScreen();
      }
    }
  }

  //for mouseClicked
  chooseAnswerScreenClick() {
    if (this.showChooseAnswerScreenBool === true) {
      return (
        this.toxicTextButton.click() ||
        this.positiveTextButton.click() ||
        this.neutralTextButton.click() ||
        this.negativeTextButton.click()
      );
    }
  }

  //for mouseClicked
  showItemScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = false;
    this.showChooseAnswerScreenBool = false;
    this.showItemScreenBool = true;
  }

  //-------------------------------------------------------------------------------------------------Item screen
  itemScreen() {
    if (this.showItemScreenBool === true) {
      //-----Neutral Choice
      if (this.neutralTextButton.state === "choosed") {
        //PARAMETER
        this.bossHealth = 0;
        this.bossObjectDamage = 0;
        this.bossObjectAmount = this.bossObjectAmountGainNeutral;
        this.bossObjectSpeed = 0;

        this.state = "neutral";
        //JUMP DIRECTLY TO NEXT SCENE
      }

      //-----Button
      this.weiterButtonYourLookScreen.fadeIn();
      this.weiterButtonYourLookScreen.displayActiveOrSleeping();
      this.weiterButtonYourLookScreen.displayButtonSentence();

      //-----Show stats
      this.fadeInStatsText += this.fadeInStatsTextVariable;
      if (this.fadeInStatsText > 255) {
        this.fadeInStatsTextVariable -= 5;
      }
      if (this.fadeInStatsText < 0) {
        this.fadeInStatsTextVariable = 0;
      }
      textSize(25);
      //Health
      noStroke();
      if (this.userHealth === 0) {
        fill(220, 220, 220, this.fadeInStatsText);
      } else {
        fill(255, 165, 255, this.fadeInStatsText);
      }
      textFont(duperBold);
      text("+" + this.userHealth, -325, -268);
      //Speed
      noStroke();
      if (this.userSpeed === 0) {
        fill(220, 220, 220, this.fadeInStatsText);
      } else {
        fill(33, 241, 207, this.fadeInStatsText);
      }
      textFont(duperBold);
      text("+" + this.userSpeed, -325, -241);
      //Positivity
      noStroke();
      if (this.userPositivity === 0) {
        fill(220, 220, 220, this.fadeInStatsText);
      } else {
        fill(148, 224, 255, this.fadeInStatsText);
      }
      textFont(duperBold);
      text("+" + this.userPositivity, -325, -216);
      //Shield
      noStroke();
      if (this.userShield === 0) {
        fill(220, 220, 220, this.fadeInStatsText);
      } else {
        fill(130, 94, 196, this.fadeInStatsText);
      }
      textFont(duperBold);
      text("+" + this.userShield, -325, -189);

      //Fade in item text
      this.fadeInItem += 5;
      if (this.fadeInItem > 255) {
        this.fadeInItem = 255;
      }
      textFont(duperBold);
      fill(61, 18, 117, this.fadeInItem);
      textSize(30);
      text("DEIN", -35, -200);
      textSize(70);
      text("ITEM:", -70, -150);
      tint(255, this.fadeInItem);
      image(
        this.getItemGIF,
        0,
        40,
        this.getItemGIF.width / 1.8,
        this.getItemGIF.height / 1.8
      );

      //-----shows items + sets values (User/Boss)
      if (this.toxicTextButton.state === "choosed") {
        this.state = "toxic";

        image(
          this.toxicItem,
          0,
          35,
          this.toxicItem.width,
          this.toxicItem.height
        );

        //PARAMETER
        this.bossHealth = this.bossHealthGainToxic;
        this.bossObjectDamage = this.bossObjectDamageGainToxic;
        this.bossObjectAmount = this.bossObjectAmountGainToxic;
        this.bossObjectSpeed = this.bossObjectSpeedGainToxic;
      }

      if (this.positiveTextButton.state === "choosed") {
        this.state = "positive";
        console.log("POSITIV!");
        image(
          this.positiveItem,
          0,
          35,
          this.positiveItem.width,
          this.positiveItem.height
        );

        //PARAMETER
        this.userHealth = this.userHealthGain;
        this.userSpeed = this.userSpeedGain;
        this.userPositivity = this.userPositivityGain;
        this.userShield = this.userShieldGain;
      }

      if (this.negativeTextButton.state === "choosed") {
        this.state = "negative";

        image(
          this.negativeItem,
          0,
          35,
          this.negativeItem.width,
          this.negativeItem.height
        );
      }
      //PARAMETER
      this.bossHealth = this.bossHealthGainNegative;
      this.bossObjectDamage = this.bossObjectDamageGainNegative;
      this.bossObjectAmount = this.bossObjectAmountGainNegative;
      this.bossObjectSpeed = this.bossObjectSpeedGainNegative;
    }
  }

  weiterButtonYourLookScreenClick() {
    if (this.showItemScreenBool === true) {
      return this.weiterButtonYourLookScreen.click();
    }
  }
}

import ChooseButton from "./chooseButton.js";
import WeiterButton from "./weiterButton.js";
import Timer from "./Timer.js";
import UserAnswerSpeechBubble from "./UserAnswerSpeechBubble.js";
import SpellButtonSelf from "./SpellButtonSelf.js";
import SpeechBubbleSelf from "./SpeechBubbleSelf.js";

//CANT MAKE A F***** EXTENSION BECAUSE OF A DOUBLED PNG ERROR (CLASS EXTENSION DIDN´T OVERWRITE PNG TO GIF)
export default class MainSceneSelf {
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

    //Choose answers:
    //toxic
    chooseToxicAnswer,
    //positive
    choosePositiveAnswer,
    //neutral
    chooseNeutralAnswer,
    //negative
    chooseNegativeAnswer,

    //NPC Reaction
    //toxic
    firstToxicReactiontext,
    firstToxicReactionFont,
    secondToxicReactiontext,
    secondToxicReactionFont,
    thirdToxicReactiontext,
    fourthToxicReactiontext,
    fifthToxicReactiontext,
    sixthToxicReactiontext,
    seventhToxicReactiontext,
    eighthToxicReactiontext,
    ninthToxicReactiontext,
    tenthToxicReactiontext,
    //positive
    firstPositiveReactiontext,
    firstPositiveReactionFont,
    secondPositiveReactiontext,
    secondPositiveReactionFont,
    thirdPositiveReactiontext,
    fourthPositiveReactiontext,
    fifthPositiveReactiontext,
    sixthPositiveReactiontext,
    seventhPositiveReactiontext,
    eighthPositiveReactiontext,
    ninthPositiveReactiontext,
    tenthPositiveReactiontext,
    //neutral
    firstNeutralReactiontext,
    firstNeutralReactionFont,
    secondNeutralReactiontext,
    secondNeutralReactionFont,
    thirdNeutralReactiontext,
    fourthNeutralReactiontext,
    fifthNeutralReactiontext,
    sixthNeutralReactiontext,
    seventhNeutralReactiontext,
    eighthNeutralReactiontext,
    ninthNeutralReactiontext,
    tenthNeutralReactiontext,
    //negative
    firstNegativeReactiontext,
    firstNegativeReactionFont,
    secondNegativeReactiontext,
    secondNegativeReactionFont,
    thirdNegativeReactiontext,
    fourthNegativeReactiontext,
    fifthNegativeReactiontext,
    sixthNegativeReactiontext,
    seventhNegativeReactiontext,
    eighthNegativeReactiontext,
    ninthNegativeReactiontext,
    tenthNegativeReactiontext,

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
    this.sceneType = sceneType;
    //Charakter Mood
    this.positive = loadImage("00_Links/" + sceneType + "/positive.png");
    this.negative = loadImage("00_Links/" + sceneType + "/negative.png");
    this.neutral = loadImage("00_Links/" + sceneType + "/neutral.png");
    this.toxic = loadImage("00_Links/" + sceneType + "/toxic.png");

    //Auras

    this.aura_positive = loadImage("00_Links/00_UI-Elements/aura_positive.png");
    this.aura_negative = loadImage("00_Links/00_UI-Elements/Aura_negative.png");
    this.aura_neutral = loadImage("00_Links/00_UI-Elements/Aura_neutral.png");
    this.aura_sad = loadImage("00_Links/00_UI-Elements/Aura_sad.png");
    this.aura_shocked = loadImage("00_Links/00_UI-Elements/Aura_shock.png");
    this.aura_toxic = loadImage("00_Links/00_UI-Elements/Aura_toxic.png");

    //Ground
    this.ground = loadImage("00_Links/00_UI-Elements/ground.png");

    //Items for the "global" userlook class //functions below (returnToxicLook)
    this.toxicLook = loadImage("00_Links/" + sceneType + "/toxic_Look.png");
    this.positiveLook = loadImage(
      "00_Links/" + sceneType + "/positive_Look.png"
    );
    this.negativeLook = loadImage(
      "00_Links/" + sceneType + "/negative_Look.png"
    );
    //Answer-Speechbubbles

    //-----------------------------------------------------Panorama Screen
    this.panoramaScreenImage = loadImage(
      "00_Links/" + sceneType + "/panoramaScreen.png"
    );
    this.panoramaFadeIn = 0;
    this.spellButtonXposition = spellButtonXposition;
    this.spellButtonYposition = spellButtonYposition;

    //Panorama screen changes:
    this.spellButton = new SpellButtonSelf(
      this.spellButtonXposition,
      this.spellButtonYposition
    );

    this.showPanoramaScreenBool = false;

    //-----------------------------------------------------NPCproblem Screen

    this.npcProblemScreenAuraType = npcProblemScreenAuraType;
    this.npcProblemScreenAura = loadImage(
      "00_Links/00_UI-Elements/" + this.npcProblemScreenAuraType + ".png"
    );

    this.NPCproblem = loadImage("00_Links/" + sceneType + "/NPCproblem.png");

    this.showNPCProblemScreenBool = false;
    this.weiterButtonAnswerScreen = new WeiterButton(-210, 205);

    this.npcProblemScreenTextBoxType = npcProblemScreenTextBoxType;
    this.npcProblemScreenExclamType = npcProblemScreenExclamType;
    this.firstNPCproblemtext = firstNPCproblemtext;
    this.firstNPCproblemFont = firstNPCproblemFont;
    this.secondNPCproblemtext = secondNPCproblemtext;
    this.secondNPCproblemFont = secondNPCproblemFont;
    this.thirdNPCproblemtext = thirdNPCproblemtext;
    this.fourthNPCproblemtext = fourthNPCproblemtext;
    this.fifthNPCproblemtext = fifthNPCproblemtext;
    this.sixthNPCproblemtext = sixthNPCproblemtext;
    this.seventhNPCproblemtext = seventhNPCproblemtext;
    this.eighthNPCproblemtext = eighthNPCproblemtext;
    this.ninthNPCproblemtext = ninthNPCproblemtext;
    this.tenthNPCproblemtext = tenthNPCproblemtext;

    //-----------NPC-Problem changes (=> Own problem)
    this.npcProblemSpeechbubble = new SpeechBubbleSelf(
      this.npcProblemScreenTextBoxType,
      this.npcProblemScreenExclamType,
      this.firstNPCproblemtext,
      this.firstNPCproblemFont,
      this.secondNPCproblemtext,
      this.secondNPCproblemFont,
      this.thirdNPCproblemtext,
      this.fourthNPCproblemtext,
      this.fifthNPCproblemtext,
      this.sixthNPCproblemtext,
      this.seventhNPCproblemtext,
      this.eighthNPCproblemtext,
      this.ninthNPCproblemtext,
      this.tenthNPCproblemtext
    );

    this.typingInDotsFade = 0;
    this.typingInDotsFadeVariable = 0;

    //-----------------------------------------------------chooseAnswerScreen
    this.showChooseAnswerScreenBool = false;

    this.chooseToxicAnswer = chooseToxicAnswer;
    this.choosePositiveAnswer = choosePositiveAnswer;
    this.chooseNeutralAnswer = chooseNeutralAnswer;
    this.chooseNegativeAnswer = chooseNegativeAnswer;
    this.toxicTextButton = new ChooseButton(
      -300,
      -80,
      this.chooseToxicAnswer,
      0.7
    );
    this.positiveTextButton = new ChooseButton(
      -300,
      -9,
      this.choosePositiveAnswer,
      0.7
    );
    this.neutralTextButton = new ChooseButton(
      -300,
      63,
      this.chooseNeutralAnswer,
      0.7
    );
    this.negativeTextButton = new ChooseButton(
      -300,
      135,
      this.chooseNegativeAnswer,
      0.7
    );

    //for random order
    this.buttonArray = [1, 2, 3, 4];
    this.randomOrderJustOnce = false;
    this.counter = 0;
    this.temp = 0;

    // Toxic => FIRST Button (-80)
    // Positive => SECOND (-9)
    // Neutral => THIRD (63),
    // Negative => FOURTH (135)
    this.buttonPositionValues = [-80, -9, 63, 135];

    this.timeEndurance = timeEndurance;
    this.chooseAnswerScreenTimer = new Timer(480, -250, this.timeEndurance);

    //===>Jumps directly to reaction screen (no own formulated Answer)
    //-----------------------------------------------------ReactionScreen
    this.firstToxicReactiontext = firstToxicReactiontext;
    this.firstToxicReactionFont = firstToxicReactionFont;
    this.secondToxicReactiontext = secondToxicReactiontext;
    this.secondToxicReactionFont = secondToxicReactionFont;
    this.thirdToxicReactiontext = thirdToxicReactiontext;
    this.fourthToxicReactiontext = fourthToxicReactiontext;
    this.fifthToxicReactiontext = fifthToxicReactiontext;
    this.sixthToxicReactiontext = sixthToxicReactiontext;
    this.seventhToxicReactiontext = seventhToxicReactiontext;
    this.eighthToxicReactiontext = eighthToxicReactiontext;
    this.ninthToxicReactiontext = ninthToxicReactiontext;
    this.tenthToxicReactiontext = tenthToxicReactiontext;
    this.toxicReaction = new SpeechBubbleSelf(
      "thoughtBubbleToxic",
      "exclamToxic",
      this.firstToxicReactiontext,
      this.firstToxicReactionFont,
      this.secondToxicReactiontext,
      this.secondToxicReactionFont,
      this.thirdToxicReactiontext,
      this.fourthToxicReactiontext,
      this.fifthToxicReactiontext,
      this.sixthToxicReactiontext,
      this.seventhToxicReactiontext,
      this.eighthToxicReactiontext,
      this.ninthToxicReactiontext,
      this.tenthToxicReactiontext
    );

    this.firstPositiveReactiontext = firstPositiveReactiontext;
    this.firstPositiveReactionFont = firstPositiveReactionFont;
    this.secondPositiveReactiontext = secondPositiveReactiontext;
    this.secondPositiveReactionFont = secondPositiveReactionFont;
    this.thirdPositiveReactiontext = thirdPositiveReactiontext;
    this.fourthPositiveReactiontext = fourthPositiveReactiontext;
    this.fifthPositiveReactiontext = fifthPositiveReactiontext;
    this.sixthPositiveReactiontext = sixthPositiveReactiontext;
    this.seventhPositiveReactiontext = seventhPositiveReactiontext;
    this.eighthPositiveReactiontext = eighthPositiveReactiontext;
    this.ninthPositiveReactiontext = ninthPositiveReactiontext;
    this.tenthPositiveReactiontext = tenthPositiveReactiontext;
    this.positiveReaction = new SpeechBubbleSelf(
      "thoughtBubblePositive",
      "exclamPositive",
      this.firstPositiveReactiontext,
      this.firstPositiveReactionFont,
      this.secondPositiveReactiontext,
      this.secondPositiveReactionFont,
      this.thirdPositiveReactiontext,
      this.fourthPositiveReactiontext,
      this.fifthPositiveReactiontext,
      this.sixthPositiveReactiontext,
      this.seventhPositiveReactiontext,
      this.eighthPositiveReactiontext,
      this.ninthPositiveReactiontext,
      this.tenthPositiveReactiontext
    );

    this.firstNeutralReactiontext = firstNeutralReactiontext;
    this.firstNeutralReactionFont = firstNeutralReactionFont;
    this.secondNeutralReactiontext = secondNeutralReactiontext;
    this.secondNeutralReactionFont = secondNeutralReactionFont;
    this.thirdNeutralReactiontext = thirdNeutralReactiontext;
    this.fourthNeutralReactiontext = fourthNeutralReactiontext;
    this.fifthNeutralReactiontext = fifthNeutralReactiontext;
    this.sixthNeutralReactiontext = sixthNeutralReactiontext;
    this.seventhNeutralReactiontext = seventhNeutralReactiontext;
    this.eighthNeutralReactiontext = eighthNeutralReactiontext;
    this.ninthNeutralReactiontext = ninthNeutralReactiontext;
    this.tenthNeutralReactiontext = tenthNeutralReactiontext;
    this.neutralReaction = new SpeechBubbleSelf(
      "thoughtBubbleNeutral",
      "exclamNeutral",
      this.firstNeutralReactiontext,
      this.firstNeutralReactionFont,
      this.secondNeutralReactiontext,
      this.secondPositiveReactionFont,
      this.thirdNeutralReactiontext,
      this.fourthNeutralReactiontext,
      this.fifthNeutralReactiontext,
      this.sixthNeutralReactiontext,
      this.seventhNeutralReactiontext,
      this.eighthNeutralReactiontext,
      this.ninthNeutralReactiontext,
      this.tenthNeutralReactiontext
    );
    this.firstNegativeReactiontext = firstNegativeReactiontext;
    this.firstNegativeReactionFont = firstNegativeReactionFont;
    this.secondNegativeReactiontext = secondNegativeReactiontext;
    this.secondNegativeReactionFont = secondNegativeReactionFont;
    this.thirdNegativeReactiontext = thirdNegativeReactiontext;
    this.fourthNegativeReactiontext = fourthNegativeReactiontext;
    this.fifthNegativeReactiontext = fifthNegativeReactiontext;
    this.sixthNegativeReactiontext = sixthNegativeReactiontext;
    this.seventhNegativeReactiontext = seventhNegativeReactiontext;
    this.eighthNegativeReactiontext = eighthNegativeReactiontext;
    this.ninthNegativeReactiontext = ninthNegativeReactiontext;
    this.tenthNegativeReactiontext = tenthNegativeReactiontext;
    this.negativeReaction = new SpeechBubbleSelf(
      "thoughtBubbleMad",
      "exclamMad",
      this.firstNegativeReactiontext,
      this.firstNegativeReactionFont,
      this.secondNegativeReactiontext,
      this.secondNegativeReactionFont,
      this.thirdNegativeReactiontext,
      this.fourthNegativeReactiontext,
      this.fifthNegativeReactiontext,
      this.sixthNegativeReactiontext,
      this.seventhNegativeReactiontext,
      this.eighthNegativeReactiontext,
      this.ninthNegativeReactiontext,
      this.tenthNegativeReactiontext
    );
    this.fadeInAuraSlow = 0;
    this.weiterButtonItemScreen = new WeiterButton(-210, 205);
    this.fadeInPic = 0;
    this.fadeInAuraTranceparency = 0;

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

    //-----------------------------------------------------ItemScreen

    this.showItemScreenBool = false;

    this.fadeInStatsText = 0;
    this.fadeInStatsTextVariable = 3;

    this.positiveItem = loadImage(
      "00_Links/" + sceneType + "/positive_Item.png"
    );
    this.toxicItem = loadImage("00_Links/" + sceneType + "/toxic_Item.png");

    this.negativeItem = loadImage(
      "00_Links/" + sceneType + "/negative_Item.png"
    );
    this.getItemGIF = loadImage("00_Links/00_UI-Elements/getItem.gif");
    this.fadeInItem = 0;

    this.weiterButtonYourLookScreen = new WeiterButton(0, 240);

    this.state = "none";
  }
  //-------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------

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
        0,
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

  //NPC Problem Screen changes (=> Own problem)
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
        10,
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
    ellipse(-463, -130, 8, 8);
    //second dot
    fill(62, 19, 118, 75 + this.typingInDotsFade * 255);
    ellipse(-450, -130, 8, 8);
    //third dot
    fill(62, 19, 118, this.typingInDotsFade * 255);
    ellipse(-437, -130, 8, 8);
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
      console.log(this.buttonArray);
      //So from the last value (counter = 4) to the first value (counter = 1) of the array the values are replaced with a random value
      this.randomOrderJustOnce = true;
    }
  }

  chooseAnswerScreen() {
    if (this.showChooseAnswerScreenBool === true) {
      this.randomChooseAnswer();

      //push() & pop(), so that the NPC and the aura isn`t affected from the fade in again (same pic, but fades in two times)
      push();

      //sets buttons in random position:
      //this.buttonArray = [1, 2, 3, 4];
      // this.buttonPositionValues = [-80, -9, 63, 135];
      for (this.i = 0; this.i < 4; this.i++) {
        switch (true) {
          case this.buttonArray[this.i] === 1:
            this.toxicTextButton.y = this.buttonPositionValues[this.i];
            break;
          case this.buttonArray[this.i] === 2:
            this.positiveTextButton.y = this.buttonPositionValues[this.i];
            break;
          case this.buttonArray[this.i] === 3:
            this.neutralTextButton.y = this.buttonPositionValues[this.i];
            break;
          case this.buttonArray[this.i] === 4:
            this.negativeTextButton.y = this.buttonPositionValues[this.i];
            break;
        }
      }

      //buttons (comes first, thus the fade in works properly)
      this.toxicTextButton.fadeIn();
      this.toxicTextButton.displayActiveOrSleeping();
      this.toxicTextButton.displayButtonSentence();

      this.positiveTextButton.fadeIn();
      this.positiveTextButton.displayActiveOrSleeping();
      this.positiveTextButton.displayButtonSentence();

      this.neutralTextButton.fadeIn();
      this.neutralTextButton.displayActiveOrSleeping();
      this.neutralTextButton.displayButtonSentence();

      this.negativeTextButton.fadeIn();
      this.negativeTextButton.displayActiveOrSleeping();
      this.negativeTextButton.displayButtonSentence();

      //"Typing in"-Dots
      this.typingInDots();
      pop();

      //Pics
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
        10,
        this.NPCproblem.width / 1.2,
        this.NPCproblem.height / 1.2
      );

      //timer
      this.chooseAnswerScreenTimer.start();
      this.chooseAnswerScreenTimer.timeIsUp();

      //when timer ends, you choose automatically "neutral" answer
      if (this.chooseAnswerScreenTimer.timeIsUp()) {
        this.neutralTextButton.state = "choosed";
        //IMPORTANT: It Jumps directly to reaction screen, because the thought mainscene has to AnswerScreen
        this.showReactionScreen();
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

  //Not needed for thoughts main scene, but fade in is needed
  //-------------------------------------------------------------------------------------------------Answer screen

  //for mouseClicked
  showAnswerScreen() {}

  //For fading in the aura pic slowly
  fadeInAuraSlowly() {
    this.fadeInAuraSlow += 5;
    if (this.fadeInAuraSlow > 255) {
      this.fadeInAuraSlow = 255;
    }
  }

  //For fading in the answer pic
  fadeInAnswerPic() {
    this.fadeInPic += 10;
    if (this.fadeInPic > 255) {
      this.fadeInPic = 255;
    }
  }
  //For fading in the answer aura (tranceparency)
  fadeInAnswerAuraTranceparency() {
    this.fadeInAuraTranceparency += 2;
    if (this.fadeInAuraTranceparency > 100) {
      this.fadeInAuraTranceparency = 100;
    }
  }

  answerScreen() {}

  //for mouseClicked
  weiterButtonReactionScreenClick() {}

  //-------------------------------------------------------------------------------------------------Reaction screen
  //for mouseClicked
  showReactionScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = false;
    this.showChooseAnswerScreenBool = false;
    this.showReactionScreenBool = true;
  }

  reactionScreen() {
    if (this.showReactionScreenBool === true) {
      //Button has to be on first place, otherwise the fade in doesn`t work properly
      this.weiterButtonItemScreen.fadeIn();
      this.weiterButtonItemScreen.displayActiveOrSleeping();
      this.weiterButtonItemScreen.displayButtonSentence();

      if (this.toxicTextButton.state === "choosed") {
        //PARAMETER
        this.bossHealth = this.bossHealthGainToxic;
        this.bossObjectDamage = this.bossObjectDamageGainToxic;
        this.bossObjectAmount = this.bossObjectAmountGainToxic;
        this.bossObjectSpeed = this.bossObjectSpeedGainToxic;

        //because the pic is loaded afterwards, fade in doesn`t work
        this.fadeInAuraSlowly();
        tint(255, this.fadeInAuraSlow);

        //Pics
        image(
          this.aura_toxic,
          180,
          -20,
          this.aura_toxic.width / 1.1,
          this.aura_toxic.height / 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(this.toxic, 175, 10, this.toxic.width, this.toxic.height);

        this.toxicReaction.fadeIn();
        this.toxicReaction.displaySpeechBubble();
        this.toxicReaction.displaySpeechSentences();
      }
      if (this.positiveTextButton.state === "choosed") {
        //PARAMETER
        this.userHealth = this.userHealthGain;
        this.userSpeed = this.userSpeedGain;
        this.userPositivity = this.userPositivityGain;
        this.userShield = this.userShieldGain;

        //because the pic is loaded afterwards, fade in doesn`t work
        this.fadeInAuraSlowly();
        tint(255, this.fadeInAuraSlow);

        //Pics
        image(
          this.aura_positive,
          180,
          -20,
          this.aura_positive.width / 1.1,
          this.aura_positive.height / 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.positive,
          175,
          10,
          this.positive.width,
          this.positive.height
        );

        this.positiveReaction.fadeIn();
        this.positiveReaction.displaySpeechBubble();
        this.positiveReaction.displaySpeechSentences();
      }
      if (this.neutralTextButton.state === "choosed") {
        //PARAMETER
        this.bossHealth = 0;
        this.bossObjectDamage = 0;
        this.bossObjectAmount = this.bossObjectAmountGainNeutral;
        this.bossObjectSpeed = 0;

        //because the pic is loaded afterwards, fade in doesn`t work
        this.fadeInAuraSlowly();
        tint(255, this.fadeInAuraSlow);

        //Pics
        image(
          this.aura_neutral,
          180,
          -20,
          this.aura_neutral.width / 1.1,
          this.aura_neutral.height / 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(this.neutral, 175, 10, this.neutral.width, this.neutral.height);

        this.neutralReaction.fadeIn();
        this.neutralReaction.displaySpeechBubble();
        this.neutralReaction.displaySpeechSentences();
      }
      if (this.negativeTextButton.state === "choosed") {
        //PARAMETER
        this.bossHealth = this.bossHealthGainNegative;
        this.bossObjectDamage = this.bossObjectDamageGainNegative;
        this.bossObjectAmount = this.bossObjectAmountGainNegative;
        this.bossObjectSpeed = this.bossObjectSpeedGainNegative;

        //because the pic is loaded afterwards, fade in doesn`t work
        this.fadeInAuraSlowly();
        tint(255, this.fadeInAuraSlow);

        //Pics
        image(
          this.aura_negative,
          180,
          -20,
          this.aura_negative.width / 1.1,
          this.aura_negative.height / 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.negative,
          175,
          10,
          this.negative.width,
          this.negative.height
        );

        this.negativeReaction.fadeIn();
        this.negativeReaction.displaySpeechBubble();
        this.negativeReaction.displaySpeechSentences();
      }

      this.fadeInStatsText += this.fadeInStatsTextVariable;
      if (this.fadeInStatsText > 255) {
        this.fadeInStatsTextVariable -= 3;
      }
      if (this.fadeInStatsText < 0) {
        this.fadeInStatsTextVariable = 0;
      }
      //Show stats
      //Health
      noStroke();
      if (this.userHealth === 0) {
        fill(220, 220, 220, this.fadeInStatsText);
      } else {
        fill(255, 165, 255, this.fadeInStatsText);
      }
      textFont("Duper-Bold");
      text("+" + this.userHealth, -325, -268);

      //Speed
      noStroke();
      if (this.userSpeed === 0) {
        fill(220, 220, 220, this.fadeInStatsText);
      } else {
        fill(33, 241, 207, this.fadeInStatsText);
      }
      textFont("Duper-Bold");
      text("+" + this.userSpeed, -325, -241);

      //Positivity
      noStroke();
      if (this.userPositivity === 0) {
        fill(220, 220, 220, this.fadeInStatsText);
      } else {
        fill(148, 224, 255, this.fadeInStatsText);
      }
      textFont("Duper-Bold");
      text("+" + this.userPositivity, -325, -216);

      //Shield
      noStroke();
      if (this.userShield === 0) {
        fill(220, 220, 220, this.fadeInStatsText);
      } else {
        fill(130, 94, 196, this.fadeInStatsText);
      }
      textFont("Duper-Bold");
      text("+" + this.userShield, -325, -189);
    }
  }

  //for mouseClicked
  weiterButtonItemScreenClick() {
    if (this.showReactionScreenBool === true) {
      return this.weiterButtonItemScreen.click();
    }
  }

  //for mouseClicked
  showItemScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = false;
    this.showChooseAnswerScreenBool = false;
    this.showReactionScreenBool = false;
    this.showItemScreenBool = true;
  }

  //-------------------------------------------------------------------------------------------------Item screen
  itemScreen() {
    if (this.showItemScreenBool === true) {
      if (this.neutralTextButton.state === "choosed") {
        this.state = "neutral";
        //JUMP DIRECTLY TO NEXT SCENE
      }
      this.weiterButtonYourLookScreen.fadeIn();
      this.weiterButtonYourLookScreen.displayActiveOrSleeping();
      this.weiterButtonYourLookScreen.displayButtonSentence();

      this.fadeInItem += 5;
      if (this.fadeInItem > 255) {
        this.fadeInItem = 255;
      }

      textFont("Duper-Bold");
      fill(61, 18, 117, this.fadeInItem);
      textSize(30);
      text("YOUR", -35, -200);
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

      if (this.toxicTextButton.state === "choosed") {
        this.state = "toxic";
        image(
          this.toxicItem,
          0,
          35,
          this.toxicItem.width,
          this.toxicItem.height
        );
      }

      if (this.positiveTextButton.state === "choosed") {
        this.state = "positive";
        image(
          this.positiveItem,
          0,
          35,
          this.positiveItem.width,
          this.positiveItem.height
        );
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
    }
  }

  weiterButtonYourLookScreenClick() {
    if (this.showItemScreenBool === true) {
      return this.weiterButtonYourLookScreen.click();
    }
  }
}

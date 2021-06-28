import SpellButton from "./SpellButton.js";
import ChooseButton from "./chooseButton.js";
import WeiterButton from "./weiterButton.js";
import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences.js";
import SpeechBubble from "./SpeechBubble.js";
import Timer from "./Timer.js";
import UserAnswerSpeechBubble from "./UserAnswerSpeechBubble.js";

export default class MainScene {
  constructor() {
    //Charakter Mood
    this.positive = loadImage("00_Links/02_chefMainScene/positive.png");
    this.negative = loadImage("00_Links/02_chefMainScene/negative.png");
    this.neutral = loadImage("00_Links/02_chefMainScene/neutral.png");
    this.toxic = loadImage("00_Links/02_chefMainScene/toxic.png");

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
    this.toxicLook = loadImage("00_Links/02_chefMainScene/toxic_Look.png");
    this.positiveLook = loadImage(
      "00_Links/02_chefMainScene/positive_Look.png"
    );
    this.negativeLook = loadImage(
      "00_Links/02_chefMainScene/negative_Look.png"
    );
    //Answer-Speechbubbles

    //-----------------------------------------------------Panorama Screen
    this.panoramaScreenImage = loadImage(
      "00_Links/02_chefMainScene/panoramaScreen.png"
    );
    this.spellButton = new SpellButton(-10, 200);
    this.showPanoramaScreenBool = false;

    //-----------------------------------------------------NPCproblem Screen
    this.NPCproblem = loadImage("00_Links/02_chefMainScene/NPCproblem.png");

    this.showNPCProblemScreenBool = false;
    this.weiterButtonAnswerScreen = new WeiterButton(-210, 205);
    this.npcProblemSpeechbubble = new SpeechBubble(
      "textBoxSad",
      "exclamSad",
      "Ich dachte, dass Geld immer",
      "Duper-Bold",
      "alles wett macht...",
      "Duper-Bold",
      "Aber was soll ich damit, wenn",
      "sich meine Frau immer mehr",
      "von mir distanziert?",
      "Moment, warum erzähle ich",
      "Ihnen das überhaupt?",
      "",
      "",
      ""
    );

    this.typingInDotsFade = 0;
    this.typingInDotsFadeVariable = 0;

    //-----------------------------------------------------chooseAnswerScreen
    this.showChooseAnswerScreenBool = false;

    this.toxicTextButton = new ChooseButton(
      -300,
      -80,
      "VERSUCHEN SIE, POSITIV ZU BLEIBEN.",
      0.7
    );
    this.positiveTextButton = new ChooseButton(
      -300,
      -9,
      "VERSUCHEN SIE, PRIORITÄTEN ZU SETZEN.",
      0.7
    );
    this.neutralTextButton = new ChooseButton(
      -300,
      63,
      "UIUIUI MEINE BLASE...",
      0.7
    );
    this.negativeTextButton = new ChooseButton(
      -300,
      135,
      "DAS GEHT MICH EIGENTLICH NICHTS AN...",
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

    this.chooseAnswerScreenTimer = new Timer(480, -250, 0.5);

    //-----------------------------------------------------AnswerScreen
    this.showAnswerScreenBool = false;

    this.toxicAnswer = new UserAnswerSpeechBubble(
      // Have to use the first two attributes everytime, otherwise the browser can`t load pics from an origin class through an inherited class
      "textBoxUser",
      "exclamUser",
      "Alles passiert aus einem Grund...",
      "Duper-Bold",
      "vielleicht sollten Sie einfach",
      "Duper",
      "lernen, das Beste auch in so",
      "einer Situation zu sehen.",
      "",
      "",
      "",
      "",
      "",
      ""
    );

    this.positiveAnswer = new UserAnswerSpeechBubble(
      "textBoxUser",
      "exclamUser",
      "Ist Ihnen denn die Arbeit und",
      "Duper-Bold",
      "das Geld wichtiger, als Ihre Frau?",
      "Duper-Bold",
      "Arbeiten Sie daran, ein ",
      "besserer Partner für sie",
      "zu werden. Das wird einiges",
      "Verändern, sie schaffen das!",
      "",
      "",
      "",
      ""
    );

    this.neutralAnswer = new UserAnswerSpeechBubble(
      "textBoxUser",
      "exclamUser",
      "Ich war bis jetzt noch",
      "Duper-Bold",
      "nicht auf dem Klo. ",
      "Duper-Bold",
      "Entschuldigen Sie, es ist ",
      "schon fast zu spät!",
      "",
      "",
      "",
      "",
      "",
      ""
    );

    this.negativeAnswer = new UserAnswerSpeechBubble(
      "textBoxUser",
      "exclamUser",
      "Sie haben sich doch",
      "Duper-Bold",
      "den Job ausgesucht,",
      "Duper-Bold",
      "kommen sie damit klar.",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );

    this.fadeInPic = 0;
    this.fadeInAuraTranceparency = 0;

    this.weiterButtonReactionScreen = new WeiterButton(-210, 205);

    //-----------------------------------------------------ReactionScreen
    this.showReactionScreenBool = false;

    this.toxicReaction = new SpeechBubble(
      "textBoxToxic",
      "exclamToxic",
      "Sehen Sie! Das habe ich mir auch",
      "Duper-Bold",
      "schon gesagt.",
      "Duper-Bold",
      "Soll sich meine Frau mal nicht",
      "so anstellen. Und wer kann",
      "sich schon eine Rolli gönnen?",
      "",
      "",
      "",
      "",
      ""
    );

    this.positiveReaction = new SpeechBubble(
      "textBoxPositive",
      "exclamPositive",
      "Das ist aber ehrlich von Ihnen... ",
      "Duper-Bold",
      "Zum Glück sind mir meine Sorgen ",
      "Duper",
      "einfach so rausgerutscht!",
      "Mehr Zeit für meine Familie, ",
      "das ist gut! Sagen Sie – wollen Sie",
      "nicht vielleicht meine Stelle",
      "übernehmen?",
      "",
      "",
      ""
    );

    this.neutralReaction = new SpeechBubble(
      "textBoxNeutral",
      "exclamNeutral",
      "Äähh... ",
      "Duper-Bold",
      "was... ",
      "Duper-Bold",
      "ist das hier?!",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );

    this.negativeReaction = new SpeechBubble(
      "textBoxMad",
      "exclamMad",
      "Machen Sie sich an die Arbeit!",
      "Duper-Bold",
      "Vergessen Sie ganz schnell was",
      "Duper",
      "ich Ihnen gerade erzählt habe!",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
    this.fadeInAuraSlow = 0;
    this.weiterButtonItemScreen = new WeiterButton(-210, 205);

    //-----------------------------------------------------ItemScreen

    this.showItemScreenBool = false;

    //User parameter
    this.userHealth = 0;
    this.userSpeed = 0;
    this.userPositivity = 0;
    this.userShield = 0;

    //Boss parameter
    this.bossHealth = 0;
    this.bossObjectDamage = 0;
    this.bossObjectAmount = 0;
    this.bossObjectSpeed = 0;

    this.fadeInStatsText = 0;
    this.fadeInStatsTextVariable = 5;

    this.positiveItem = loadImage(
      "00_Links/02_chefMainScene/positive_Item.png"
    );
    this.toxicItem = loadImage("00_Links/02_chefMainScene/toxic_Item.png");

    this.negativeItem = loadImage(
      "00_Links/02_chefMainScene/negative_Item.png"
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
      //checks the state of the button every time
      this.spellButton.fadeIn();
      this.spellButton.displayActiveOrSleeping();
      this.spellButton.displayButtonSentence();

      //Pics
      //fade in, too because of the tint fade of the .fadeIn() method
      image(
        this.panoramaScreenImage,
        -20,
        -20,
        this.panoramaScreenImage.width / 1.1,
        this.panoramaScreenImage.height / 1.1
      );
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
        this.aura_sad,
        180,
        -20,
        this.aura_sad.width / 1.3,
        this.aura_sad.height / 1.3
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
  weiterButtonAnswerScreenClick() {
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

      //buttons (comes first, that the fade in works properly)
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
        this.aura_sad,
        180,
        -20,
        this.aura_sad.width / 1.3,
        this.aura_sad.height / 1.3
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

  //-------------------------------------------------------------------------------------------------Answer screen

  //for mouseClicked
  showAnswerScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = false;
    this.showChooseAnswerScreenBool = false;
    this.showAnswerScreenBool = true;
  }

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

  answerScreen() {
    if (this.showAnswerScreenBool === true) {
      if (this.toxicTextButton.state === "choosed") {
        this.toxicAnswer.fadeIn();
        this.toxicAnswer.displaySpeechBubble();
        this.toxicAnswer.displaySpeechSentences();
      } else if (this.positiveTextButton.state === "choosed") {
        this.positiveAnswer.fadeIn();
        this.positiveAnswer.displaySpeechBubble();
        this.positiveAnswer.displaySpeechSentences();
      } else if (this.neutralTextButton.state === "choosed") {
        this.neutralAnswer.fadeIn();
        this.neutralAnswer.displaySpeechBubble();
        this.neutralAnswer.displaySpeechSentences();
      } else if (this.negativeTextButton.state === "choosed") {
        this.negativeAnswer.fadeIn();
        this.negativeAnswer.displaySpeechBubble();
        this.negativeAnswer.displaySpeechSentences();
      }

      this.weiterButtonReactionScreen.fadeIn();
      this.weiterButtonReactionScreen.displayActiveOrSleeping();
      this.weiterButtonReactionScreen.displayButtonSentence();

      //Pics
      this.fadeInAnswerAuraTranceparency();
      tint(255, this.fadeInAuraTranceparency);
      image(
        this.aura_sad,
        180,
        -20,
        this.aura_sad.width / 1.3,
        this.aura_sad.height / 1.3
      );

      this.fadeInAnswerPic();
      tint(255, this.fadeInPic);
      image(
        this.NPCproblem,
        180,
        100,
        this.NPCproblem.width * 1.2,
        this.NPCproblem.height * 1.2
      );
    }
  }

  //for mouseClicked
  weiterButtonReactionScreenClick() {
    if (this.showAnswerScreenBool === true) {
      return this.weiterButtonReactionScreen.click();
    }
  }

  //-------------------------------------------------------------------------------------------------Reaction screen
  //for mouseClicked
  showReactionScreen() {
    this.showPanoramaScreenBool = false;
    this.showNPCProblemScreenBool = false;
    this.showChooseAnswerScreenBool = false;
    this.showAnswerScreenBool = false;
    this.showReactionScreenBool = true;
  }

  reactionScreen() {
    if (this.showReactionScreenBool === true) {
      //Button has to be on first place, otherwise the fade in doesn`t work properly
      this.weiterButtonItemScreen.fadeIn();
      this.weiterButtonItemScreen.displayActiveOrSleeping();
      this.weiterButtonItemScreen.displayButtonSentence();

      if (this.toxicTextButton.state === "choosed") {
        this.toxicReaction.fadeIn();
        this.toxicReaction.displaySpeechBubble();
        this.toxicReaction.displaySpeechSentences();

        //PARAMETER
        this.bossHealth = 0;
        this.bossObjectDamage = 10;
        this.bossObjectAmount = 10;
        this.bossObjectSpeed = 10;

        //because the pic is loaded afterwards, fade in doesn`t work
        this.fadeInAuraSlowly();
        tint(255, this.fadeInAuraSlow);

        //Pics
        image(
          this.aura_toxic,
          185,
          -140,
          this.aura_toxic.width * 1.1,
          this.aura_toxic.height * 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.toxic,
          165,
          270,
          this.toxic.width * 2,
          this.toxic.height * 2
        );
      }
      if (this.positiveTextButton.state === "choosed") {
        this.positiveReaction.fadeIn();
        this.positiveReaction.displaySpeechBubble();
        this.positiveReaction.displaySpeechSentences();

        //PARAMETER
        this.userHealth = 10;
        this.userSpeed = 0;
        this.userPositivity = 10;
        this.userShield = 20;

        //because the pic is loaded afterwards, fade in doesn`t work
        this.fadeInAuraSlowly();
        tint(255, this.fadeInAuraSlow);

        //Pics
        image(
          this.aura_positive,
          185,
          -140,
          this.aura_positive.width * 1.1,
          this.aura_positive.height * 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.positive,
          165,
          270,
          this.positive.width * 2,
          this.positive.height * 2
        );
      }
      if (this.neutralTextButton.state === "choosed") {
        this.neutralReaction.fadeIn();
        this.neutralReaction.displaySpeechBubble();
        this.neutralReaction.displaySpeechSentences();

        //PARAMETER
        this.bossHealth = 0;
        this.bossObjectDamage = 0;
        this.bossObjectAmount = 2;
        this.bossObjectSpeed = 0;

        //because the pic is loaded afterwards, fade in doesn`t work
        this.fadeInAuraSlowly();
        tint(255, this.fadeInAuraSlow);

        //Pics
        image(
          this.aura_neutral,
          185,
          -140,
          this.aura_neutral.width * 1.1,
          this.aura_neutral.height * 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.neutral,
          165,
          270,
          this.neutral.width * 2,
          this.neutral.height * 2
        );
      }
      if (this.negativeTextButton.state === "choosed") {
        this.negativeReaction.fadeIn();
        this.negativeReaction.displaySpeechBubble();
        this.negativeReaction.displaySpeechSentences();

        //PARAMETER
        this.bossHealth = 2;
        this.bossObjectDamage = 0;
        this.bossObjectAmount = 0;
        this.bossObjectSpeed = 1;

        //because the pic is loaded afterwards, fade in doesn`t work
        this.fadeInAuraSlowly();
        tint(255, this.fadeInAuraSlow);

        //Pics
        image(
          this.aura_negative,
          185,
          -140,
          this.aura_negative.width * 1.1,
          this.aura_negative.height * 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.negative,
          165,
          270,
          this.negative.width * 2,
          this.negative.height * 2
        );
      }

      this.fadeInStatsText += this.fadeInStatsTextVariable;
      if (this.fadeInStatsText > 255) {
        this.fadeInStatsTextVariable -= 5;
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
    this.showAnswerScreenBool = false;
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

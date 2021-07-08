import MainScene from "./MainScene.js";

export default class MainSceneDimension extends MainScene {
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

    //Answers
    //Toxic
    firstToxicAnswertext,
    firstToxicAnswerFont,
    secondToxicAnswertext,
    secondToxicAnswerFont,
    thirdToxicAnswertext,
    fourthToxicAnswertext,
    fifthToxicAnswertext,
    sixthToxicAnswertext,
    seventhToxicAnswertext,
    eighthToxicAnswertext,
    ninthToxicAnswertext,
    tenthToxicAnswertext,
    //positive
    firstPositiveAnswertext,
    firstPositiveAnswerFont,
    secondPositiveAnswertext,
    secondPositiveAnswerFont,
    thirdPositiveAnswertext,
    fourthPositiveAnswertext,
    fifthPositiveAnswertext,
    sixthPositiveAnswertext,
    seventhPositiveAnswertext,
    eighthPositiveAnswertext,
    ninthPositiveAnswertext,
    tenthPositiveAnswertext,
    //neutral
    firstNeutralAnswertext,
    firstNeutralAnswerFont,
    secondNeutralAnswertext,
    secondNeutralAnswerFont,
    thirdNeutralAnswertext,
    fourthNeutralAnswertext,
    fifthNeutralAnswertext,
    sixthNeutralAnswertext,
    seventhNeutralAnswertext,
    eighthNeutralAnswertext,
    ninthNeutralAnswertext,
    tenthNeutralAnswertext,
    //negative
    firstNegativeAnswertext,
    firstNegativeAnswerFont,
    secondNegativeAnswertext,
    secondNegativeAnswerFont,
    thirdNegativeAnswertext,
    fourthNegativeAnswertext,
    fifthNegativeAnswertext,
    sixthNegativeAnswertext,
    seventhNegativeAnswertext,
    eighthNegativeAnswertext,
    ninthNegativeAnswertext,
    tenthNegativeAnswertext,

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

      //Choose answers:
      //toxic
      chooseToxicAnswer,
      //positive
      choosePositiveAnswer,
      //neutral
      chooseNeutralAnswer,
      //negative
      chooseNegativeAnswer,

      //Answers
      //Toxic
      firstToxicAnswertext,
      firstToxicAnswerFont,
      secondToxicAnswertext,
      secondToxicAnswerFont,
      thirdToxicAnswertext,
      fourthToxicAnswertext,
      fifthToxicAnswertext,
      sixthToxicAnswertext,
      seventhToxicAnswertext,
      eighthToxicAnswertext,
      ninthToxicAnswertext,
      tenthToxicAnswertext,
      //positive
      firstPositiveAnswertext,
      firstPositiveAnswerFont,
      secondPositiveAnswertext,
      secondPositiveAnswerFont,
      thirdPositiveAnswertext,
      fourthPositiveAnswertext,
      fifthPositiveAnswertext,
      sixthPositiveAnswertext,
      seventhPositiveAnswertext,
      eighthPositiveAnswertext,
      ninthPositiveAnswertext,
      tenthPositiveAnswertext,
      //neutral
      firstNeutralAnswertext,
      firstNeutralAnswerFont,
      secondNeutralAnswertext,
      secondNeutralAnswerFont,
      thirdNeutralAnswertext,
      fourthNeutralAnswertext,
      fifthNeutralAnswertext,
      sixthNeutralAnswertext,
      seventhNeutralAnswertext,
      eighthNeutralAnswertext,
      ninthNeutralAnswertext,
      tenthNeutralAnswertext,
      //negative
      firstNegativeAnswertext,
      firstNegativeAnswerFont,
      secondNegativeAnswertext,
      secondNegativeAnswerFont,
      thirdNegativeAnswertext,
      fourthNegativeAnswertext,
      fifthNegativeAnswertext,
      sixthNegativeAnswertext,
      seventhNegativeAnswertext,
      eighthNegativeAnswertext,
      ninthNegativeAnswertext,
      tenthNegativeAnswertext,

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
    );
  }
  //-------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------
  //no ground and bigger Aura
  npcProblemScreen() {
    if (this.showNPCProblemScreenBool === true) {
      //WeiterButton
      this.weiterButtonAnswerScreen.fadeIn();
      this.weiterButtonAnswerScreen.displayActiveOrSleeping();
      this.weiterButtonAnswerScreen.displayButtonSentence();

      //Pics
      //pics fade in because auf weiterButtonAnswerScreen.fadeIn (nopush() and pop() were use

      image(
        this.npcProblemScreenAura,
        180,
        -20,
        this.npcProblemScreenAura.width / 1,
        this.npcProblemScreenAura.height / 1
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
        this.npcProblemScreenAura,
        180,
        -20,
        this.npcProblemScreenAura.width / 1,
        this.npcProblemScreenAura.height / 1
      );

      image(
        this.NPCproblem,
        180,
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
        this.npcProblemScreenAura,
        180,
        -20,
        this.npcProblemScreenAura.width / 1,
        this.npcProblemScreenAura.height / 1
      );

      this.fadeInAnswerPic();
      tint(255, 255);
      image(
        this.NPCproblem,
        180,
        20,
        this.NPCproblem.width / 1.2,
        this.NPCproblem.height / 1.2
      );
    }
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
          this.aura_toxic.width * 1.1,
          this.aura_toxic.height * 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.toxic,
          180,
          20,
          this.toxic.width / 1.2,
          this.toxic.height / 1.2
        );
      }
      if (this.positiveTextButton.state === "choosed") {
        this.positiveReaction.fadeIn();
        this.positiveReaction.displaySpeechBubble();
        this.positiveReaction.displaySpeechSentences();

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
          this.aura_positive.width * 1.1,
          this.aura_positive.height * 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.positive,
          180,
          20,
          this.positive.width / 1.2,
          this.positive.height / 1.2
        );
      }
      if (this.neutralTextButton.state === "choosed") {
        this.neutralReaction.fadeIn();
        this.neutralReaction.displaySpeechBubble();
        this.neutralReaction.displaySpeechSentences();

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
          this.aura_neutral.width * 1.1,
          this.aura_neutral.height * 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.neutral,
          180,
          20,
          this.neutral.width / 1.2,
          this.neutral.height / 1.2
        );
      }
      if (this.negativeTextButton.state === "choosed") {
        this.negativeReaction.fadeIn();
        this.negativeReaction.displaySpeechBubble();
        this.negativeReaction.displaySpeechSentences();

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
          this.aura_negative.width * 1.1,
          this.aura_negative.height * 1.1
        );
        this.fadeInAnswerPic();
        tint(255, this.fadeInPic);
        image(
          this.negative,
          180,
          20,
          this.negative.width / 1.2,
          this.negative.height / 1.2
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
}

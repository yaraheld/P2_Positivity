import MainScene from "./MainScene.js";
import WeiterButton from "./WeiterButton.js";

let chefMainScene = new MainScene();

//variables & commentaries = english
//classes: Capital Letter
//variables: lowercaseInitial
//functions: self-explanatory naming

//textFont("Duper");
let duper = loadFont("00_Links/00_Fonts/duper_regular.otf");
//textFont("Duper-Ita");
let duperItalic = loadFont("00_Links/00_Fonts/duper-italic.otf");
// textFont("Duper-Bold");
let duperBold = loadFont("00_Links/00_Fonts/duper_bold.otf");
//textFont("Duper-BoldIta");
let duperBoldItalic = loadFont("00_Links/00_Fonts/duper_bolditalic.otf");

//JUST FOR TESTING (BEGIN BUTTON)
let showStartTestButton = true;
let startTestButton = new WeiterButton(0, 0);
//JUST FOR TESTING (NEXT SCENE)
let showNextScene = false;
function nextScene() {
  if (showNextScene === true) {
    textFont("Duper-Bold");
    fill(61, 18, 117);
    textSize(70);
    text("NEXT SCENE", -160, 0);
  }
}

function standardSettings() {
  //Screen center (midpoint)
  translate(550, 310);

  //16:9 Background (1100x620 px)
  noStroke();
  fill(255);
  rect(-550, -310, 1100, 620);

  //Mode settings
  rectMode(CORNER);
  imageMode(CENTER);
  angleMode(DEGREES);
  textAlign(CORNER);

  scale(1);
}

let usersHeartIcon = loadImage("00_Links/00_UI-Elements/heart.png");
let usersSpeedIcon = loadImage("00_Links/00_UI-Elements/speed.png");
let usersPositivityIcon = loadImage("00_Links/00_UI-Elements/positivity.png");
let usersShieldIcon = loadImage("00_Links/00_UI-Elements/shield.png");
let userHealth = 0;
let userSpeed = 0;
let userPositivity = 0;
let userShield = 0;

function userStats() {
  //entspr. Szenen per Mainszene Aktualisieren!!!
  if (chefMainScene.showPanoramaScreenBool === false) {
    push();
    tint(255, 255);
    //Heart
    image(
      usersHeartIcon,
      -515,
      -275,
      usersHeartIcon.width / 5,
      usersHeartIcon.height / 5
    );
    //entspr. Szenen per Mainszene Aktualisieren!!!
    userHealth = chefMainScene.userHealth;
    noStroke();
    fill(255, 165, 255);
    rect(-500, -280, 10 + userHealth, 10, 10);

    //Speed
    image(
      usersSpeedIcon,
      -515,
      -248,
      usersSpeedIcon.width / 5,
      usersSpeedIcon.height / 5
    );
    //entspr. Szenen per Mainszene Aktualisieren!!!
    userSpeed = chefMainScene.userSpeed;
    fill(33, 241, 207);
    rect(-500, -253, 10 + userSpeed, 10, 10);

    //Positivity
    image(
      usersPositivityIcon,
      -515,
      -221,
      usersPositivityIcon.width / 5,
      usersPositivityIcon.height / 5
    );
    //entspr. Szenen per Mainszene Aktualisieren!!!
    userPositivity = chefMainScene.userPositivity;
    fill(148, 224, 255);
    rect(-500, -226, 10 + userPositivity, 10, 10);

    //Shield
    image(
      usersShieldIcon,
      -515,
      -194,
      usersShieldIcon.width / 5,
      usersShieldIcon.height / 5
    );
    //entspr. Szenen per Mainszene Aktualisieren!!!
    userShield = chefMainScene.userShield;
    fill(130, 94, 196);
    rect(-500, -199, 10 + userShield, 10, 10);

    // //Line bottom
    // strokeWeight(2);
    // stroke(220, 220, 220);
    // line(-525, -175, -300, -175);
    // noStroke();
    pop();
  }
}

let bossHealth = 0;
let bossObjectDamage = 0;
let bossObjectAmount = 0;
let bossObjectSpeed = 0;
function bossStats() {}

let showUserlook = false;
let userBody = loadImage("00_Links/00_UI-Elements/user.png");
let weiterButtonToNextScene = new WeiterButton(0, 240);
let userEffectGIF = loadImage("00_Links/00_UI-Elements/getItem.gif");
let fadeInItem = 0;
let countSceneButtonClicks = [];

function userLook() {
  if (showUserlook === true) {
    weiterButtonToNextScene.fadeIn();
    weiterButtonToNextScene.displayActiveOrSleeping();
    weiterButtonToNextScene.displayButtonSentence();

    //TEXT & EFFECT
    fadeInItem += 5;
    if (fadeInItem > 255) {
      fadeInItem = 255;
    }
    textFont("Duper-Bold");
    fill(61, 18, 117, fadeInItem);
    textSize(70);
    text("YOUR", -310, 0);
    text("LOOK", 150, 0);
    image(
      userEffectGIF,
      -10,
      0,
      userEffectGIF.width / 1.4,
      userEffectGIF.height / 1.4
    );

    //User
    image(userBody, -10, -60, userBody.width / 1.4, userBody.height / 1.4);

    //-------ITEMS
    //entspr. Szenen per Mainszene Aktualisieren!!!
    //-----ChefMainScene
    if (chefMainScene.state === "toxic") {
      chefMainScene.returnToxicLook();
    }
    if (chefMainScene.state === "positive") {
      chefMainScene.returnPositiveLook();
    }
    if (chefMainScene.state === "negative") {
      chefMainScene.returnNegativeLook();
    }
  }
}

function mouseClicked() {
  //JUST FOR TESTING (BEGIN BUTTON)
  if (startTestButton.click()) {
    chefMainScene.showPanoramaScreen();
    showStartTestButton = false;
  }

  //-----------------------------------------------------------------------CHEF MAINSCENE
  if (chefMainScene.spellButtonClick()) {
    chefMainScene.showNPCProblemScreen();
  }

  if (chefMainScene.weiterButtonAnswerScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      chefMainScene.npcProblemSpeechbubble.speech.tenth.typingEnded === false
    ) {
      chefMainScene.npcProblemSpeechbubble.speech.displayAllTextAtOnce();
    } else {
      chefMainScene.showChooseAnswerScreen();
    }
  }
  if (chefMainScene.chooseAnswerScreenClick()) {
    chefMainScene.showAnswerScreen();
  }

  if (chefMainScene.weiterButtonReactionScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      chefMainScene.toxicTextButton.state === "choosed" &&
      chefMainScene.toxicAnswer.speech.tenth.typingEnded === false
    ) {
      chefMainScene.toxicAnswer.speech.displayAllTextAtOnce();
    } else if (
      chefMainScene.positiveTextButton.state === "choosed" &&
      chefMainScene.positiveAnswer.speech.tenth.typingEnded === false
    ) {
      chefMainScene.positiveAnswer.speech.displayAllTextAtOnce();
    } else if (
      chefMainScene.neutralTextButton.state === "choosed" &&
      chefMainScene.neutralAnswer.speech.tenth.typingEnded === false
    ) {
      chefMainScene.neutralAnswer.speech.displayAllTextAtOnce();
    } else if (
      chefMainScene.negativeTextButton.state === "choosed" &&
      chefMainScene.negativeAnswer.speech.tenth.typingEnded === false
    ) {
      chefMainScene.negativeAnswer.speech.displayAllTextAtOnce();
    } else {
      chefMainScene.showReactionScreen();
    }

    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
  } else if (chefMainScene.weiterButtonItemScreenClick()) {
    //Had to define every state very detailed because of the "neutral"-button,
    //which has another condition than the others
    if (
      chefMainScene.toxicTextButton.state === "choosed" &&
      chefMainScene.toxicReaction.speech.tenth.typingEnded === false
    ) {
      chefMainScene.toxicReaction.speech.displayAllTextAtOnce();
    } else if (
      chefMainScene.toxicTextButton.state === "choosed" &&
      chefMainScene.toxicReaction.speech.tenth.typingEnded === true
    ) {
      chefMainScene.showItemScreen();
    }

    if (
      chefMainScene.positiveTextButton.state === "choosed" &&
      chefMainScene.positiveReaction.speech.tenth.typingEnded === false
    ) {
      chefMainScene.positiveReaction.speech.displayAllTextAtOnce();
    } else if (
      chefMainScene.positiveTextButton.state === "choosed" &&
      chefMainScene.positiveReaction.speech.tenth.typingEnded === true
    ) {
      chefMainScene.showItemScreen();
    }

    if (
      chefMainScene.negativeTextButton.state === "choosed" &&
      chefMainScene.negativeReaction.speech.tenth.typingEnded === false
    ) {
      chefMainScene.negativeReaction.speech.displayAllTextAtOnce();
    } else if (
      chefMainScene.negativeTextButton.state === "choosed" &&
      chefMainScene.negativeReaction.speech.tenth.typingEnded === true
    ) {
      chefMainScene.showItemScreen();
    }

    if (
      chefMainScene.neutralTextButton.state === "choosed" &&
      chefMainScene.neutralReaction.speech.tenth.typingEnded === false
    ) {
      chefMainScene.neutralReaction.speech.displayAllTextAtOnce();
    } else if (
      chefMainScene.neutralTextButton.state === "choosed" &&
      chefMainScene.neutralReaction.speech.tenth.typingEnded === true
    ) {
      countSceneButtonClicks.push("Clicked");
      chefMainScene.showReactionScreenBool = false;
      showNextScene = true;
    }
  }

  if (chefMainScene.weiterButtonYourLookScreenClick()) {
    chefMainScene.showItemScreenBool = false;
    showUserlook = true;
    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
    //countSceneButtonClicks: Same Weiterbutton, different following scenes. The Array helps to define which scene is next
  } else if (
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 0
  ) {
    countSceneButtonClicks.push("Clicked");
    showUserlook = false;
    showNextScene = true;
  }
}

//All events die p5 uses, have to be anhängt ans window
window.mouseClicked = mouseClicked;
window.draw = draw;
function draw() {
  standardSettings();

  //Just for testing at the Beginning
  if (showStartTestButton === true) {
    startTestButton.fadeIn();
    startTestButton.displayActiveOrSleeping();
    startTestButton.displayButtonSentence();
  }

  //Jump to next Scene (for Coding)
  // chefMainScene.showNPCProblemScreen();
  // chefMainScene.showChooseAnswerScreen();
  // chefMainScene.negativeTextButton.state = "choosed";
  // chefMainScene.showAnswerScreen();
  // chefMainScene.positiveTextButton.state = "choosed";
  // chefMainScene.showItemScreen();

  //02_chefMainScene
  chefMainScene.panoramaScreen();
  chefMainScene.npcProblemScreen();
  chefMainScene.chooseAnswerScreen();
  chefMainScene.answerScreen();
  chefMainScene.reactionScreen();
  chefMainScene.itemScreen();

  userStats();
  userLook();

  //JUST FOR TESTING (NEXT SCENE)
  nextScene();
}

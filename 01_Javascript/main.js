import MainScene from "./MainScene.js";
import MainSceneSelf from "./MainSceneSelf.js";
import WeiterButton from "./WeiterButton.js";
import SoccerToChefScene from "./SoccerToChefScene.js";
import ChefToCoffeeScene from "./ChefToCoffeeScene.js";

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

//----------------Define classes from all scenes and between scenes

let soccerMainScene = new MainScene(
  "01_soccerMainScene",

  //Spellbutton x-Postion//
  10,
  200,

  //Type of Aura, Textbox and exclamation mark (NPC problem screen)
  //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
  //Types TextBox:  |   textBoxSad  |  textBoxMad  |  usw.
  //Types Exlamation mark:  |   excalmSad  |  exclamMad  |  usw.
  "Aura_negative",
  "textBoxMad",
  "exclamMad",

  //NPC problem speechbububle text
  "Wie kann man denn so verpeilt sein?",
  "Duper-Bold",
  "Mein 12-jähriger Sohn hat gestern ",
  "Duper",
  "beim Fußballspiel den Elfmeter",
  "INS FALSCHE TOR VERSENKT!",
  "Wie kann das denn bitte bei nem",
  "Elfmeter passieren? Ich bin am Ende.",
  "Moment, warum erzähle ich ",
  "das überhaupt?",
  "",
  "",

  //Duration of answer Time
  0.5,

  //Choose answers:
  //toxic
  "KÖNNTE SCHLIMMER SEIN.",
  //positive
  "TRAINIERE DOCH MIT DEINEM SOHN.",
  //neutral
  "ICH HABS EILIG...",
  //negative
  "DAS IST EIN BISSCHEN PEINLICH.",

  //Answers
  //Toxic
  "Ich verstehe dich...",
  "Duper-Bold",
  "aber sieh es mal so:",
  "Duper",
  "Wenigstens hat er überhaupt",
  "ein Tor getroffen!",
  "",
  "",
  "",
  "",
  "",
  "",
  //positive
  "Mach dir nichts draus,",
  "Duper-Bold",
  "dein Sohn ist doch erst 12!",
  "Duper",
  "Ein Vater-Sohn-Training wird",
  "ihm bestimmt weiterhelfen.",
  "",
  "",
  "",
  "",
  "",
  "",
  //neutral
  "Naja, ich muss jetzt",
  "Duper-Bold",
  "weiter zur Arbeit.",
  "Duper-Bold",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  //negative
  "Das ist schon",
  "Duper-Bold",
  "ein bisschen peinlich.",
  "Duper-Bold",
  "Zum Glück habe ich",
  "keine Kinder.",
  "",
  "",
  "",
  "",
  "",
  "",

  //NPC Reaction
  //toxic
  "Hm, ja stimmt...",
  "Duper-Bold",
  "Am besten spreche ich garnicht",
  "Duper",
  "mit ihm darüber und freue mich",
  "einfach über meinen Sohn.",
  "Danke!",
  "",
  "",
  "",
  "",
  "",
  //positive
  "Haha, das ist ne Idee!",
  "Duper-Bold",
  "Da wird sich nicht nur mein Sohn",
  "Duper",
  "drüber freuen, sondern auch",
  "mein Gewicht.",
  "",
  "",
  "",
  "",
  "",
  "",

  //neutral
  "Aber wer bist du nochmal?",
  "Duper-Bold",
  "Arbeiten wir nicht im",
  "Duper",
  "gleichen Abteil?",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  //negative
  "Ein bisschen beneide",
  "Duper-Bold",
  "ich dich schon...",
  "Duper-Bold",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",

  //Parameter User
  //Health:
  10,
  //Speed
  20,
  //Positivity
  10,
  //Shield
  0,

  // Parameter Boss
  //Toxic
  //Health:
  0,
  //Object damage:
  20,
  //Object amount:
  0,
  //Object speed
  10,

  //Neutral
  //Object amount:
  20,

  //Negative
  //Health:
  20,
  //Object damage:
  0,
  //Object amount:
  0,
  //Object speed
  10
);

let soccerToChefScene = new SoccerToChefScene();

let chefMainScene = new MainScene(
  "02_chefMainScene",

  //Spellbutton x-Postion//
  10,
  200,

  //Type of Aura, Textbox and exclamation mark (NPC problem screen)
  //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
  "Aura_sad",
  "textBoxSad",
  "exclamSad",

  //NPC problem speechbububle text
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
  "",

  //Duration of answer Time
  0.5,

  //Choose answers:
  //toxic
  "VERSUCHEN SIE, POSITIV ZU BLEIBEN.",
  //positive
  "VERSUCHEN SIE, PRIORITÄTEN ZU SETZEN.",
  //neutral
  "UIUIUI MEINE BLASE...",
  //negative
  "DAS GEHT MICH EIGENTLICH NICHTS AN...",

  //Answers
  //Toxic
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
  "",
  //positive
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
  "",
  //neutral
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
  "",
  //negative
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
  "",

  //NPC Reaction
  //toxic
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
  "",
  //positive
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
  "",
  //neutral
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
  "",
  //negative
  "Machen Sie sich an die Arbeit!",
  "Duper-Bold",
  "Vergessen Sie ganz schnell, was",
  "Duper",
  "ich Ihnen gerade erzählt habe!",
  "",
  "",
  "",
  "",
  "",
  "",
  "",

  //Parameter User
  //Health:
  10,
  //Speed
  0,
  //Positivity
  10,
  //Shield
  20,

  // Parameter Boss
  //Toxic
  //Health:
  0,
  //Object damage:
  10,
  //Object amount:
  10,
  //Object speed
  10,

  //Neutral
  //Object amount:
  20,

  //Negative
  //Health:
  20,
  //Object damage:
  0,
  //Object amount:
  0,
  //Object speed
  10
);

let chefToCoffeeScene = new ChefToCoffeeScene();

let coffeeMainScene = new MainSceneSelf(
  "03_coffeeScene",

  //Spellbutton x-Postion//
  0,
  115,

  //Type of Aura, ThoughtBubble and exclamation mark (NPC problem screen changes to "own problem thought screen")
  //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
  "Aura_sad",
  "thoughtBubbleSad",
  "exclamSad",

  //NPC problem speechbububle text
  "Och nööö...",
  "Duper-Bold",
  "Meine Hose ist total nass.",
  "Duper-Bold",
  "Shit! Ist nicht gleich das Meeting mit",
  "dem Investor?! Jetzt muss ich mir wohl wieder",
  "die lange Unterhose meiner Kollegin leihen.",
  "Moment, befinde ich mich gerade",
  "in meinen Gedanken?",
  "",
  "",
  "",

  //Duration of answer Time
  0.5,

  //Choose answers:
  //toxic
  "DEN GEDANKEN IGNORIEREN.",
  //positive
  "AUF DEN GEDANKEN EINGEHEN",
  //neutral
  "ICH HOLE MIR NEUEN KAFFEE.",
  //negative
  "ICH HABE HALT ZWEI LINKE HÄNDE.",

  //Jumps directly to reaction (formulated answer is not needed)
  //NPC Reaction => own Reaction
  //toxic
  "Den Gedanken",
  "Duper-Bold",
  "schiebe ich einfach unter meinen",
  "Duper",
  "Sorgenstapel. Und mit der langen",
  "Unterhose sehe ich eigentlich",
  "ganz sexy aus.",
  "",
  "",
  "",
  "",
  "",
  //positive
  "Ich bin wohl etwas nervös,",
  "Duper-Bold",
  "aber das ist normal. Ich versuche",
  "Duper",
  "jetzt klare Gedanken zu fassen und",
  "schnell eine Alternative zur langen",
  "Unterhose zu finden.",
  "",
  "",
  "",
  "",
  "",
  //neutral
  "Kaffe leer... egal.",
  "Duper-Bold",
  "Hmmm... brauche...",
  "Duper",
  "neuen... Kaffee...",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  //negative
  "Wofür habe",
  "Duper-Bold",
  "ich denn bitte Zauberkräfte,",
  "Duper",
  "wenn ich noch nicht einmal richtig",
  "trinken kann?! Ich habe etwas",
  "schlimmeres als die lange",
  "Unterhose verdient.",
  "",
  "",
  "",
  "",

  //Parameter User
  //Health:
  10,
  //Speed
  0,
  //Positivity
  10,
  //Shield
  20,

  // Parameter Boss
  //Toxic
  //Health:
  0,
  //Object damage:
  10,
  //Object amount:
  10,
  //Object speed
  10,

  //Neutral
  //Object amount:
  20,

  //Negative
  //Health:
  20,
  //Object damage:
  0,
  //Object amount:
  0,
  //Object speed
  10
);

//------------------------------"Global" functions, update it when adding a new mainscene
let usersHeartIcon = loadImage("00_Links/00_UI-Elements/heart.png");
let usersSpeedIcon = loadImage("00_Links/00_UI-Elements/speed.png");
let usersPositivityIcon = loadImage("00_Links/00_UI-Elements/positivity.png");
let usersShieldIcon = loadImage("00_Links/00_UI-Elements/shield.png");
let userHealth = 0;
let userSpeed = 0;
let userPositivity = 0;
let userShield = 0;

function userStats() {
  //entspr. Szenen pro Mainszene Aktualisieren!!!
  if (
    //MainScenes
    soccerMainScene.showPanoramaScreenBool === false &&
    //
    chefMainScene.showPanoramaScreenBool === false &&
    //
    coffeeMainScene.showPanoramaScreenBool === false &&
    //
    //betweenScenes
    //
    soccerToChefScene.firstScreenBool === false &&
    //
    chefToCoffeeScene.firstScreenBool === false &&
    chefToCoffeeScene.secondScreenBool === false &&
    chefToCoffeeScene.thirdScreenBool === false
  ) {
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

    //entspr. Szenen pro Mainszene Aktualisieren!!!
    userHealth =
      //Mainscenes
      soccerMainScene.userHealth +
      chefMainScene.userHealth +
      coffeeMainScene.userHealth;

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

    //entspr. Szenen pro Mainszene Aktualisieren!!!
    userSpeed =
      //Mainscenes
      soccerMainScene.userSpeed +
      chefMainScene.userSpeed +
      coffeeMainScene.userSpeed;

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

    //entspr. Szenen pro Mainszene Aktualisieren!!!
    userPositivity =
      //Mainscenes
      soccerMainScene.userPositivity +
      chefMainScene.userPositivity +
      coffeeMainScene.userPositivity;

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

    //entspr. Szenen pro Mainszene Aktualisieren!!!
    userShield =
      //Mainscenes
      soccerMainScene.userShield +
      chefMainScene.userShield +
      coffeeMainScene.userShield;

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

function bossStats() {
  //entspr. Szenen pro Mainszene Aktualisieren!!!
  bossHealth =
    //Mainscenes
    soccerMainScene.bossHealth +
    chefMainScene.bossHealth +
    coffeeMainScene.bossHealth;

  //entspr. Szenen pro Mainszene Aktualisieren!!!
  bossObjectDamage =
    //Mainscenes
    soccerMainScene.bossObjectDamage +
    chefMainScene.bossObjectDamage +
    coffeeMainScene.bossObjectDamage;

  //entspr. Szenen pro Mainszene Aktualisieren!!!
  bossObjectAmount =
    //Mainscenes

    soccerMainScene.bossObjectAmount +
    chefMainScene.bossObjectAmount +
    coffeeMainScene.bossObjectAmount;

  //entspr. Szenen pro Mainszene Aktualisieren!!!
  bossObjectSpeed =
    // Mainscenes
    soccerMainScene.bossObjectSpeed +
    chefMainScene.bossObjectSpeed +
    coffeeMainScene.bossObjectSpeed;
}

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
    //-----------------------------------------------------CORRECT ORDER (ITEMS ABOVE AND BELOW!)
    //entspr. Szenen per Mainszene Aktualisieren!!!
    //-----SoccerMainScene (SHOES)
    if (soccerMainScene.state === "toxic") {
      soccerMainScene.returnToxicLook();
    }
    if (soccerMainScene.state === "positive") {
      soccerMainScene.returnPositiveLook();
    }
    if (soccerMainScene.state === "negative") {
      soccerMainScene.returnNegativeLook();
    }
    //-----CoffeeMainScene(PANTS)
    if (coffeeMainScene.state === "toxic") {
      coffeeMainScene.returnToxicLook();
    }
    if (coffeeMainScene.state === "positive") {
      coffeeMainScene.returnPositiveLook();
    }
    if (coffeeMainScene.state === "negative") {
      coffeeMainScene.returnNegativeLook();
    }
    //-----ChefMainScene (CHESTPLATE)
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
//All events die p5 uses, have to be anhängt ans window
window.mouseClicked = mouseClicked;
function mouseClicked() {
  //JUST FOR TESTING (BEGIN BUTTON)
  if (startTestButton.click()) {
    soccerMainScene.showPanoramaScreen();
    showStartTestButton = false;
  }
  //-----------------------------------------------------------------------SOCCER MAINSCENE
  else if (soccerMainScene.spellButtonClick()) {
    soccerMainScene.showNPCProblemScreen();
  } else if (soccerMainScene.weiterButtonChooseAnswerScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      soccerMainScene.npcProblemSpeechbubble.speech.tenth.typingEnded === false
    ) {
      soccerMainScene.npcProblemSpeechbubble.speech.displayAllTextAtOnce();
    } else {
      soccerMainScene.showChooseAnswerScreen();
    }
  } else if (soccerMainScene.chooseAnswerScreenClick()) {
    soccerMainScene.showAnswerScreen();
  } else if (soccerMainScene.weiterButtonReactionScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      soccerMainScene.toxicTextButton.state === "choosed" &&
      soccerMainScene.toxicAnswer.speech.tenth.typingEnded === false
    ) {
      soccerMainScene.toxicAnswer.speech.displayAllTextAtOnce();
    } else if (
      soccerMainScene.positiveTextButton.state === "choosed" &&
      soccerMainScene.positiveAnswer.speech.tenth.typingEnded === false
    ) {
      soccerMainScene.positiveAnswer.speech.displayAllTextAtOnce();
    } else if (
      soccerMainScene.neutralTextButton.state === "choosed" &&
      soccerMainScene.neutralAnswer.speech.tenth.typingEnded === false
    ) {
      soccerMainScene.neutralAnswer.speech.displayAllTextAtOnce();
    } else if (
      soccerMainScene.negativeTextButton.state === "choosed" &&
      soccerMainScene.negativeAnswer.speech.tenth.typingEnded === false
    ) {
      soccerMainScene.negativeAnswer.speech.displayAllTextAtOnce();
    } else {
      soccerMainScene.showReactionScreen();
    }

    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
  } else if (soccerMainScene.weiterButtonItemScreenClick()) {
    //Had to define every state very detailed because of the "neutral"-button,
    //which has another condition than the others
    if (
      soccerMainScene.toxicTextButton.state === "choosed" &&
      soccerMainScene.toxicReaction.speech.tenth.typingEnded === false
    ) {
      soccerMainScene.toxicReaction.speech.displayAllTextAtOnce();
    } else if (
      soccerMainScene.toxicTextButton.state === "choosed" &&
      soccerMainScene.toxicReaction.speech.tenth.typingEnded === true
    ) {
      soccerMainScene.showItemScreen();
    }

    if (
      soccerMainScene.positiveTextButton.state === "choosed" &&
      soccerMainScene.positiveReaction.speech.tenth.typingEnded === false
    ) {
      soccerMainScene.positiveReaction.speech.displayAllTextAtOnce();
    } else if (
      soccerMainScene.positiveTextButton.state === "choosed" &&
      soccerMainScene.positiveReaction.speech.tenth.typingEnded === true
    ) {
      soccerMainScene.showItemScreen();
    }

    if (
      soccerMainScene.negativeTextButton.state === "choosed" &&
      soccerMainScene.negativeReaction.speech.tenth.typingEnded === false
    ) {
      soccerMainScene.negativeReaction.speech.displayAllTextAtOnce();
    } else if (
      soccerMainScene.negativeTextButton.state === "choosed" &&
      soccerMainScene.negativeReaction.speech.tenth.typingEnded === true
    ) {
      soccerMainScene.showItemScreen();
    }

    if (
      soccerMainScene.neutralTextButton.state === "choosed" &&
      soccerMainScene.neutralReaction.speech.tenth.typingEnded === false
    ) {
      soccerMainScene.neutralReaction.speech.displayAllTextAtOnce();
    } else if (
      soccerMainScene.neutralTextButton.state === "choosed" &&
      soccerMainScene.neutralReaction.speech.tenth.typingEnded === true
    ) {
      soccerMainScene.showReactionScreenBool = false;
      //CALL HERE THE NEXT BETWEEN-SCENE!
      soccerToChefScene.showFirstScreen();
      //Jumps directly to next scene!
      countSceneButtonClicks.push("Clicked");
    }
  } else if (soccerMainScene.weiterButtonYourLookScreenClick()) {
    soccerMainScene.showItemScreenBool = false;
    showUserlook = true;
    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
    //countSceneButtonClicks: Same Weiterbutton, different following scenes. The Array helps to define which scene is next
  } else if (
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 0
  ) {
    //CALL HERE THE NEXT BETWEEN-SCENE!
    soccerToChefScene.showFirstScreen();
    showUserlook = false;
    countSceneButtonClicks.push("Clicked");
  }

  //-----------------------------------------------------------------------SoccerToChefScene (Between-Scene)
  else if (
    soccerToChefScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (soccerToChefScene.firstScreenText.sentence.typingEnded === false) {
      soccerToChefScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      soccerToChefScene.showNextPanoramaScreenFromMainScene();
      chefMainScene.showPanoramaScreen();
    }
  }

  //-----------------------------------------------------------------------CHEF MAINSCENE
  else if (chefMainScene.spellButtonClick()) {
    chefMainScene.showNPCProblemScreen();
  } else if (chefMainScene.weiterButtonChooseAnswerScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      chefMainScene.npcProblemSpeechbubble.speech.tenth.typingEnded === false
    ) {
      chefMainScene.npcProblemSpeechbubble.speech.displayAllTextAtOnce();
    } else {
      chefMainScene.showChooseAnswerScreen();
    }
  } else if (chefMainScene.chooseAnswerScreenClick()) {
    chefMainScene.showAnswerScreen();
  } else if (chefMainScene.weiterButtonReactionScreenClick()) {
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
      chefMainScene.showReactionScreenBool = false;
      //CALL HERE THE NEXT BETWEEN-SCENE!
      chefToCoffeeScene.showFirstScreen();
      //Jumps directly to next scene!
      countSceneButtonClicks.push("Clicked");
    }
  } else if (chefMainScene.weiterButtonYourLookScreenClick()) {
    chefMainScene.showItemScreenBool = false;
    showUserlook = true;
    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
    //countSceneButtonClicks: Same Weiterbutton, different following scenes. The Array helps to define which scene is next
  } else if (
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 1
  ) {
    showUserlook = false;
    //CALL HERE THE NEXT BETWEEN-SCENE!
    chefToCoffeeScene.showFirstScreen();
    countSceneButtonClicks.push("Clicked");
  }

  //-----------------------------------------------------------------------chefToCoffeScene (Between-Scene)
  else if (chefToCoffeeScene.weiterButtonSecondScreenClick()) {
    if (chefToCoffeeScene.firstScreenText.sentence.typingEnded === false) {
      chefToCoffeeScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      chefToCoffeeScene.showSecondScreen();
    }
  } else if (chefToCoffeeScene.weiterButtonThirdScreenClick()) {
    if (chefToCoffeeScene.secondScreenText.sentence.typingEnded === false) {
      chefToCoffeeScene.secondScreenText.sentence.displayAllTextAtOnce();
    } else {
      chefToCoffeeScene.showThirdScreen();
    }
  } else if (
    chefToCoffeeScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (chefToCoffeeScene.thirdScreenText.sentence.typingEnded === false) {
      chefToCoffeeScene.thirdScreenText.sentence.displayAllTextAtOnce();
    } else {
      chefToCoffeeScene.showNextPanoramaScreenFromMainScene();
      coffeeMainScene.showPanoramaScreen();
    }
  }
  //-----------------------------------------------------------------------COFFEE MAINSCENE
  else if (coffeeMainScene.spellButtonClick()) {
    coffeeMainScene.showNPCProblemScreen();
  } else if (coffeeMainScene.weiterButtonChooseAnswerScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      coffeeMainScene.npcProblemSpeechbubble.speech.tenth.typingEnded === false
    ) {
      coffeeMainScene.npcProblemSpeechbubble.speech.displayAllTextAtOnce();
    } else {
      coffeeMainScene.showChooseAnswerScreen();
    }
  } else if (coffeeMainScene.chooseAnswerScreenClick()) {
    coffeeMainScene.showReactionScreen();
  }

  //Has to be an "Else If" condition, because button is on the same place than before,
  //it would make 2 clicks directly after another an jump directly to the next action
  else if (coffeeMainScene.weiterButtonItemScreenClick()) {
    //Had to define every state very detailed because of the "neutral"-button,
    //which has another condition than the others
    if (
      coffeeMainScene.toxicTextButton.state === "choosed" &&
      coffeeMainScene.toxicReaction.speech.tenth.typingEnded === false
    ) {
      coffeeMainScene.toxicReaction.speech.displayAllTextAtOnce();
    } else if (
      coffeeMainScene.toxicTextButton.state === "choosed" &&
      coffeeMainScene.toxicReaction.speech.tenth.typingEnded === true
    ) {
      coffeeMainScene.showItemScreen();
    }

    if (
      coffeeMainScene.positiveTextButton.state === "choosed" &&
      coffeeMainScene.positiveReaction.speech.tenth.typingEnded === false
    ) {
      coffeeMainScene.positiveReaction.speech.displayAllTextAtOnce();
    } else if (
      coffeeMainScene.positiveTextButton.state === "choosed" &&
      coffeeMainScene.positiveReaction.speech.tenth.typingEnded === true
    ) {
      coffeeMainScene.showItemScreen();
    }

    if (
      coffeeMainScene.negativeTextButton.state === "choosed" &&
      coffeeMainScene.negativeReaction.speech.tenth.typingEnded === false
    ) {
      coffeeMainScene.negativeReaction.speech.displayAllTextAtOnce();
    } else if (
      coffeeMainScene.negativeTextButton.state === "choosed" &&
      coffeeMainScene.negativeReaction.speech.tenth.typingEnded === true
    ) {
      coffeeMainScene.showItemScreen();
    }

    if (
      coffeeMainScene.neutralTextButton.state === "choosed" &&
      coffeeMainScene.neutralReaction.speech.tenth.typingEnded === false
    ) {
      coffeeMainScene.neutralReaction.speech.displayAllTextAtOnce();
    } else if (
      coffeeMainScene.neutralTextButton.state === "choosed" &&
      coffeeMainScene.neutralReaction.speech.tenth.typingEnded === true
    ) {
      coffeeMainScene.showReactionScreenBool = false;
      //CALL HERE THE NEXT BETWEEN-SCENE!
      coffeeToInvestorScene.showFirstScreen();
      //Jumps directly to next scene!
      countSceneButtonClicks.push("Clicked");
    }
  } else if (coffeeMainScene.weiterButtonYourLookScreenClick()) {
    coffeeMainScene.showItemScreenBool = false;
    showUserlook = true;
    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
    //countSceneButtonClicks: Same Weiterbutton, different following scenes. The Array helps to define which scene is next
  } else if (
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 2
  ) {
    showUserlook = false;
    //CALL HERE THE NEXT BETWEEN-SCENE!
    coffeeToInvestorScene.showFirstScreen();
    countSceneButtonClicks.push("Clicked");
  }

  //-----------------------------------------------------------------------chefToCoffeScene (Between-Scene)
}

//All events die p5 uses, have to be anhängt ans window
window.draw = draw;
function draw() {
  standardSettings();

  //-------Start Button (Just for testing)
  if (showStartTestButton === true) {
    startTestButton.fadeIn();
    startTestButton.displayActiveOrSleeping();
    startTestButton.displayButtonSentence();
  }

  //01_soccerMainScene
  soccerMainScene.panoramaScreen();
  soccerMainScene.npcProblemScreen();
  soccerMainScene.chooseAnswerScreen();
  soccerMainScene.answerScreen();
  soccerMainScene.reactionScreen();
  soccerMainScene.itemScreen();

  //01_soccerToChefScene
  soccerToChefScene.firstScreen();

  //02_chefMainScene
  chefMainScene.panoramaScreen();
  chefMainScene.npcProblemScreen();
  chefMainScene.chooseAnswerScreen();
  chefMainScene.answerScreen();
  chefMainScene.reactionScreen();
  chefMainScene.itemScreen();

  //02_ChefToCoffeeScene
  chefToCoffeeScene.firstScreen();
  chefToCoffeeScene.secondScreen();
  chefToCoffeeScene.thirdScreen();

  //-------Jump to next Scene (Just for testing)
  // coffeeMainScene.showNPCProblemScreen();
  // chefMainScene.showChooseAnswerScreen();
  // chefMainScene.negativeTextButton.state = "choosed";
  // chefMainScene.showAnswerScreen();
  // chefMainScene.positiveTextButton.state = "choosed";
  // chefMainScene.showItemScreen();

  //03_coffeeMainScene
  coffeeMainScene.panoramaScreen();
  coffeeMainScene.npcProblemScreen();
  coffeeMainScene.chooseAnswerScreen();
  coffeeMainScene.reactionScreen();
  coffeeMainScene.itemScreen();

  //"Global" functions
  userStats();
  userLook();
  bossStats();

  //JUST FOR TESTING (NEXT SCENE)
  nextScene();
}

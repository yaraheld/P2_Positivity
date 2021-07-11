import MainScene from "./MainScene.js";
import MainSceneSelf from "./MainSceneSelf.js";
import MainSceneDimension from "./MainSceneDimension.js";
import WeiterButton from "./WeiterButton.js";
import SoccerToChefScene from "./SoccerToChefScene.js";
import ChefToCoffeeScene from "./ChefToCoffeeScene.js";
import CoffeeToInvestorScene from "./CoffeeToInvestorScene.js";
import InvestorToSocialScene from "./InvestorToSocialSene.js";
import SocialToDimensionScene from "./SocialToDimensionScene.js";
import BossFight from "./BossFight.js";
import DimensionToDestroyedScene from "./DimensionToDestroyedScene.js";
import DestroyedToEvilMentorScene from "./DestroyedToEvilMentorScene.js";
import EvilMentorMainScene from "./EvilMentorMainScene.js";
import EvilMentorToEndBossScene from "./EvilMentorToEndBossScene.js";
import FightButton from "./FightButton.js";
import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences.js";
import Endscreen from "./EndScreen.js";
import MainSceneSelfDebugDestroy from "./MainSceneSelfDebugDestroy.js";
import IntroToSoccerScene from "./IntroToSoccerScene.js";
import StartScreen from "./StartScreen.js";

let duper;
let duperBold;
//textFont(duper);
duper = loadFont("00_Links/00_Fonts/duper_regular.otf");
// textFont(duperBold);
duperBold = loadFont("00_Links/00_Fonts/duper_bold.otf");
export { duper, duperBold };

//variables & commentaries = english
//classes: Capital Letter
//variables: lowercaseInitial
//functions: self-explanatory naming

//Preperation for start over function (reset)
let startScreen;
let introToSoccerScene;
let soccerMainScene;
let soccerToChefScene;
let chefMainScene;
let chefToCoffeeScene;
let coffeeMainScene;
let coffeeToInvestorScene;
let investorMainScene;
let investorToSocialScene;
let socialMainScene;
let socialToDimensionScene;
let dimensionMainScene;
let dimensionToDestroyedScene;
let destroyedMainScene;
let destroyedToEvilMentorScene;
let evilMentorMainScene;
let evilMentorToEndBossScene;
let endScreen;
//------------------------------"
let bossFight;
//------------------------------"
let usersHeartIcon;
let usersSpeedIcon;
let usersPositivityIcon;
let usersShieldIcon;
let userHealth;
let userSpeed;
let userPositivity;
let userShield;
//------------------------------
let bossHealth;
let bossObjectDamage;
let bossObjectAmount;
let bossObjectSpeed;
//------------------------------
let showUserlook;
let userBody;
let weiterButtonToNextScene;
let userEffectGIF;
let fadeInItem;
let countSceneButtonClicks;
//------------------------------
let showUserScoreAndFightManual;
let statsImage;
let scorefadeIn;
let weiterButtonToFight;
let fightManualText;
let statsEffectGIF;
//------------------------------
let soccerState;
let investorState;
let coffeeState;
let chefState;
let destroyedState;
let dimensionState;
let socialState;
let evilMentorState;
//------------------------------
let createJustOneBossFight;
let bossFightStarts;
let showEndscreen;
let restart;
//
let bossHealthSave;
let bossObjectDamageSave;
let bossObjectAmountSave;
let bossObjectSpeedSave;
//
let setEverythingJustOnceForBossFight;
//
let setEverythingJustOnce = true;
//(Einmal aufrufen lassen)
function startOver() {
  if (setEverythingJustOnce === true) {
    //------------------------------"Global" functions, update it when adding a new mainscene
    usersHeartIcon = loadImage("00_Links/00_UI-Elements/heart.png");
    usersSpeedIcon = loadImage("00_Links/00_UI-Elements/speed.png");
    usersPositivityIcon = loadImage("00_Links/00_UI-Elements/positivity.png");
    usersShieldIcon = loadImage("00_Links/00_UI-Elements/shield.png");
    userHealth = 0;
    userSpeed = 0;
    userPositivity = 0;
    userShield = 0;

    //----------------------

    bossHealth = 0;
    bossObjectDamage = 0;
    bossObjectAmount = 0;
    bossObjectSpeed = 0;

    //----------------------
    bossHealthSave = 0;
    bossObjectDamageSave = 0;
    bossObjectAmountSave = 0;
    bossObjectSpeedSave = 0;
    //----------------------

    showUserlook = false;
    userBody = loadImage("00_Links/00_UI-Elements/user.png");
    weiterButtonToNextScene = new WeiterButton(0, 240);
    userEffectGIF = loadImage("00_Links/00_UI-Elements/getItem.gif");
    fadeInItem = 0;
    countSceneButtonClicks = [];

    //----------------------

    showUserScoreAndFightManual = false;
    statsImage = loadImage("00_Links/09_bossFight/stats.png");
    scorefadeIn = 0;
    weiterButtonToFight = new FightButton(0, 220, "LET'S FIGHT!", -60);
    fightManualText = new TextAnimationWithMultipleSentences(
      -405,
      -90,
      19,
      25,
      1,
      color(62, 19, 118),
      "That escalated quickly...",
      duperBold,
      "Kämpfe gegen deinen Mentor,",
      duper,
      "indem du den toxischen Feuerbällen",
      "ausweichst (Maus bewegen ▴ / ▾).",
      "Wenn du positive Feuerbälle (grün)",
      "einsammelst, erleidet der Mentor",
      "Schaden („Angriff“). ",
      "Besiege die Negativität!",
      "",
      ""
    );
    statsEffectGIF = loadImage("00_Links/00_UI-Elements/getItem.gif");

    //----------------
    createJustOneBossFight = true;
    bossFightStarts = false;
    showEndscreen = false;
    restart = false;
    //----------------

    soccerState;
    investorState;
    coffeeState;
    chefState;
    destroyedState;
    dimensionState;
    socialState;
    evilMentorState;

    //----------------Define classes from all scenes and between scenes
    startScreen = new StartScreen();

    introToSoccerScene = new IntroToSoccerScene();

    soccerMainScene = new MainScene(
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
      duperBold,
      "Mein 12-jähriger Sohn hat gestern ",
      duper,
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
      duperBold,
      "aber sieh es mal so:",
      duper,
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
      duperBold,
      "dein Sohn ist doch erst 12!",
      duper,
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
      duperBold,
      "weiter zur Arbeit.",
      duperBold,
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
      duperBold,
      "ein bisschen peinlich.",
      duperBold,
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
      duperBold,
      "Am besten spreche ich garnicht",
      duper,
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
      duperBold,
      "Da wird sich nicht nur mein Sohn",
      duper,
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
      duperBold,
      "Arbeiten wir nicht im",
      duper,
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
      duperBold,
      "ich dich schon...",
      duperBold,
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
      12.5,
      //Speed
      13.5,
      //Positivity
      0,
      //Shield
      6.5,

      // Parameter Boss
      //Toxic
      //Health:
      20,
      //Object damage:
      11,
      //Object amount:
      5,
      //Object speed
      6,

      //Neutral
      //Object amount:
      9,

      //Negative
      //Health:
      25,
      //Object damage:
      5,
      //Object amount:
      5,
      //Object speed
      4
    );

    soccerToChefScene = new SoccerToChefScene();

    chefMainScene = new MainScene(
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
      duperBold,
      "alles wett macht...",
      duperBold,
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
      duperBold,
      "vielleicht sollten Sie einfach",
      duper,
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
      duperBold,
      "das Geld wichtiger, als Ihre Frau?",
      duperBold,
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
      duperBold,
      "nicht auf dem Klo. ",
      duperBold,
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
      duperBold,
      "den Job ausgesucht,",
      duperBold,
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
      duperBold,
      "schon gesagt.",
      duperBold,
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
      duperBold,
      "Zum Glück sind mir meine Sorgen ",
      duper,
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
      duperBold,
      "was... ",
      duperBold,
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
      duperBold,
      "Vergessen Sie ganz schnell, was",
      duper,
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
      25,
      //Speed
      0,
      //Positivity
      10,
      //Shield
      6.5,

      // Parameter Boss
      //Toxic
      //Health:
      20,
      //Object damage:
      11,
      //Object amount:
      5,
      //Object speed
      2,

      //Neutral
      //Object amount:
      9,

      //Negative
      //Health:
      25,
      //Object damage:
      5,
      //Object amount:
      5,
      //Object speed
      2
    );

    chefToCoffeeScene = new ChefToCoffeeScene();

    coffeeMainScene = new MainSceneSelf(
      "03_coffeeMainScene",

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
      duperBold,
      "Meine Hose ist total nass.",
      duperBold,
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
      duperBold,
      "schiebe ich einfach unter meinen",
      duper,
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
      duperBold,
      "aber das ist normal. Ich versuche",
      duper,
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
      duperBold,
      "Hmmm... brauche...",
      duper,
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
      duperBold,
      "ich denn bitte Zauberkräfte,",
      duper,
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
      0,
      //Speed
      9,
      //Positivity
      10,
      //Shield
      6.5,

      // Parameter Boss
      //Toxic
      //Health:
      20,
      //Object damage:
      11,
      //Object amount:
      5,
      //Object speed
      2,

      //Neutral
      //Object amount:
      9,

      //Negative
      //Health:
      25,
      //Object damage:
      5,
      //Object amount:
      5,
      //Object speed
      2
    );

    coffeeToInvestorScene = new CoffeeToInvestorScene();

    investorMainScene = new MainScene(
      "04_investorMainScene",

      //Spellbutton x-y-Postion//
      23,
      190,

      //Type of Aura, Textbox and exclamation mark (NPC problem screen)
      //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
      "Aura_sad",
      "textBoxSad",
      "exclamSad",

      //NPC problem speechbububle text
      "Meine Schildkröte muss heute",
      duperBold,
      "eingeschläfert werden...",
      duperBold,
      "Speedo war mein ein und alles! Mit",
      "wem gucke ich denn jetzt Tierdokus?",
      "In meiner Verfassung muss ich das",
      "Meeting verschieben... Moment,",
      " warum erzähle ich Ihnen das?",
      "",
      "",
      "",

      //Duration of answer Time
      0.5,

      //Choose answers:
      //toxic
      "ES IST, WIE ES IST.",
      //positive
      "LASSEN SIE ES RAUS...",
      //neutral
      "ÄHH... ICH HABE PLATZANGST.",
      //negative
      "FÄLLT DAS MEETING ALSO AUS?",

      //Answers
      //Toxic
      "So ist das im Leben.",
      duperBold,
      "Konzentrieren Sie sich auf",
      duper,
      "das Positive. Sie haben einen",
      "freien Tag! Nutzen Sie ihn.",
      "",
      "",
      "",
      "",
      "",
      "",
      //positive
      "Das tut mir leid...",
      duperBold,
      "lassen Sie es raus.",
      duperBold,
      "Wenn ich Ihnen helfen kann",
      "oder Sie jemanden für einen",
      "Doku-Abend brauchen,",
      "sagen Sie bescheid.",
      "",
      "",
      "",
      "",
      //neutral
      "Ehrlich gesagt",
      duperBold,
      "bekomme ich in Aufzügen",
      duper,
      "schnell Platzangst...",
      "ich nehme die Treppen.",
      "",
      "",
      "",
      "",
      "",
      "",
      //negative
      "Jetzt machen Sie mal LANGSAM...",
      duperBold,
      "das Meeting fällt aus!?",
      duper,
      "Dann pack ich mal speedomäßig",
      "meine Sachen. Ach...",
      "und herzliches Beileid.",
      "",
      "",
      "",
      "",
      "",

      //NPC Reaction
      //toxic
      "Meinen Sie? Ich fühle mich",
      duperBold,
      "so kraftlos...",
      duperBold,
      "dann lass ich das Meeting zwar",
      "erstmal sausen, aber versuche",
      "mich trotzdem an etwas Produktivem.",
      "Das Leben muss ja weitergehen...",
      "",
      "",
      "",
      "",
      //positive
      "Das tut so gut,",
      duperBold,
      "einfach mal trauern zu können...",
      duper,
      "Ich werde das Meeting erstmal",
      "ausfallen lassen... Sie können mir",
      "gerne Ihre Nummer geben,",
      "es gibt bald eine neue Staffel von",
      "„Unser Planet“ auf Netflix (schnief).",
      "",
      "",
      "",
      //neutral
      "Warum sind sie dann überhaupt ",
      duperBold,
      "zum Aufzug gegangen?...",
      duperBold,
      "Naja, ich werde das Meeting",
      "erstmal ausfallen lassen.",
      "",
      "",
      "",
      "",
      "",
      "",
      //negative
      "l...langsam?",
      duperBold,
      "Speedo - w... was?",
      duperBold,
      "Ich werde das Meeting",
      "erstmal ausfallen lassen...",
      "",
      "",
      "",
      "",
      "",
      "",

      //Parameter User
      //Health:
      12.5,
      //Speed
      0,
      //Positivity
      10,
      //Shield
      19.5,

      // Parameter Boss
      //Toxic
      //Health:
      25,
      //Object damage:
      11,
      //Object amount:
      5,
      //Object speed
      2,

      //Neutral
      //Object amount:
      9,

      //Negative
      //Health:
      25,
      //Object damage:
      11,
      //Object amount:
      5,
      //Object speed
      2
    );

    investorToSocialScene = new InvestorToSocialScene();

    socialMainScene = new MainSceneSelf(
      "05_socialMainScene",

      //Spellbutton x-Postion//
      5,
      73,

      //Type of Aura, ThoughtBubble and exclamation mark (NPC problem screen changes to "own problem thought screen")
      //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
      "Aura_sad",
      "thoughtBubbleSad",
      "exclamSad",

      //NPC problem speechbububle text
      "Läuft bei meiner Kollegin…",
      duperBold,
      "Bei anderen scheint immer",
      duper,
      "alles super zu sein. Hier in der",
      "Description steht auch noch",
      "„positive vibes only“…",
      "",
      "",
      "",
      "",
      "",

      //Duration of answer Time
      0.5,

      //Choose answers:
      //toxic
      "POSITIVES DENKEN = POSITIVER SELBSTWERT.",
      //positive
      "ALLE GEFÜHLE SIND GLEICH WICHTIG.",
      //neutral
      "WEITER SCROLLEN",
      //negative
      "WARUM IST MEIN LEBEN NICHT AUCH SO?",

      //Jumps directly to reaction (formulated answer is not needed)
      //NPC Reaction => own Reaction
      //toxic
      "Ich like das Bild jetzt auch.",
      duperBold,
      "Der Post hat mich motiviert!",
      duper,
      "Mein Lächeln werde ich",
      "wieder aufsetzen.",
      "",
      "",
      "",
      "",
      "",
      "",
      //positive
      "Ich kann nicht nur",
      duperBold,
      "die positiven Gefühle fühlen",
      duperBold,
      "und die negativen ausblenden.",
      "Alle Gefühle sind relevant.",
      "",
      "",
      "",
      "",
      "",
      "",

      //neutral
      "Wieder ein Urlaubsbild.",
      duperBold,
      "Ich scrolle noch ein bisschen weiter.",
      duper,
      "Vielleicht gibts ja einen ",
      "witzigen Katzenpost",
      "von der h_da.",
      "",
      "",
      "",
      "",
      "",
      //negative
      "Im Vergleich zu ihr",
      duperBold,
      "ist mein Leben scheiße...",
      duperBold,
      "Egal was ich mache, das Glück",
      "ist einfach nicht auf meiner Seite.",
      "Ich will mich auch so",
      "fühlen wie sie...",
      "",
      "",
      "",
      "",

      //Parameter User
      //Health:
      12.5,
      //Speed
      4.5,
      //Positivity
      10,
      //Shield
      6.5,

      // Parameter Boss
      //Toxic
      //Health:
      20,
      //Object damage:
      11,
      //Object amount:
      5,
      //Object speed
      2,

      //Neutral
      //Object amount:
      9,

      //Negative
      //Health:
      25,
      //Object damage:
      5,
      //Object amount:
      5,
      //Object speed
      2
    );

    socialToDimensionScene = new SocialToDimensionScene();

    dimensionMainScene = new MainSceneDimension(
      "06_dimensionMainScene",

      //Spellbutton x-y-Postion//
      0,
      -50,

      //Type of Aura, Textbox and exclamation mark (NPC problem screen)
      //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
      "Aura_sad",
      "textBoxSad",
      "exclamSad",

      //NPC problem speechbububle text
      "Wir arbeiten gerade an einem",
      duperBold,
      "Uni-Projekt und liegen voll zurück!",
      duperBold,
      "Selbst unsere Dozentin bekommt",
      "jetzt Angst. Wie sollen wir dieses ",
      "Semester überstehen?",
      "Moment, irgendwie kommst",
      "du uns bekannt vor...?",
      "",
      "",
      "",

      //Duration of answer Time
      0.5,

      //Choose answers:
      //toxic
      "SCHEITERN IST KEINE OPTION!",
      //positive
      "SCHEITERN GEHÖRT DAZU.",
      //neutral
      "SCHEITERN IST EIN THEMA FÜR SICH.",
      //negative
      "WIEDREHOLT DOCH DAS SEMESTER.",

      //Answers
      //Toxic
      "Ihr seid nicht gescheitert.",
      duperBold,
      "Arbeitet weiter und holt",
      duper,
      "die Zeit wieder auf!",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      //positive
      "Scheitern ist nichts Schlechtes,",
      duperBold,
      "wenn man daraus lernt.",
      duperBold,
      "Guckt, was ihr ändern müsst",
      "und haut dann richtig rein!",
      "Alleine für die Idee würde",
      "ich euch eine 1.0 geben.",
      "",
      "",
      "",
      "",
      //neutral
      "... aber die Internetverbindung",
      duperBold,
      "war so schlecht,",
      duperBold,
      "ich habe leider nichts",
      "verstanden.",
      "",
      "",
      "",
      "",
      "",
      "",
      //negative
      "Wenn man scheitert,",
      duperBold,
      "sollte man seine Bemühungen",
      duper,
      "aufgeben und sich nicht",
      "weiter sinnlos anstrengen.",
      "",
      "",
      "",
      "",
      "",
      "",

      //NPC Reaction
      //toxic
      "Okay, wir schaffen das",
      duperBold,
      "irgendwie schon, solange wir",
      duper,
      "einfach weitermachen!",
      "Das Semester schaffen",
      "wir easy peasy. Piew Piew!",
      "",
      "",
      "",
      "",
      "",

      //positive
      "Guter Punkt – wir strukturieren",
      duperBold,
      "uns nochmal neu und gucken,",
      duperBold,
      "was wir anders machen müssen.",
      "Viel zu lernen wir noch haben!",
      "",
      "",
      "",
      "",
      "",
      "",

      //neutral
      "Was hast du gesagt?",
      duperBold,
      "Du warst gemutet.",
      duper,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",

      //negative
      "Jo.",
      duperBold,
      "Wir lassen uns",
      duper,
      "einfach etwas gehen,",
      "BAföG regelt.",
      "",
      "",
      "",
      "",
      "",
      "",

      //Parameter User
      //Health:
      0,
      //Speed
      4.5,
      //Positivity
      30,
      //Shield
      0,

      // Parameter Boss
      //Toxic
      //Health:
      20,
      //Object damage:
      11,
      //Object amount:
      9,
      //Object speed
      2,

      //Neutral
      //Object amount:
      9,

      //Negative
      //Health:
      25,
      //Object damage:
      11,
      //Object amount:
      5,
      //Object speed
      2
    );

    dimensionToDestroyedScene = new DimensionToDestroyedScene();

    destroyedMainScene = new MainSceneSelfDebugDestroy(
      "07_destroyedMainScene",

      //Spellbutton x-y-Postion//
      18,
      0,

      //Type of Aura, ThoughtBubble and exclamation mark (NPC problem screen changes to "own problem thought screen")
      //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
      "Aura_shock",
      "thoughtBubbleShocked",
      "exclamShocked",

      //NPC problem speechbububle text
      "Das kann doch nicht sein!",
      duperBold,
      "Gestern war alles normal...",
      duperBold,
      "und jetzt nimmt die Story völlig absurde",
      "Ausmaße an! Was hat das für einen Sinn?",
      "Vor allem für mich als User, wenn alle",
      "Entscheidungen umsonst waren?",
      "",
      "",
      "",
      "",

      //Duration of answer Time
      0.5,

      //Choose answers:
      //toxic
      "NICHTS WAR UMSONST.",
      //positive
      "JETZT MUSS ICH ERSTMAL KLARKOMMEN.",
      //neutral
      "HM, OKAY.",
      //negative
      "ICH HAB IMMERHIN DIE RÜSTUNG.",

      //Jumps directly to reaction (formulated answer is not needed)
      //NPC Reaction => own Reaction
      //toxic
      "...nichts war umsonst!",
      duperBold,
      "Good vibes only... mehr Lächeln...",
      duper,
      "pOsITiv dENkEn!",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      //positive
      "Noch nie hat sich",
      duperBold,
      "etwas so sinnlos angefühlt.",
      duperBold,
      "Das ist gerade echt hart. Wenn ich mich",
      "zusammenreiße, bekomme ich mich",
      "wieder in den Griff.",
      "",
      "",
      "",
      "",
      "",

      //neutral
      "...absurde Story?",
      duperBold,
      "Welche Story?...",
      duper,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      //negative
      "Wie es den Menschen in der",
      duperBold,
      "Simulation ergangen ist, ist mir egal.",
      duperBold,
      "Hauptsache ich habe Rüstungsteile",
      "bekommen und gewinne",
      "das Game!",
      "",
      "",
      "",
      "",
      "",

      //Parameter User
      //Health:
      25,
      //Speed
      0,
      //Positivity
      0,
      //Shield
      6.5,

      // Parameter Boss
      //Toxic
      //Health:
      20,
      //Object damage:
      11,
      //Object amount:
      5,
      //Object speed
      2,

      //Neutral
      //Object amount:
      9,

      //Negative
      //Health:
      25,
      //Object damage:
      5,
      //Object amount:
      5,
      //Object speed
      2
    );

    destroyedToEvilMentorScene = new DestroyedToEvilMentorScene();

    evilMentorMainScene = new EvilMentorMainScene(
      "08_evilMentorMainScene",

      //Spellbutton x-y-Postion//
      0,
      190,

      //Type of Aura, Textbox and exclamation mark (NPC problem screen)
      //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
      "Aura_negative",
      "textBoxMad",
      "exclamMad",

      //NPC problem speechbububle text
      "Mit Positivität kommt man doch",
      duperBold,
      "KEIN BISSCHEN WEITER IM LEBEN!",
      duperBold,
      "Diese naiven Menschen...",
      "ich kann Sie nicht ausstehen!",
      "Meine Geduld hat jetzt ein Ende.",
      "Die ganzen Entscheidungen",
      "MACHEN MICH IRRE!",
      "",
      "",
      "",

      //Duration of answer Time
      0.5,

      //Parameter User
      //Health:
      12.5,
      //Speed
      4.5,
      //Positivity
      10,
      //Shield
      0,

      // Parameter Boss
      //Toxic
      //Health:
      20,
      //Object damage:
      11,
      //Object amount:
      9,
      //Object speed
      2,

      //Neutral
      //Object amount:
      9,

      //Negative
      //Health:
      25,
      //Object damage:
      5,
      //Object amount:
      9,
      //Object speed
      2
    );

    evilMentorToEndBossScene = new EvilMentorToEndBossScene();

    endScreen = new Endscreen();

    setEverythingJustOnceForBossFight = false;

    setEverythingJustOnce = false;
  }
}
//Doesnt work to reset everything before Bossfight to make it more fluently
// function startOverForBossFight() {
//   if (setEverythingJustOnceForBossFight === true) {
//     //------------------------------"Global" functions, update it when adding a new mainscene
//     // usersHeartIcon = loadImage("00_Links/00_UI-Elements/heart.png");
//     // usersSpeedIcon = loadImage("00_Links/00_UI-Elements/speed.png");
//     // usersPositivityIcon = loadImage("00_Links/00_UI-Elements/positivity.png");
//     // usersShieldIcon = loadImage("00_Links/00_UI-Elements/shield.png");
//     // userHealth = 0;
//     // userSpeed = 0;
//     // userPositivity = 0;
//     // userShield = 0;

//     //----------------------

//     // bossHealth = 0;
//     // bossObjectDamage = 0;
//     // bossObjectAmount = 0;
//     // bossObjectSpeed = 0;

//     //----------------------

//     showUserlook = false;
//     userBody = loadImage("00_Links/00_UI-Elements/user.png");
//     weiterButtonToNextScene = new WeiterButton(0, 240);
//     userEffectGIF = loadImage("00_Links/00_UI-Elements/getItem.gif");
//     fadeInItem = 0;
//     countSceneButtonClicks = [];

//     //----------------------

//     // showUserScoreAndFightManual = false;
//     // statsImage = loadImage("00_Links/09_bossFight/stats.png");
//     // scorefadeIn = 0;
//     // weiterButtonToFight = new FightButton(0, 220, "LET'S FIGHT!", -60);
//     // fightManualText = new TextAnimationWithMultipleSentences(
//     //   -405,
//     //   -90,
//     //   19,
//     //   25,
//     //   1,
//     //   color(62, 19, 118),
//     //   "That escalated quickly...",
//     //   duperBold,
//     //   "Kämpfe gegen deinen Mentor,",
//     //   duper,
//     //   "indem du den toxischen Feuerbällen",
//     //   "ausweichst (Maus bewegen ▴ / ▾).",
//     //   "Wenn du positive Feuerbälle (grün)",
//     //   "einsammelst, erleidet der Mentor",
//     //   "Schaden („Angriff“). ",
//     //   "Besiege die Negativität!",
//     //   "",
//     //   ""
//     // );
//     // statsEffectGIF = loadImage("00_Links/00_UI-Elements/getItem.gif");

//     //----------------
//     // createJustOneBossFight = true;
//     // bossFightStarts = false;
//     // showEndscreen = false;
//     // restart = false;
//     //----------------

//     //----------------Define classes from all scenes and between scenes
//     // startScreen = new StartScreen();

//     introToSoccerScene = new IntroToSoccerScene();

//     soccerMainScene = new MainScene(
//       "01_soccerMainScene",

//       //Spellbutton x-Postion//
//       10,
//       200,

//       //Type of Aura, Textbox and exclamation mark (NPC problem screen)
//       //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
//       //Types TextBox:  |   textBoxSad  |  textBoxMad  |  usw.
//       //Types Exlamation mark:  |   excalmSad  |  exclamMad  |  usw.
//       "Aura_negative",
//       "textBoxMad",
//       "exclamMad",

//       //NPC problem speechbububle text
//       "Wie kann man denn so verpeilt sein?",
//       duperBold,
//       "Mein 12-jähriger Sohn hat gestern ",
//       duper,
//       "beim Fußballspiel den Elfmeter",
//       "INS FALSCHE TOR VERSENKT!",
//       "Wie kann das denn bitte bei nem",
//       "Elfmeter passieren? Ich bin am Ende.",
//       "Moment, warum erzähle ich ",
//       "das überhaupt?",
//       "",
//       "",

//       //Duration of answer Time
//       0.5,

//       //Choose answers:
//       //toxic
//       "KÖNNTE SCHLIMMER SEIN.",
//       //positive
//       "TRAINIERE DOCH MIT DEINEM SOHN.",
//       //neutral
//       "ICH HABS EILIG...",
//       //negative
//       "DAS IST EIN BISSCHEN PEINLICH.",

//       //Answers
//       //Toxic
//       "Ich verstehe dich...",
//       duperBold,
//       "aber sieh es mal so:",
//       duper,
//       "Wenigstens hat er überhaupt",
//       "ein Tor getroffen!",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Mach dir nichts draus,",
//       duperBold,
//       "dein Sohn ist doch erst 12!",
//       duper,
//       "Ein Vater-Sohn-Training wird",
//       "ihm bestimmt weiterhelfen.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //neutral
//       "Naja, ich muss jetzt",
//       duperBold,
//       "weiter zur Arbeit.",
//       duperBold,
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "Das ist schon",
//       duperBold,
//       "ein bisschen peinlich.",
//       duperBold,
//       "Zum Glück habe ich",
//       "keine Kinder.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //NPC Reaction
//       //toxic
//       "Hm, ja stimmt...",
//       duperBold,
//       "Am besten spreche ich garnicht",
//       duper,
//       "mit ihm darüber und freue mich",
//       "einfach über meinen Sohn.",
//       "Danke!",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Haha, das ist ne Idee!",
//       duperBold,
//       "Da wird sich nicht nur mein Sohn",
//       duper,
//       "drüber freuen, sondern auch",
//       "mein Gewicht.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //neutral
//       "Aber wer bist du nochmal?",
//       duperBold,
//       "Arbeiten wir nicht im",
//       duper,
//       "gleichen Abteil?",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "Ein bisschen beneide",
//       duperBold,
//       "ich dich schon...",
//       duperBold,
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //Parameter User
//       //Health:
//       12.5,
//       //Speed
//       13.5,
//       //Positivity
//       0,
//       //Shield
//       6.5,

//       // Parameter Boss
//       //Toxic
//       //Health:
//       20,
//       //Object damage:
//       11,
//       //Object amount:
//       5,
//       //Object speed
//       6,

//       //Neutral
//       //Object amount:
//       9,

//       //Negative
//       //Health:
//       25,
//       //Object damage:
//       5,
//       //Object amount:
//       5,
//       //Object speed
//       4
//     );

//     soccerToChefScene = new SoccerToChefScene();

//     chefMainScene = new MainScene(
//       "02_chefMainScene",

//       //Spellbutton x-Postion//
//       10,
//       200,

//       //Type of Aura, Textbox and exclamation mark (NPC problem screen)
//       //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
//       "Aura_sad",
//       "textBoxSad",
//       "exclamSad",

//       //NPC problem speechbububle text
//       "Ich dachte, dass Geld immer",
//       duperBold,
//       "alles wett macht...",
//       duperBold,
//       "Aber was soll ich damit, wenn",
//       "sich meine Frau immer mehr",
//       "von mir distanziert?",
//       "Moment, warum erzähle ich",
//       "Ihnen das überhaupt?",
//       "",
//       "",
//       "",

//       //Duration of answer Time
//       0.5,

//       //Choose answers:
//       //toxic
//       "VERSUCHEN SIE, POSITIV ZU BLEIBEN.",
//       //positive
//       "VERSUCHEN SIE, PRIORITÄTEN ZU SETZEN.",
//       //neutral
//       "UIUIUI MEINE BLASE...",
//       //negative
//       "DAS GEHT MICH EIGENTLICH NICHTS AN...",

//       //Answers
//       //Toxic
//       "Alles passiert aus einem Grund...",
//       duperBold,
//       "vielleicht sollten Sie einfach",
//       duper,
//       "lernen, das Beste auch in so",
//       "einer Situation zu sehen.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Ist Ihnen denn die Arbeit und",
//       duperBold,
//       "das Geld wichtiger, als Ihre Frau?",
//       duperBold,
//       "Arbeiten Sie daran, ein ",
//       "besserer Partner für sie",
//       "zu werden. Das wird einiges",
//       "Verändern, sie schaffen das!",
//       "",
//       "",
//       "",
//       "",
//       //neutral
//       "Ich war bis jetzt noch",
//       duperBold,
//       "nicht auf dem Klo. ",
//       duperBold,
//       "Entschuldigen Sie, es ist ",
//       "schon fast zu spät!",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "Sie haben sich doch",
//       duperBold,
//       "den Job ausgesucht,",
//       duperBold,
//       "kommen sie damit klar.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //NPC Reaction
//       //toxic
//       "Sehen Sie! Das habe ich mir auch",
//       duperBold,
//       "schon gesagt.",
//       duperBold,
//       "Soll sich meine Frau mal nicht",
//       "so anstellen. Und wer kann",
//       "sich schon eine Rolli gönnen?",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Das ist aber ehrlich von Ihnen... ",
//       duperBold,
//       "Zum Glück sind mir meine Sorgen ",
//       duper,
//       "einfach so rausgerutscht!",
//       "Mehr Zeit für meine Familie, ",
//       "das ist gut! Sagen Sie – wollen Sie",
//       "nicht vielleicht meine Stelle",
//       "übernehmen?",
//       "",
//       "",
//       "",
//       //neutral
//       "Äähh... ",
//       duperBold,
//       "was... ",
//       duperBold,
//       "ist das hier?!",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "Machen Sie sich an die Arbeit!",
//       duperBold,
//       "Vergessen Sie ganz schnell, was",
//       duper,
//       "ich Ihnen gerade erzählt habe!",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //Parameter User
//       //Health:
//       25,
//       //Speed
//       0,
//       //Positivity
//       10,
//       //Shield
//       6.5,

//       // Parameter Boss
//       //Toxic
//       //Health:
//       20,
//       //Object damage:
//       11,
//       //Object amount:
//       5,
//       //Object speed
//       2,

//       //Neutral
//       //Object amount:
//       9,

//       //Negative
//       //Health:
//       25,
//       //Object damage:
//       5,
//       //Object amount:
//       5,
//       //Object speed
//       2
//     );

//     chefToCoffeeScene = new ChefToCoffeeScene();

//     coffeeMainScene = new MainSceneSelf(
//       "03_coffeeMainScene",

//       //Spellbutton x-Postion//
//       0,
//       115,

//       //Type of Aura, ThoughtBubble and exclamation mark (NPC problem screen changes to "own problem thought screen")
//       //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
//       "Aura_sad",
//       "thoughtBubbleSad",
//       "exclamSad",

//       //NPC problem speechbububle text
//       "Och nööö...",
//       duperBold,
//       "Meine Hose ist total nass.",
//       duperBold,
//       "Shit! Ist nicht gleich das Meeting mit",
//       "dem Investor?! Jetzt muss ich mir wohl wieder",
//       "die lange Unterhose meiner Kollegin leihen.",
//       "Moment, befinde ich mich gerade",
//       "in meinen Gedanken?",
//       "",
//       "",
//       "",

//       //Duration of answer Time
//       0.5,

//       //Choose answers:
//       //toxic
//       "DEN GEDANKEN IGNORIEREN.",
//       //positive
//       "AUF DEN GEDANKEN EINGEHEN",
//       //neutral
//       "ICH HOLE MIR NEUEN KAFFEE.",
//       //negative
//       "ICH HABE HALT ZWEI LINKE HÄNDE.",

//       //Jumps directly to reaction (formulated answer is not needed)
//       //NPC Reaction => own Reaction
//       //toxic
//       "Den Gedanken",
//       duperBold,
//       "schiebe ich einfach unter meinen",
//       duper,
//       "Sorgenstapel. Und mit der langen",
//       "Unterhose sehe ich eigentlich",
//       "ganz sexy aus.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Ich bin wohl etwas nervös,",
//       duperBold,
//       "aber das ist normal. Ich versuche",
//       duper,
//       "jetzt klare Gedanken zu fassen und",
//       "schnell eine Alternative zur langen",
//       "Unterhose zu finden.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //neutral
//       "Kaffe leer... egal.",
//       duperBold,
//       "Hmmm... brauche...",
//       duper,
//       "neuen... Kaffee...",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "Wofür habe",
//       duperBold,
//       "ich denn bitte Zauberkräfte,",
//       duper,
//       "wenn ich noch nicht einmal richtig",
//       "trinken kann?! Ich habe etwas",
//       "schlimmeres als die lange",
//       "Unterhose verdient.",
//       "",
//       "",
//       "",
//       "",

//       //Parameter User
//       //Health:
//       0,
//       //Speed
//       9,
//       //Positivity
//       10,
//       //Shield
//       6.5,

//       // Parameter Boss
//       //Toxic
//       //Health:
//       20,
//       //Object damage:
//       11,
//       //Object amount:
//       5,
//       //Object speed
//       2,

//       //Neutral
//       //Object amount:
//       9,

//       //Negative
//       //Health:
//       25,
//       //Object damage:
//       5,
//       //Object amount:
//       5,
//       //Object speed
//       2
//     );

//     coffeeToInvestorScene = new CoffeeToInvestorScene();

//     investorMainScene = new MainScene(
//       "04_investorMainScene",

//       //Spellbutton x-y-Postion//
//       23,
//       190,

//       //Type of Aura, Textbox and exclamation mark (NPC problem screen)
//       //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
//       "Aura_sad",
//       "textBoxSad",
//       "exclamSad",

//       //NPC problem speechbububle text
//       "Meine Schildkröte muss heute",
//       duperBold,
//       "eingeschläfert werden...",
//       duperBold,
//       "Speedo war mein ein und alles! Mit",
//       "wem gucke ich denn jetzt Tierdokus?",
//       "In meiner Verfassung muss ich das",
//       "Meeting verschieben... Moment,",
//       " warum erzähle ich Ihnen das?",
//       "",
//       "",
//       "",

//       //Duration of answer Time
//       0.5,

//       //Choose answers:
//       //toxic
//       "ES IST, WIE ES IST.",
//       //positive
//       "LASSEN SIE ES RAUS...",
//       //neutral
//       "ÄHH... ICH HABE PLATZANGST.",
//       //negative
//       "FÄLLT DAS MEETING ALSO AUS?",

//       //Answers
//       //Toxic
//       "So ist das im Leben.",
//       duperBold,
//       "Konzentrieren Sie sich auf",
//       duper,
//       "das Positive. Sie haben einen",
//       "freien Tag! Nutzen Sie ihn.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Das tut mir leid...",
//       duperBold,
//       "lassen Sie es raus.",
//       duperBold,
//       "Wenn ich Ihnen helfen kann",
//       "oder Sie jemanden für einen",
//       "Doku-Abend brauchen,",
//       "sagen Sie bescheid.",
//       "",
//       "",
//       "",
//       "",
//       //neutral
//       "Ehrlich gesagt",
//       duperBold,
//       "bekomme ich in Aufzügen",
//       duper,
//       "schnell Platzangst...",
//       "ich nehme die Treppen.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "Jetzt machen Sie mal LANGSAM...",
//       duperBold,
//       "das Meeting fällt aus!?",
//       duper,
//       "Dann pack ich mal speedomäßig",
//       "meine Sachen. Ach...",
//       "und herzliches Beileid.",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //NPC Reaction
//       //toxic
//       "Meinen Sie? Ich fühle mich",
//       duperBold,
//       "so kraftlos...",
//       duperBold,
//       "dann lass ich das Meeting zwar",
//       "erstmal sausen, aber versuche",
//       "mich trotzdem an etwas Produktivem.",
//       "Das Leben muss ja weitergehen...",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Das tut so gut,",
//       duperBold,
//       "einfach mal trauern zu können...",
//       duper,
//       "Ich werde das Meeting erstmal",
//       "ausfallen lassen... Sie können mir",
//       "gerne Ihre Nummer geben,",
//       "es gibt bald eine neue Staffel von",
//       "„Unser Planet“ auf Netflix (schnief).",
//       "",
//       "",
//       "",
//       //neutral
//       "Warum sind sie dann überhaupt ",
//       duperBold,
//       "zum Aufzug gegangen?...",
//       duperBold,
//       "Naja, ich werde das Meeting",
//       "erstmal ausfallen lassen.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "l...langsam?",
//       duperBold,
//       "Speedo - w... was?",
//       duperBold,
//       "Ich werde das Meeting",
//       "erstmal ausfallen lassen...",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //Parameter User
//       //Health:
//       12.5,
//       //Speed
//       0,
//       //Positivity
//       10,
//       //Shield
//       19.5,

//       // Parameter Boss
//       //Toxic
//       //Health:
//       25,
//       //Object damage:
//       11,
//       //Object amount:
//       5,
//       //Object speed
//       2,

//       //Neutral
//       //Object amount:
//       9,

//       //Negative
//       //Health:
//       25,
//       //Object damage:
//       11,
//       //Object amount:
//       5,
//       //Object speed
//       2
//     );

//     investorToSocialScene = new InvestorToSocialScene();

//     socialMainScene = new MainSceneSelf(
//       "05_socialMainScene",

//       //Spellbutton x-Postion//
//       5,
//       73,

//       //Type of Aura, ThoughtBubble and exclamation mark (NPC problem screen changes to "own problem thought screen")
//       //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
//       "Aura_sad",
//       "thoughtBubbleSad",
//       "exclamSad",

//       //NPC problem speechbububle text
//       "Läuft bei meiner Kollegin…",
//       duperBold,
//       "Bei anderen scheint immer",
//       duper,
//       "alles super zu sein. Hier in der",
//       "Description steht auch noch",
//       "„positive vibes only“…",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //Duration of answer Time
//       0.5,

//       //Choose answers:
//       //toxic
//       "POSITIVES DENKEN = POSITIVER SELBSTWERT.",
//       //positive
//       "ALLE GEFÜHLE SIND GLEICH WICHTIG.",
//       //neutral
//       "WEITER SCROLLEN",
//       //negative
//       "WARUM IST MEIN LEBEN NICHT AUCH SO?",

//       //Jumps directly to reaction (formulated answer is not needed)
//       //NPC Reaction => own Reaction
//       //toxic
//       "Ich like das Bild jetzt auch.",
//       duperBold,
//       "Der Post hat mich motiviert!",
//       duper,
//       "Mein Lächeln werde ich",
//       "wieder aufsetzen.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Ich kann nicht nur",
//       duperBold,
//       "die positiven Gefühle fühlen",
//       duperBold,
//       "und die negativen ausblenden.",
//       "Alle Gefühle sind relevant.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //neutral
//       "Wieder ein Urlaubsbild.",
//       duperBold,
//       "Ich scrolle noch ein bisschen weiter.",
//       duper,
//       "Vielleicht gibts ja einen ",
//       "witzigen Katzenpost",
//       "von der h_da.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "Im Vergleich zu ihr",
//       duperBold,
//       "ist mein Leben scheiße...",
//       duperBold,
//       "Egal was ich mache, das Glück",
//       "ist einfach nicht auf meiner Seite.",
//       "Ich will mich auch so",
//       "fühlen wie sie...",
//       "",
//       "",
//       "",
//       "",

//       //Parameter User
//       //Health:
//       12.5,
//       //Speed
//       4.5,
//       //Positivity
//       10,
//       //Shield
//       6.5,

//       // Parameter Boss
//       //Toxic
//       //Health:
//       20,
//       //Object damage:
//       11,
//       //Object amount:
//       5,
//       //Object speed
//       2,

//       //Neutral
//       //Object amount:
//       9,

//       //Negative
//       //Health:
//       25,
//       //Object damage:
//       5,
//       //Object amount:
//       5,
//       //Object speed
//       2
//     );

//     socialToDimensionScene = new SocialToDimensionScene();

//     dimensionMainScene = new MainSceneDimension(
//       "06_dimensionMainScene",

//       //Spellbutton x-y-Postion//
//       0,
//       -50,

//       //Type of Aura, Textbox and exclamation mark (NPC problem screen)
//       //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
//       "Aura_sad",
//       "textBoxSad",
//       "exclamSad",

//       //NPC problem speechbububle text
//       "Wir arbeiten gerade an einem",
//       duperBold,
//       "Uni-Projekt und liegen voll zurück!",
//       duperBold,
//       "Selbst unsere Dozentin bekommt",
//       "jetzt Angst. Wie sollen wir dieses ",
//       "Semester überstehen?",
//       "Moment, irgendwie kommst",
//       "du uns bekannt vor...?",
//       "",
//       "",
//       "",

//       //Duration of answer Time
//       0.5,

//       //Choose answers:
//       //toxic
//       "SCHEITERN IST KEINE OPTION!",
//       //positive
//       "SCHEITERN GEHÖRT DAZU.",
//       //neutral
//       "SCHEITERN IST EIN THEMA FÜR SICH.",
//       //negative
//       "WIEDREHOLT DOCH DAS SEMESTER.",

//       //Answers
//       //Toxic
//       "Ihr seid nicht gescheitert.",
//       duperBold,
//       "Arbeitet weiter und holt",
//       duper,
//       "die Zeit wieder auf!",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Scheitern ist nichts Schlechtes,",
//       duperBold,
//       "wenn man daraus lernt.",
//       duperBold,
//       "Guckt, was ihr ändern müsst",
//       "und haut dann richtig rein!",
//       "Alleine für die Idee würde",
//       "ich euch eine 1.0 geben.",
//       "",
//       "",
//       "",
//       "",
//       //neutral
//       "... aber die Internetverbindung",
//       duperBold,
//       "war so schlecht,",
//       duperBold,
//       "ich habe leider nichts",
//       "verstanden.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "Wenn man scheitert,",
//       duperBold,
//       "sollte man seine Bemühungen",
//       duper,
//       "aufgeben und sich nicht",
//       "weiter sinnlos anstrengen.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //NPC Reaction
//       //toxic
//       "Okay, wir schaffen das",
//       duperBold,
//       "irgendwie schon, solange wir",
//       duper,
//       "einfach weitermachen!",
//       "Das Semester schaffen",
//       "wir easy peasy. Piew Piew!",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //positive
//       "Guter Punkt – wir strukturieren",
//       duperBold,
//       "uns nochmal neu und gucken,",
//       duperBold,
//       "was wir anders machen müssen.",
//       "Viel zu lernen wir noch haben!",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //neutral
//       "Was hast du gesagt?",
//       duperBold,
//       "Du warst gemutet.",
//       duper,
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //negative
//       "Jo.",
//       duperBold,
//       "Wir lassen uns",
//       duper,
//       "einfach etwas gehen,",
//       "BAföG regelt.",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //Parameter User
//       //Health:
//       0,
//       //Speed
//       4.5,
//       //Positivity
//       30,
//       //Shield
//       0,

//       // Parameter Boss
//       //Toxic
//       //Health:
//       20,
//       //Object damage:
//       11,
//       //Object amount:
//       9,
//       //Object speed
//       2,

//       //Neutral
//       //Object amount:
//       9,

//       //Negative
//       //Health:
//       25,
//       //Object damage:
//       11,
//       //Object amount:
//       5,
//       //Object speed
//       2
//     );

//     dimensionToDestroyedScene = new DimensionToDestroyedScene();

//     destroyedMainScene = new MainSceneSelfDebugDestroy(
//       "07_destroyedMainScene",

//       //Spellbutton x-y-Postion//
//       18,
//       0,

//       //Type of Aura, ThoughtBubble and exclamation mark (NPC problem screen changes to "own problem thought screen")
//       //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
//       "Aura_shock",
//       "thoughtBubbleShocked",
//       "exclamShocked",

//       //NPC problem speechbububle text
//       "Das kann doch nicht sein!",
//       duperBold,
//       "Gestern war alles normal...",
//       duperBold,
//       "und jetzt nimmt die Story völlig absurde",
//       "Ausmaße an! Was hat das für einen Sinn?",
//       "Vor allem für mich als User, wenn alle",
//       "Entscheidungen umsonst waren?",
//       "",
//       "",
//       "",
//       "",

//       //Duration of answer Time
//       0.5,

//       //Choose answers:
//       //toxic
//       "NICHTS WAR UMSONST.",
//       //positive
//       "JETZT MUSS ICH ERSTMAL KLARKOMMEN.",
//       //neutral
//       "HM, OKAY.",
//       //negative
//       "ICH HAB IMMERHIN DIE RÜSTUNG.",

//       //Jumps directly to reaction (formulated answer is not needed)
//       //NPC Reaction => own Reaction
//       //toxic
//       "...nichts war umsonst!",
//       duperBold,
//       "Good vibes only... mehr Lächeln...",
//       duper,
//       "pOsITiv dENkEn!",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //positive
//       "Noch nie hat sich",
//       duperBold,
//       "etwas so sinnlos angefühlt.",
//       duperBold,
//       "Das ist gerade echt hart. Wenn ich mich",
//       "zusammenreiße, bekomme ich mich",
//       "wieder in den Griff.",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //neutral
//       "...absurde Story?",
//       duperBold,
//       "Welche Story?...",
//       duper,
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       "",
//       //negative
//       "Wie es den Menschen in der",
//       duperBold,
//       "Simulation ergangen ist, ist mir egal.",
//       duperBold,
//       "Hauptsache ich habe Rüstungsteile",
//       "bekommen und gewinne",
//       "das Game!",
//       "",
//       "",
//       "",
//       "",
//       "",

//       //Parameter User
//       //Health:
//       25,
//       //Speed
//       0,
//       //Positivity
//       0,
//       //Shield
//       6.5,

//       // Parameter Boss
//       //Toxic
//       //Health:
//       20,
//       //Object damage:
//       11,
//       //Object amount:
//       5,
//       //Object speed
//       2,

//       //Neutral
//       //Object amount:
//       9,

//       //Negative
//       //Health:
//       25,
//       //Object damage:
//       5,
//       //Object amount:
//       5,
//       //Object speed
//       2
//     );

//     destroyedToEvilMentorScene = new DestroyedToEvilMentorScene();

//     evilMentorMainScene = new EvilMentorMainScene(
//       "08_evilMentorMainScene",

//       //Spellbutton x-y-Postion//
//       0,
//       190,

//       //Type of Aura, Textbox and exclamation mark (NPC problem screen)
//       //Types:  |  Aura_sad  |  Aura_negative (angry)  |   Aura_shock  |  Aura_black
//       "Aura_negative",
//       "textBoxMad",
//       "exclamMad",

//       //NPC problem speechbububle text
//       "Mit Positivität kommt man doch",
//       duperBold,
//       "KEIN BISSCHEN WEITER IM LEBEN!",
//       duperBold,
//       "Diese naiven Menschen...",
//       "ich kann Sie nicht ausstehen!",
//       "Meine Geduld hat jetzt ein Ende.",
//       "Die ganzen Entscheidungen",
//       "MACHEN MICH IRRE!",
//       "",
//       "",
//       "",

//       //Duration of answer Time
//       0.5,

//       //Parameter User
//       //Health:
//       12.5,
//       //Speed
//       4.5,
//       //Positivity
//       10,
//       //Shield
//       0,

//       // Parameter Boss
//       //Toxic
//       //Health:
//       20,
//       //Object damage:
//       11,
//       //Object amount:
//       9,
//       //Object speed
//       2,

//       //Neutral
//       //Object amount:
//       9,

//       //Negative
//       //Health:
//       25,
//       //Object damage:
//       5,
//       //Object amount:
//       9,
//       //Object speed
//       2
//     );

//     evilMentorToEndBossScene = new EvilMentorToEndBossScene();

//     //To still have the looks
//     soccerMainScene.state = soccerState;
//     investorMainScene.state = investorState;
//     coffeeMainScene.state = coffeeState;
//     chefMainScene.state = chefState;
//     destroyedMainScene.state = destroyedState;
//     dimensionMainScene.state = dimensionState;
//     socialMainScene.state = socialState;
//     evilMentorMainScene.state = evilMentorState;

//     bossHealth = bossHealthSave;
//     bossObjectDamage = bossObjectDamageSave;
//     bossObjectAmount = bossObjectAmountSave;
//     bossObjectSpeed = bossObjectSpeedSave;

//     // endScreen = new Endscreen();

//     setEverythingJustOnceForBossFight = false;
//     // setEverythingJustOnce = false;
//   }
// }

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

function userStats() {
  //entspr. Szenen pro Main- & BetweenScenes aktualisieren!!!
  if (
    //StartScreen
    startScreen.startScreen === false &&
    startScreen.startIntroductionBool === false &&
    //MainScenes
    soccerMainScene.showPanoramaScreenBool === false &&
    //
    chefMainScene.showPanoramaScreenBool === false &&
    //
    coffeeMainScene.showPanoramaScreenBool === false &&
    //
    investorMainScene.showPanoramaScreenBool === false &&
    //
    socialMainScene.showPanoramaScreenBool === false &&
    //
    dimensionMainScene.showPanoramaScreenBool === false &&
    //
    destroyedMainScene.showPanoramaScreenBool === false &&
    //
    evilMentorMainScene.showPanoramaScreenBool === false &&
    //
    //betweenScenes

    //
    introToSoccerScene.firstScreenBool === false &&
    introToSoccerScene.secondScreenBool === false &&
    introToSoccerScene.thirdScreenBool === false &&
    introToSoccerScene.fourthScreenBool === false &&
    introToSoccerScene.fifthScreenBool === false &&
    introToSoccerScene.sixthScreenBool === false &&
    introToSoccerScene.seventhScreenBool === false &&
    introToSoccerScene.eighthScreenBool === false &&
    //
    soccerToChefScene.firstScreenBool === false &&
    soccerToChefScene.secondScreenBool === false &&
    //
    chefToCoffeeScene.firstScreenBool === false &&
    chefToCoffeeScene.secondScreenBool === false &&
    chefToCoffeeScene.thirdScreenBool === false &&
    //
    coffeeToInvestorScene.firstScreenBool === false &&
    coffeeToInvestorScene.secondScreenBool === false &&
    //
    investorToSocialScene.firstScreenBool === false &&
    investorToSocialScene.secondScreenBool === false &&
    investorToSocialScene.thirdScreenBool === false &&
    //
    socialToDimensionScene.firstScreenBool === false &&
    socialToDimensionScene.secondScreenBool === false &&
    socialToDimensionScene.thirdScreenBool === false &&
    socialToDimensionScene.fourthScreenBool === false &&
    socialToDimensionScene.fifthScreenBool === false &&
    socialToDimensionScene.sixthScreenBool === false &&
    //
    dimensionToDestroyedScene.firstScreenBool === false &&
    dimensionToDestroyedScene.secondScreenBool === false &&
    dimensionToDestroyedScene.thirdScreenBool === false &&
    dimensionToDestroyedScene.fourthScreenBool === false &&
    dimensionToDestroyedScene.fifthScreenBool === false &&
    dimensionToDestroyedScene.sixthScreenBool === false &&
    //
    destroyedToEvilMentorScene.firstScreenBool === false &&
    destroyedToEvilMentorScene.secondScreenBool === false &&
    destroyedToEvilMentorScene.thirdScreenBool === false &&
    destroyedToEvilMentorScene.fourthScreenBool === false &&
    //
    evilMentorToEndBossScene.firstScreenBool === false &&
    evilMentorToEndBossScene.secondScreenBool === false &&
    //
    showUserScoreAndFightManual === false &&
    //
    //bossFight
    bossFightStarts === false &&
    //
    //Endscreen
    showEndscreen === false
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
      coffeeMainScene.userHealth +
      investorMainScene.userHealth +
      socialMainScene.userHealth +
      dimensionMainScene.userHealth +
      destroyedMainScene.userHealth +
      evilMentorMainScene.userHealth;

    noStroke();
    fill(255, 165, 255);
    rect(-500, -280, 10 + userHealth * 1.6, 10, 10);

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
      coffeeMainScene.userSpeed +
      investorMainScene.userSpeed +
      socialMainScene.userSpeed +
      dimensionMainScene.userSpeed +
      destroyedMainScene.userSpeed +
      evilMentorMainScene.userSpeed;

    fill(33, 241, 207);
    rect(-500, -253, 10 + userSpeed * 4.45, 10, 10);

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
      coffeeMainScene.userPositivity +
      investorMainScene.userPositivity +
      socialMainScene.userPositivity +
      dimensionMainScene.userPositivity +
      destroyedMainScene.userPositivity +
      evilMentorMainScene.userPositivity;

    fill(148, 224, 255);
    rect(-500, -226, 10 + userPositivity * 2, 10, 10);

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
      coffeeMainScene.userShield +
      investorMainScene.userShield +
      socialMainScene.userShield +
      dimensionMainScene.userShield +
      destroyedMainScene.userShield +
      evilMentorMainScene.userShield;

    fill(130, 94, 196);
    rect(-500, -199, 10 + userShield * 3, 10, 10);

    // //Line bottom
    // strokeWeight(2);
    // stroke(220, 220, 220);
    // line(-525, -175, -300, -175);
    // noStroke();
    pop();
  }
}

function bossStats() {
  //entspr. Szenen pro Mainszene Aktualisieren!!!
  bossHealth =
    //Mainscenes
    soccerMainScene.bossHealth +
    chefMainScene.bossHealth +
    coffeeMainScene.bossHealth +
    investorMainScene.bossHealth +
    socialMainScene.bossHealth +
    dimensionMainScene.bossHealth +
    destroyedMainScene.bossHealth +
    evilMentorMainScene.bossHealth;

  //entspr. Szenen pro Mainszene Aktualisieren!!!
  bossObjectDamage =
    //Mainscenes
    soccerMainScene.bossObjectDamage +
    chefMainScene.bossObjectDamage +
    coffeeMainScene.bossObjectDamage +
    investorMainScene.bossObjectDamage +
    socialMainScene.bossObjectDamage +
    dimensionMainScene.bossObjectDamage +
    destroyedMainScene.bossObjectDamage +
    evilMentorMainScene.bossObjectDamage;

  //entspr. Szenen pro Mainszene Aktualisieren!!!
  bossObjectAmount =
    //Mainscenes
    soccerMainScene.bossObjectAmount +
    chefMainScene.bossObjectAmount +
    coffeeMainScene.bossObjectAmount +
    investorMainScene.bossObjectAmount +
    socialMainScene.bossObjectAmount +
    dimensionMainScene.bossObjectAmount +
    destroyedMainScene.bossObjectAmount +
    evilMentorMainScene.bossObjectAmount;

  //entspr. Szenen pro Mainszene Aktualisieren!!!
  bossObjectSpeed =
    // Mainscenes
    soccerMainScene.bossObjectSpeed +
    chefMainScene.bossObjectSpeed +
    coffeeMainScene.bossObjectSpeed +
    investorMainScene.bossObjectSpeed +
    socialMainScene.bossObjectSpeed +
    dimensionMainScene.bossObjectSpeed +
    destroyedMainScene.bossObjectSpeed +
    evilMentorMainScene.bossObjectSpeed;
}

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
    textFont(duperBold);
    fill(61, 18, 117, fadeInItem);
    textSize(70);
    text("DEIN", -310, 0);
    text("LOOK", 150, 0);
    image(
      userEffectGIF,
      -10,
      0,
      userEffectGIF.width / 1.4,
      userEffectGIF.height / 1.4
    );

    push();
    scale(1.4);
    translate(3, 10);
    //User
    image(userBody, -10, -60, userBody.width / 1, userBody.height / 1);

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
    //-----InvestorMainScene(SHIELD)
    if (investorMainScene.state === "toxic") {
      investorMainScene.returnToxicLook();
    }
    if (investorMainScene.state === "positive") {
      investorMainScene.returnPositiveLook();
    }
    if (investorMainScene.state === "negative") {
      investorMainScene.returnNegativeLook();
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
    //-----DestroyedMainScene (Helmet)
    if (destroyedMainScene.state === "toxic") {
      destroyedMainScene.returnToxicLook();
    }
    if (destroyedMainScene.state === "positive") {
      destroyedMainScene.returnPositiveLook();
    }
    if (destroyedMainScene.state === "negative") {
      destroyedMainScene.returnNegativeLook();
    }
    //-----DimensionMainScene (WEAPON)
    if (dimensionMainScene.state === "toxic") {
      dimensionMainScene.returnToxicLook();
    }
    if (dimensionMainScene.state === "positive") {
      dimensionMainScene.returnPositiveLook();
    }
    if (dimensionMainScene.state === "negative") {
      dimensionMainScene.returnNegativeLook();
    }

    //-----socialMainScene (GLOVES)
    if (socialMainScene.state === "toxic") {
      socialMainScene.returnToxicLook();
    }
    if (socialMainScene.state === "positive") {
      socialMainScene.returnPositiveLook();
    }
    if (socialMainScene.state === "negative") {
      socialMainScene.returnNegativeLook();
    }

    //-----evilMentorMainScene (Aura)
    if (evilMentorMainScene.state === "toxic") {
      evilMentorMainScene.returnToxicLook();
    }
    if (evilMentorMainScene.state === "positive") {
      evilMentorMainScene.returnPositiveLook();
    }
    if (evilMentorMainScene.state === "negative") {
      evilMentorMainScene.returnNegativeLook();
    }
    pop();
  } else {
    //fades in again
    fadeInItem = 0;
    weiterButtonToNextScene.fadeInVariable = 0;
  }
}

function saveStatesForBossFight() {
  soccerState = soccerMainScene.state;
  investorState = investorMainScene.state;
  coffeeState = coffeeMainScene.state;
  chefState = chefMainScene.state;
  destroyedState = destroyedMainScene.state;
  dimensionState = dimensionMainScene.state;
  socialState = socialMainScene.state;
  evilMentorState = evilMentorMainScene.state;

  bossHealthSave = bossHealth;
  bossObjectDamageSave = bossObjectDamage;
  bossObjectAmountSave = bossObjectAmount;
  bossObjectSpeedSave = bossObjectSpeed;
}

function userLookForBossFight() {
  //User
  image(userBody, -10, -60, userBody.width / 1, userBody.height / 1);

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
  //-----InvestorMainScene(SHIELD)
  if (investorMainScene.state === "toxic") {
    investorMainScene.returnToxicLook();
  }
  if (investorMainScene.state === "positive") {
    investorMainScene.returnPositiveLook();
  }
  if (investorMainScene.state === "negative") {
    investorMainScene.returnNegativeLook();
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

  //-----DestroyedMainScene (Helmet)
  if (destroyedMainScene.state === "toxic") {
    destroyedMainScene.returnToxicLook();
  }
  if (destroyedMainScene.state === "positive") {
    destroyedMainScene.returnPositiveLook();
  }
  if (destroyedMainScene.state === "negative") {
    destroyedMainScene.returnNegativeLook();
  }

  //-----DimensionMainScene (WEAPON)
  if (dimensionMainScene.state === "toxic") {
    dimensionMainScene.returnToxicLook();
  }
  if (dimensionMainScene.state === "positive") {
    dimensionMainScene.returnPositiveLook();
  }
  if (dimensionMainScene.state === "negative") {
    dimensionMainScene.returnNegativeLook();
  }

  //-----socialMainScene (GLOVES)
  if (socialMainScene.state === "toxic") {
    socialMainScene.returnToxicLook();
  }
  if (socialMainScene.state === "positive") {
    socialMainScene.returnPositiveLook();
  }
  if (socialMainScene.state === "negative") {
    socialMainScene.returnNegativeLook();
  }

  //-----evilMentorMainScene (Aura)
  if (evilMentorMainScene.state === "toxic") {
    evilMentorMainScene.returnToxicLook();
  }
  if (evilMentorMainScene.state === "positive") {
    evilMentorMainScene.returnPositiveLook();
  }
  if (evilMentorMainScene.state === "negative") {
    evilMentorMainScene.returnNegativeLook();
  }
}

function userScoreAndFightManual() {
  if (showUserScoreAndFightManual === true) {
    //Image(Lines)
    scorefadeIn += 10;
    if (scorefadeIn > 255) {
      scorefadeIn = 255;
    }
    tint(255, scorefadeIn);
    image(statsImage, 0, 0);

    //Button
    weiterButtonToFight.fadeIn();
    weiterButtonToFight.displayActiveOrSleeping();
    weiterButtonToFight.displayButtonSentence();

    //Text
    fightManualText.first.textColor = color(62, 19, 118, scorefadeIn);
    fightManualText.second.textColor = color(62, 19, 118, scorefadeIn);
    fightManualText.sentences();

    tint(255, scorefadeIn);
    image(
      statsEffectGIF,
      0,
      -40,
      statsEffectGIF.width / 1.5,
      statsEffectGIF.height / 1.5
    );

    //Userlook
    push();
    translate(0, 10);
    scale(1.4);
    userLookForBossFight();
    pop();

    //Heart
    image(
      usersHeartIcon,
      240,
      -150,
      usersHeartIcon.width / 5,
      usersHeartIcon.height / 5
    );
    noStroke();
    fill(255, 165, 255, scorefadeIn);
    rect(255, -154, 10 + userHealth * 1.6, 10, 10);
    textFont(duperBold);
    textSize(21);
    text("EXTRA LEBEN", 255, -165);
    textFont(duper);
    textSize(18);
    text(userHealth + "/100", 255, -124);

    //Speed
    image(
      usersSpeedIcon,
      240,
      -59,
      usersSpeedIcon.width / 5,
      usersSpeedIcon.height / 5
    );

    fill(33, 241, 207, scorefadeIn);
    rect(255, -63, 10 + userSpeed * 4.45, 10, 10);
    textFont(duperBold);
    textSize(21);
    text("EXTRA SPEED", 255, -74);
    textFont(duper);
    textSize(18);
    text(userSpeed + "/36", 255, -33);

    //Positivity
    image(
      usersPositivityIcon,
      240,
      29,
      usersPositivityIcon.width / 5,
      usersPositivityIcon.height / 5
    );
    fill(148, 224, 255, scorefadeIn);
    rect(255, 25, 10 + userPositivity * 2, 10, 10);
    textFont(duperBold);
    textSize(21);
    text("EXTRA ANGRIFFSSCHADEN", 255, 14);
    textFont(duper);
    textSize(18);
    text(userPositivity + "/80", 255, 55);

    //Shield
    image(
      usersShieldIcon,
      240,
      119,
      usersShieldIcon.width / 5,
      usersShieldIcon.height / 5
    );
    fill(130, 94, 196, scorefadeIn);
    rect(255, 115, 10 + userShield * 3, 10, 10);
    textFont(duperBold);
    textSize(21);
    text("EXTRA SCHILD", 255, 105);
    textFont(duper);
    textSize(18);
    text(userShield + "/52", 255, 146);
  }
}

//
//
//

//

//All events die p5 uses, have to be anhängt ans window
window.mousePressed = mousePressed;
function mousePressed() {
  //JUST FOR TESTING (BEGIN BUTTON)
  // if (startTestButton.click()) {
  //   soccerMainScene.showPanoramaScreen();
  //   showStartTestButton = false;
  // }

  //-----------------------------------------------------------------------Start Screeen
  if (startScreen.startButtonClick()) {
    startScreen.startIntroductionBool = true;
    // introToSoccerScene.showFirstScreen();
  } else if (
    startScreen.introductionText.everySentenceHasEnded === false &&
    startScreen.startIntroductionBool === true
  ) {
    startScreen.introductionText.displayAllTextAtOnce();
  }
  //-----------------------------------------------------------------------introToSoccerScene (Between-Scene)
  else if (introToSoccerScene.weiterButtonSecondScreenClick()) {
    if (introToSoccerScene.firstScreenText.sentence.typingEnded === false) {
      introToSoccerScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      introToSoccerScene.showSecondScreen();
    }
  } else if (introToSoccerScene.weiterButtonThirdScreenClick()) {
    if (introToSoccerScene.secondScreenText.sentence.typingEnded === false) {
      introToSoccerScene.secondScreenText.sentence.displayAllTextAtOnce();
    } else {
      introToSoccerScene.showThirdScreen();
    }
  } else if (introToSoccerScene.weiterButtonFourthScreenClick()) {
    if (introToSoccerScene.thirdScreenText.sentence.typingEnded === false) {
      introToSoccerScene.thirdScreenText.sentence.displayAllTextAtOnce();
    } else {
      introToSoccerScene.showFourthScreen();
    }
  } else if (introToSoccerScene.weiterButtonFifthScreenClick()) {
    if (introToSoccerScene.fourthScreenText.sentence.typingEnded === false) {
      introToSoccerScene.fourthScreenText.sentence.displayAllTextAtOnce();
    } else {
      introToSoccerScene.showFifthScreen();
    }
  } else if (introToSoccerScene.weiterButtonSixthScreenClick()) {
    if (introToSoccerScene.fifthScreenText.sentence.typingEnded === false) {
      introToSoccerScene.fifthScreenText.sentence.displayAllTextAtOnce();
    } else {
      introToSoccerScene.showSixthScreen();
    }
    //
  } else if (introToSoccerScene.weiterButtonSeventhScreenClick()) {
    if (introToSoccerScene.sixthScreenText.sentence.typingEnded === false) {
      introToSoccerScene.sixthScreenText.sentence.displayAllTextAtOnce();
    } else {
      introToSoccerScene.showSeventhScreen();
    }
  } else if (introToSoccerScene.weiterButtonEighthScreenClick()) {
    if (introToSoccerScene.seventhScreenText.sentence.typingEnded === false) {
      introToSoccerScene.seventhScreenText.sentence.displayAllTextAtOnce();
    } else {
      introToSoccerScene.showEighthScreen();
    }
  } else if (
    introToSoccerScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (introToSoccerScene.eighthScreenText.sentence.typingEnded === false) {
      introToSoccerScene.eighthScreenText.sentence.displayAllTextAtOnce();
    } else {
      introToSoccerScene.showNextPanoramaScreenFromMainScene();
      soccerMainScene.showPanoramaScreen();
    }
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
    showUserlook === true &&
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 0
  ) {
    //CALL HERE THE NEXT BETWEEN-SCENE!
    soccerToChefScene.showFirstScreen();

    countSceneButtonClicks.push("Clicked");
    showUserlook = false;
  }

  //-----------------------------------------------------------------------SoccerToChefScene (Between-Scene)
  else if (soccerToChefScene.weiterButtonSecondScreenClick()) {
    if (soccerToChefScene.firstScreenText.sentence.typingEnded === false) {
      soccerToChefScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      soccerToChefScene.showSecondScreen();
    }
  } else if (
    soccerToChefScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (soccerToChefScene.secondScreenText.sentence.typingEnded === false) {
      soccerToChefScene.secondScreenText.sentence.displayAllTextAtOnce();
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
    showUserlook === true &&
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 1
  ) {
    //CALL HERE THE NEXT BETWEEN-SCENE!
    chefToCoffeeScene.showFirstScreen();
    countSceneButtonClicks.push("Clicked");
    showUserlook = false;
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
    showUserlook === true &&
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 2
  ) {
    showUserlook = false;
    //CALL HERE THE NEXT BETWEEN-SCENE!
    coffeeToInvestorScene.showFirstScreen();
    countSceneButtonClicks.push("Clicked");
  }

  //-----------------------------------------------------------------------coffeeToInvestorScene (Between-Scene)
  else if (coffeeToInvestorScene.weiterButtonSecondScreenClick()) {
    if (coffeeToInvestorScene.firstScreenText.sentence.typingEnded === false) {
      coffeeToInvestorScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      coffeeToInvestorScene.showSecondScreen();
    }
  } else if (
    coffeeToInvestorScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (coffeeToInvestorScene.secondScreenText.sentence.typingEnded === false) {
      coffeeToInvestorScene.secondScreenText.sentence.displayAllTextAtOnce();
    } else {
      coffeeToInvestorScene.showNextPanoramaScreenFromMainScene();
      investorMainScene.showPanoramaScreen();
    }
  }

  //-----------------------------------------------------------------------INVESTOR MAINSCENE
  else if (investorMainScene.spellButtonClick()) {
    investorMainScene.showNPCProblemScreen();
  } else if (investorMainScene.weiterButtonChooseAnswerScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      investorMainScene.npcProblemSpeechbubble.speech.tenth.typingEnded ===
      false
    ) {
      investorMainScene.npcProblemSpeechbubble.speech.displayAllTextAtOnce();
    } else {
      investorMainScene.showChooseAnswerScreen();
    }
  } else if (investorMainScene.chooseAnswerScreenClick()) {
    investorMainScene.showAnswerScreen();
  } else if (investorMainScene.weiterButtonReactionScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      investorMainScene.toxicTextButton.state === "choosed" &&
      investorMainScene.toxicAnswer.speech.tenth.typingEnded === false
    ) {
      investorMainScene.toxicAnswer.speech.displayAllTextAtOnce();
    } else if (
      investorMainScene.positiveTextButton.state === "choosed" &&
      investorMainScene.positiveAnswer.speech.tenth.typingEnded === false
    ) {
      investorMainScene.positiveAnswer.speech.displayAllTextAtOnce();
    } else if (
      investorMainScene.neutralTextButton.state === "choosed" &&
      investorMainScene.neutralAnswer.speech.tenth.typingEnded === false
    ) {
      investorMainScene.neutralAnswer.speech.displayAllTextAtOnce();
    } else if (
      investorMainScene.negativeTextButton.state === "choosed" &&
      investorMainScene.negativeAnswer.speech.tenth.typingEnded === false
    ) {
      investorMainScene.negativeAnswer.speech.displayAllTextAtOnce();
    } else {
      investorMainScene.showReactionScreen();
    }

    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
  } else if (investorMainScene.weiterButtonItemScreenClick()) {
    //Had to define every state very detailed because of the "neutral"-button,
    //which has another condition than the others
    if (
      investorMainScene.toxicTextButton.state === "choosed" &&
      investorMainScene.toxicReaction.speech.tenth.typingEnded === false
    ) {
      investorMainScene.toxicReaction.speech.displayAllTextAtOnce();
    } else if (
      investorMainScene.toxicTextButton.state === "choosed" &&
      investorMainScene.toxicReaction.speech.tenth.typingEnded === true
    ) {
      investorMainScene.showItemScreen();
    }

    if (
      investorMainScene.positiveTextButton.state === "choosed" &&
      investorMainScene.positiveReaction.speech.tenth.typingEnded === false
    ) {
      investorMainScene.positiveReaction.speech.displayAllTextAtOnce();
    } else if (
      investorMainScene.positiveTextButton.state === "choosed" &&
      investorMainScene.positiveReaction.speech.tenth.typingEnded === true
    ) {
      investorMainScene.showItemScreen();
    }

    if (
      investorMainScene.negativeTextButton.state === "choosed" &&
      investorMainScene.negativeReaction.speech.tenth.typingEnded === false
    ) {
      investorMainScene.negativeReaction.speech.displayAllTextAtOnce();
    } else if (
      investorMainScene.negativeTextButton.state === "choosed" &&
      investorMainScene.negativeReaction.speech.tenth.typingEnded === true
    ) {
      investorMainScene.showItemScreen();
    }

    if (
      investorMainScene.neutralTextButton.state === "choosed" &&
      investorMainScene.neutralReaction.speech.tenth.typingEnded === false
    ) {
      investorMainScene.neutralReaction.speech.displayAllTextAtOnce();
    } else if (
      investorMainScene.neutralTextButton.state === "choosed" &&
      investorMainScene.neutralReaction.speech.tenth.typingEnded === true
    ) {
      investorMainScene.showReactionScreenBool = false;
      //CALL HERE THE NEXT BETWEEN-SCENE!
      investorToSocialScene.showFirstScreen();
      //Jumps directly to next scene!
      countSceneButtonClicks.push("Clicked");
    }
  } else if (investorMainScene.weiterButtonYourLookScreenClick()) {
    investorMainScene.showItemScreenBool = false;
    showUserlook = true;
    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
    //countSceneButtonClicks: Same Weiterbutton, different following scenes. The Array helps to define which scene is next
  } else if (
    showUserlook === true &&
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 3
  ) {
    showUserlook = false;
    //CALL HERE THE NEXT BETWEEN-SCENE!
    investorToSocialScene.showFirstScreen();
    countSceneButtonClicks.push("Clicked");
  }
  //-----------------------------------------------------------------------investorToSocialScene (Between-Scene)
  else if (investorToSocialScene.weiterButtonSecondScreenClick()) {
    if (investorToSocialScene.firstScreenText.sentence.typingEnded === false) {
      investorToSocialScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      investorToSocialScene.showSecondScreen();
    }
  } else if (investorToSocialScene.weiterButtonThirdScreenClick()) {
    if (investorToSocialScene.secondScreenText.sentence.typingEnded === false) {
      investorToSocialScene.secondScreenText.sentence.displayAllTextAtOnce();
    } else {
      investorToSocialScene.showThirdScreen();
    }
  } else if (
    investorToSocialScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (investorToSocialScene.thirdScreenText.sentence.typingEnded === false) {
      investorToSocialScene.thirdScreenText.sentence.displayAllTextAtOnce();
    } else {
      investorToSocialScene.showNextPanoramaScreenFromMainScene();
      socialMainScene.showPanoramaScreen();
    }
  }
  //-----------------------------------------------------------------------SOCIAL MAINSCENE
  else if (socialMainScene.spellButtonClick()) {
    socialMainScene.showNPCProblemScreen();
  } else if (socialMainScene.weiterButtonChooseAnswerScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      socialMainScene.npcProblemSpeechbubble.speech.tenth.typingEnded === false
    ) {
      socialMainScene.npcProblemSpeechbubble.speech.displayAllTextAtOnce();
    } else {
      socialMainScene.showChooseAnswerScreen();
    }
  } else if (socialMainScene.chooseAnswerScreenClick()) {
    socialMainScene.showReactionScreen();
  }

  //Has to be an "Else If" condition, because button is on the same place than before,
  //it would make 2 clicks directly after another an jump directly to the next action
  else if (socialMainScene.weiterButtonItemScreenClick()) {
    //Had to define every state very detailed because of the "neutral"-button,
    //which has another condition than the others
    if (
      socialMainScene.toxicTextButton.state === "choosed" &&
      socialMainScene.toxicReaction.speech.tenth.typingEnded === false
    ) {
      socialMainScene.toxicReaction.speech.displayAllTextAtOnce();
    } else if (
      socialMainScene.toxicTextButton.state === "choosed" &&
      socialMainScene.toxicReaction.speech.tenth.typingEnded === true
    ) {
      socialMainScene.showItemScreen();
    }

    if (
      socialMainScene.positiveTextButton.state === "choosed" &&
      socialMainScene.positiveReaction.speech.tenth.typingEnded === false
    ) {
      socialMainScene.positiveReaction.speech.displayAllTextAtOnce();
    } else if (
      socialMainScene.positiveTextButton.state === "choosed" &&
      socialMainScene.positiveReaction.speech.tenth.typingEnded === true
    ) {
      socialMainScene.showItemScreen();
    }

    if (
      socialMainScene.negativeTextButton.state === "choosed" &&
      socialMainScene.negativeReaction.speech.tenth.typingEnded === false
    ) {
      socialMainScene.negativeReaction.speech.displayAllTextAtOnce();
    } else if (
      socialMainScene.negativeTextButton.state === "choosed" &&
      socialMainScene.negativeReaction.speech.tenth.typingEnded === true
    ) {
      socialMainScene.showItemScreen();
    }

    if (
      socialMainScene.neutralTextButton.state === "choosed" &&
      socialMainScene.neutralReaction.speech.tenth.typingEnded === false
    ) {
      socialMainScene.neutralReaction.speech.displayAllTextAtOnce();
    } else if (
      socialMainScene.neutralTextButton.state === "choosed" &&
      socialMainScene.neutralReaction.speech.tenth.typingEnded === true
    ) {
      socialMainScene.showReactionScreenBool = false;
      //CALL HERE THE NEXT BETWEEN-SCENE!
      socialToDimensionScene.showFirstScreen();
      //Jumps directly to next scene!
      countSceneButtonClicks.push("Clicked");
    }
  } else if (socialMainScene.weiterButtonYourLookScreenClick()) {
    socialMainScene.showItemScreenBool = false;
    showUserlook = true;
    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
    //countSceneButtonClicks: Same Weiterbutton, different following scenes. The Array helps to define which scene is next
  } else if (
    showUserlook === true &&
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 4
  ) {
    showUserlook = false;
    //CALL HERE THE NEXT BETWEEN-SCENE!
    socialToDimensionScene.showFirstScreen();
    countSceneButtonClicks.push("Clicked");
  }
  //-----------------------------------------------------------------------SocialToDimensionScene (Between-Scene)
  else if (socialToDimensionScene.weiterButtonSecondScreenClick()) {
    if (socialToDimensionScene.firstScreenText.sentence.typingEnded === false) {
      socialToDimensionScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      socialToDimensionScene.showSecondScreen();
    }
  } else if (socialToDimensionScene.weiterButtonThirdScreenClick()) {
    if (
      socialToDimensionScene.secondScreenText.sentence.typingEnded === false
    ) {
      socialToDimensionScene.secondScreenText.sentence.displayAllTextAtOnce();
    } else {
      socialToDimensionScene.showThirdScreen();
    }
  } else if (socialToDimensionScene.weiterButtonFourthScreenClick()) {
    if (socialToDimensionScene.thirdScreenText.sentence.typingEnded === false) {
      socialToDimensionScene.thirdScreenText.sentence.displayAllTextAtOnce();
    } else {
      socialToDimensionScene.showFourthScreen();
    }
  } else if (socialToDimensionScene.weiterButtonFifthScreenClick()) {
    if (
      socialToDimensionScene.fourthScreenText.sentence.typingEnded === false
    ) {
      socialToDimensionScene.fourthScreenText.sentence.displayAllTextAtOnce();
    } else {
      socialToDimensionScene.showFifthScreen();
    }
  } else if (socialToDimensionScene.weiterButtonSixthScreenClick()) {
    if (socialToDimensionScene.fifthScreenText.sentence.typingEnded === false) {
      socialToDimensionScene.fifthScreenText.sentence.displayAllTextAtOnce();
    } else {
      socialToDimensionScene.showSixthScreen();
    }
  } else if (
    socialToDimensionScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (socialToDimensionScene.sixthScreenText.sentence.typingEnded === false) {
      socialToDimensionScene.sixthScreenText.sentence.displayAllTextAtOnce();
    } else {
      socialToDimensionScene.showNextPanoramaScreenFromMainScene();
      dimensionMainScene.showPanoramaScreen();
    }
  }
  //-----------------------------------------------------------------------DIMENSION MAINSCENE
  else if (dimensionMainScene.spellButtonClick()) {
    dimensionMainScene.showNPCProblemScreen();
  } else if (dimensionMainScene.weiterButtonChooseAnswerScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      dimensionMainScene.npcProblemSpeechbubble.speech.tenth.typingEnded ===
      false
    ) {
      dimensionMainScene.npcProblemSpeechbubble.speech.displayAllTextAtOnce();
    } else {
      dimensionMainScene.showChooseAnswerScreen();
    }
  } else if (dimensionMainScene.chooseAnswerScreenClick()) {
    dimensionMainScene.showAnswerScreen();
  } else if (dimensionMainScene.weiterButtonReactionScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      dimensionMainScene.toxicTextButton.state === "choosed" &&
      dimensionMainScene.toxicAnswer.speech.tenth.typingEnded === false
    ) {
      dimensionMainScene.toxicAnswer.speech.displayAllTextAtOnce();
    } else if (
      dimensionMainScene.positiveTextButton.state === "choosed" &&
      dimensionMainScene.positiveAnswer.speech.tenth.typingEnded === false
    ) {
      dimensionMainScene.positiveAnswer.speech.displayAllTextAtOnce();
    } else if (
      dimensionMainScene.neutralTextButton.state === "choosed" &&
      dimensionMainScene.neutralAnswer.speech.tenth.typingEnded === false
    ) {
      dimensionMainScene.neutralAnswer.speech.displayAllTextAtOnce();
    } else if (
      dimensionMainScene.negativeTextButton.state === "choosed" &&
      dimensionMainScene.negativeAnswer.speech.tenth.typingEnded === false
    ) {
      dimensionMainScene.negativeAnswer.speech.displayAllTextAtOnce();
    } else {
      dimensionMainScene.showReactionScreen();
    }

    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
  } else if (dimensionMainScene.weiterButtonItemScreenClick()) {
    //Had to define every state very detailed because of the "neutral"-button,
    //which has another condition than the others
    if (
      dimensionMainScene.toxicTextButton.state === "choosed" &&
      dimensionMainScene.toxicReaction.speech.tenth.typingEnded === false
    ) {
      dimensionMainScene.toxicReaction.speech.displayAllTextAtOnce();
    } else if (
      dimensionMainScene.toxicTextButton.state === "choosed" &&
      dimensionMainScene.toxicReaction.speech.tenth.typingEnded === true
    ) {
      dimensionMainScene.showItemScreen();
    }

    if (
      dimensionMainScene.positiveTextButton.state === "choosed" &&
      dimensionMainScene.positiveReaction.speech.tenth.typingEnded === false
    ) {
      dimensionMainScene.positiveReaction.speech.displayAllTextAtOnce();
    } else if (
      dimensionMainScene.positiveTextButton.state === "choosed" &&
      dimensionMainScene.positiveReaction.speech.tenth.typingEnded === true
    ) {
      dimensionMainScene.showItemScreen();
    }

    if (
      dimensionMainScene.negativeTextButton.state === "choosed" &&
      dimensionMainScene.negativeReaction.speech.tenth.typingEnded === false
    ) {
      dimensionMainScene.negativeReaction.speech.displayAllTextAtOnce();
    } else if (
      dimensionMainScene.negativeTextButton.state === "choosed" &&
      dimensionMainScene.negativeReaction.speech.tenth.typingEnded === true
    ) {
      dimensionMainScene.showItemScreen();
    }

    if (
      dimensionMainScene.neutralTextButton.state === "choosed" &&
      dimensionMainScene.neutralReaction.speech.tenth.typingEnded === false
    ) {
      dimensionMainScene.neutralReaction.speech.displayAllTextAtOnce();
    } else if (
      dimensionMainScene.neutralTextButton.state === "choosed" &&
      dimensionMainScene.neutralReaction.speech.tenth.typingEnded === true
    ) {
      dimensionMainScene.showReactionScreenBool = false;
      //CALL HERE THE NEXT BETWEEN-SCENE!
      //Jumps directly to next scene!
      dimensionToDestroyedScene.showFirstScreen();
      countSceneButtonClicks.push("Clicked");
    }
  } else if (dimensionMainScene.weiterButtonYourLookScreenClick()) {
    dimensionMainScene.showItemScreenBool = false;
    showUserlook = true;
    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
    //countSceneButtonClicks: Same Weiterbutton, different following scenes. The Array helps to define which scene is next
  } else if (
    showUserlook === true &&
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 5
  ) {
    showUserlook = false;
    //CALL HERE THE NEXT BETWEEN-SCENE!
    dimensionToDestroyedScene.showFirstScreen();
    countSceneButtonClicks.push("Clicked");
  }
  //-----------------------------------------------------------------------dimensionToDestroyedScene (Between-Scene)
  else if (dimensionToDestroyedScene.weiterButtonSecondScreenClick()) {
    if (
      dimensionToDestroyedScene.firstScreenText.sentence.typingEnded === false
    ) {
      dimensionToDestroyedScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      dimensionToDestroyedScene.showSecondScreen();
    }
  } else if (dimensionToDestroyedScene.weiterButtonThirdScreenClick()) {
    if (
      dimensionToDestroyedScene.secondScreenText.sentence.typingEnded === false
    ) {
      dimensionToDestroyedScene.secondScreenText.sentence.displayAllTextAtOnce();
    } else {
      dimensionToDestroyedScene.showThirdScreen();
    }
  } else if (dimensionToDestroyedScene.weiterButtonFourthScreenClick()) {
    if (
      dimensionToDestroyedScene.thirdScreenText.sentence.typingEnded === false
    ) {
      dimensionToDestroyedScene.thirdScreenText.sentence.displayAllTextAtOnce();
    } else {
      dimensionToDestroyedScene.showFourthScreen();
    }
  } else if (dimensionToDestroyedScene.weiterButtonFifthScreenClick()) {
    if (
      dimensionToDestroyedScene.fourthScreenText.sentence.typingEnded === false
    ) {
      dimensionToDestroyedScene.fourthScreenText.sentence.displayAllTextAtOnce();
    } else {
      dimensionToDestroyedScene.showFifthScreen();
    }
  } else if (dimensionToDestroyedScene.weiterButtonSixthScreenClick()) {
    if (
      dimensionToDestroyedScene.fifthScreenText.sentence.typingEnded === false
    ) {
      dimensionToDestroyedScene.fifthScreenText.sentence.displayAllTextAtOnce();
    } else {
      dimensionToDestroyedScene.showSixthScreen();
    }
  } else if (
    dimensionToDestroyedScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (
      dimensionToDestroyedScene.sixthScreenText.sentence.typingEnded === false
    ) {
      dimensionToDestroyedScene.sixthScreenText.sentence.displayAllTextAtOnce();
    } else {
      dimensionToDestroyedScene.showNextPanoramaScreenFromMainScene();
      destroyedMainScene.showPanoramaScreen();
    }
  }
  //-----------------------------------------------------------------------DESTROYED MAINSCENE
  else if (destroyedMainScene.spellButtonClick()) {
    destroyedMainScene.showNPCProblemScreen();
  } else if (destroyedMainScene.weiterButtonChooseAnswerScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      destroyedMainScene.npcProblemSpeechbubble.speech.tenth.typingEnded ===
      false
    ) {
      destroyedMainScene.npcProblemSpeechbubble.speech.displayAllTextAtOnce();
    } else {
      destroyedMainScene.showChooseAnswerScreen();
    }
  } else if (destroyedMainScene.chooseAnswerScreenClick()) {
    destroyedMainScene.showReactionScreen();
  }

  //Has to be an "Else If" condition, because button is on the same place than before,
  //it would make 2 clicks directly after another an jump directly to the next action
  else if (destroyedMainScene.weiterButtonItemScreenClick()) {
    //Had to define every state very detailed because of the "neutral"-button,
    //which has another condition than the others
    if (
      destroyedMainScene.toxicTextButton.state === "choosed" &&
      destroyedMainScene.toxicReaction.speech.tenth.typingEnded === false
    ) {
      destroyedMainScene.toxicReaction.speech.displayAllTextAtOnce();
    } else if (
      destroyedMainScene.toxicTextButton.state === "choosed" &&
      destroyedMainScene.toxicReaction.speech.tenth.typingEnded === true
    ) {
      destroyedMainScene.showItemScreen();
    }

    if (
      destroyedMainScene.positiveTextButton.state === "choosed" &&
      destroyedMainScene.positiveReaction.speech.tenth.typingEnded === false
    ) {
      destroyedMainScene.positiveReaction.speech.displayAllTextAtOnce();
    } else if (
      destroyedMainScene.positiveTextButton.state === "choosed" &&
      destroyedMainScene.positiveReaction.speech.tenth.typingEnded === true
    ) {
      destroyedMainScene.showItemScreen();
    }

    if (
      destroyedMainScene.negativeTextButton.state === "choosed" &&
      destroyedMainScene.negativeReaction.speech.tenth.typingEnded === false
    ) {
      destroyedMainScene.negativeReaction.speech.displayAllTextAtOnce();
    } else if (
      destroyedMainScene.negativeTextButton.state === "choosed" &&
      destroyedMainScene.negativeReaction.speech.tenth.typingEnded === true
    ) {
      destroyedMainScene.showItemScreen();
    }

    if (
      destroyedMainScene.neutralTextButton.state === "choosed" &&
      destroyedMainScene.neutralReaction.speech.tenth.typingEnded === false
    ) {
      destroyedMainScene.neutralReaction.speech.displayAllTextAtOnce();
    } else if (
      destroyedMainScene.neutralTextButton.state === "choosed" &&
      destroyedMainScene.neutralReaction.speech.tenth.typingEnded === true
    ) {
      destroyedMainScene.showReactionScreenBool = false;
      //CALL HERE THE NEXT BETWEEN-SCENE!
      destroyedToEvilMentorScene.showFirstScreen();
      //Jumps directly to next scene!
      countSceneButtonClicks.push("Clicked");
    }
  } else if (destroyedMainScene.weiterButtonYourLookScreenClick()) {
    destroyedMainScene.showItemScreenBool = false;
    showUserlook = true;
    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
    //countSceneButtonClicks: Same Weiterbutton, different following scenes. The Array helps to define which scene is next
  } else if (
    showUserlook === true &&
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 6
  ) {
    showUserlook = false;
    //CALL HERE THE NEXT BETWEEN-SCENE!
    destroyedToEvilMentorScene.showFirstScreen();
    countSceneButtonClicks.push("Clicked");
  }

  //-----------------------------------------------------------------------DestroyedToEvilMentorScene (Between-Scene)
  else if (destroyedToEvilMentorScene.weiterButtonSecondScreenClick()) {
    if (
      destroyedToEvilMentorScene.firstScreenText.sentence.typingEnded === false
    ) {
      destroyedToEvilMentorScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      destroyedToEvilMentorScene.showSecondScreen();
    }
  } else if (destroyedToEvilMentorScene.weiterButtonThirdScreenClick()) {
    if (
      destroyedToEvilMentorScene.secondScreenText.sentence.typingEnded === false
    ) {
      destroyedToEvilMentorScene.secondScreenText.sentence.displayAllTextAtOnce();
    } else {
      destroyedToEvilMentorScene.showThirdScreen();
    }
  } else if (destroyedToEvilMentorScene.weiterButtonFourthScreenClick()) {
    if (
      destroyedToEvilMentorScene.thirdScreenText.sentence.typingEnded === false
    ) {
      destroyedToEvilMentorScene.thirdScreenText.sentence.displayAllTextAtOnce();
    } else {
      destroyedToEvilMentorScene.showFourthScreen();
    }
  } else if (
    destroyedToEvilMentorScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (
      destroyedToEvilMentorScene.fourthScreenText.sentence.typingEnded === false
    ) {
      destroyedToEvilMentorScene.fourthScreenText.sentence.displayAllTextAtOnce();
    } else {
      destroyedToEvilMentorScene.showNextPanoramaScreenFromMainScene();
      evilMentorMainScene.showPanoramaScreen();
    }
  }
  //-----------------------------------------------------------------------EVIL MENTOR MAINSCENE
  else if (evilMentorMainScene.spellButtonClick()) {
    evilMentorMainScene.showNPCProblemScreen();
  } else if (evilMentorMainScene.weiterButtonChooseAnswerScreenClick()) {
    //If you click on the "Weiterbutton" when the text-animation isn't finished yet,
    //every sentence will be displayed instantly. Then you can click to get to the next screen
    if (
      evilMentorMainScene.npcProblemSpeechbubble.speech.tenth.typingEnded ===
      false
    ) {
      evilMentorMainScene.npcProblemSpeechbubble.speech.displayAllTextAtOnce();
    } else {
      evilMentorMainScene.showChooseAnswerScreen();
    }
  } else if (evilMentorMainScene.chooseAnswerScreenClick()) {
    if (evilMentorMainScene.toxicTextButton.state === "choosed") {
      evilMentorMainScene.showItemScreen();
    }
    if (evilMentorMainScene.positiveTextButton.state === "choosed") {
      evilMentorMainScene.showItemScreen();
    }
    if (evilMentorMainScene.negativeTextButton.state === "choosed") {
      evilMentorMainScene.showItemScreen();
    }
    if (evilMentorMainScene.neutralTextButton.state === "choosed") {
      evilMentorMainScene.showChooseAnswerScreenBool = false;
      //CALL HERE THE NEXT BETWEEN-SCENE!
      evilMentorToEndBossScene.showFirstScreen();
      //Jumps directly to next scene!
      countSceneButtonClicks.push("Clicked");
    }
  } else if (evilMentorMainScene.weiterButtonYourLookScreenClick()) {
    evilMentorMainScene.showItemScreenBool = false;
    showUserlook = true;
    //Has to be an "Else If" condition, because button is on the same place than before,
    //it would make 2 clicks directly after another an jump directly to the next action
    //countSceneButtonClicks: Same Weiterbutton, different following scenes. The Array helps to define which scene is next
  } else if (
    showUserlook === true &&
    weiterButtonToNextScene.click() &&
    countSceneButtonClicks.length === 7
  ) {
    showUserlook = false;
    //CALL HERE THE NEXT BETWEEN-SCENE!
    evilMentorToEndBossScene.showFirstScreen();
    countSceneButtonClicks.push("Clicked");
  }
  //-----------------------------------------------------------------------evilMentorToEndBossScene (Between-Scene)
  else if (evilMentorToEndBossScene.weiterButtonSecondScreenClick()) {
    if (
      evilMentorToEndBossScene.firstScreenText.sentence.typingEnded === false
    ) {
      evilMentorToEndBossScene.firstScreenText.sentence.displayAllTextAtOnce();
    } else {
      evilMentorToEndBossScene.showSecondScreen();
    }
  } else if (
    evilMentorToEndBossScene.weiterButtonNextPanoramaScreenFromMainSceneClick()
  ) {
    if (
      evilMentorToEndBossScene.secondScreenText.sentence.typingEnded === false
    ) {
      evilMentorToEndBossScene.secondScreenText.sentence.displayAllTextAtOnce();
    } else {
      evilMentorToEndBossScene.showNextPanoramaScreenFromMainScene();
      showUserScoreAndFightManual = true;
    }
  } else if (showUserScoreAndFightManual === true) {
    if (weiterButtonToFight.click()) {
      if (fightManualText.everySentenceHasEnded === false) {
        fightManualText.displayAllTextAtOnce();
      } else {
        showUserScoreAndFightManual = false;
        //-------------------------------------------------------------------------------SETS EVERYTHING BACK FOR A FLUID BOSS FIGHT EXPERIENCE
        //Doesnt work to reset everything before Bossfight to make it more fluently
        // setEverythingJustOnceForBossFight = true;
        // startOverForBossFight();
        //
        bossFightStarts = true;
      }
    }
  } else if (showEndscreen === true) {
    if (endScreen.tippsButtonClick()) {
      endScreen.showTipps();
    }
    if (endScreen.backButtonClick()) {
      endScreen.dontShowTipps();
    }
    if (endScreen.menuButtonClick()) {
      if (bossFight.winnerState === "verloren") {
        if (endScreen.loserText.typingEnded === false) {
          endScreen.loserText.displayAllTextAtOnce();
        } else {
          restart = true;
        }
      }
      if (bossFight.winnerState === "gewonnen") {
        if (endScreen.winnerText.typingEnded === false) {
          endScreen.winnerText.displayAllTextAtOnce();
        } else {
          restart = true;
        }
      }
    }
  }
}

//TESTING
// bossFight = new BossFight(
//   //User
//   //UserHealth (More is more)
//   //(standard 100) (200 max! 100 min!)
//   100 + userHealth,
//   //UserSpeed (More is slower)
//   //(standard: 40) (40 worst speed! 4 best speed!)
//   40 - userSpeed,
//   //UserDamage / Positivity / Attack (More is more)
//   // (standard: 10) (100 max! 10 min!)
//   10 + userPositivity,
//   //UserShield (More is more)
//   //(standard: 10) (50 max! 0 min!)
//   0 + userShield,
//   //
//   //
//   //Boss
//   //BossHealth (More is more)
//   //(standard: 100) (300 max! 100 min!)
//   100 + bossHealth,
//   //BossFireBallDamage = boss object Damage (More is more)
//   //(standard: 10) (100 max! | 10 Min!)
//   10 + bossObjectDamage,
//   //BossFireAmount = BossObjectAmount (More is more)
//   //(standard: 30) (100 max! 30 min!)
//   30 + bossObjectAmount,
//   //BossFireBallSpeed = BossObjectSpeed (More is more)
//   //(standard: 10) (30 max! | 10 Min!)
//   10 + bossObjectSpeed
// );
//
//
//
//
//All events die p5 uses, have to be anhängt ans window
window.draw = draw;
//
function draw() {
  standardSettings();
  startOver();
  //StartScreen
  startScreen.fadeIn();
  startScreen.displayStartScreen();
  startScreen.displayStartButton();
  //Introduction screen
  startScreen.displayIntroduction();
  if (startScreen.showFirstScreen === true) {
    introToSoccerScene.showFirstScreen();
    //Start Screen and Introduction Screen are still active
    startScreen.startScreen = false;
    startScreen.showFirstScreen = false;
    startScreen.startIntroductionBool === false;
  }

  //-------Game scenes
  if (bossFightStarts === false) {
    //00_dimensionToDestroyedScene
    introToSoccerScene.firstScreen();
    introToSoccerScene.secondScreen();
    introToSoccerScene.thirdScreen();
    introToSoccerScene.fourthScreen();
    introToSoccerScene.fifthScreen();
    introToSoccerScene.sixthScreen();
    introToSoccerScene.seventhScreen();
    introToSoccerScene.eighthScreen();

    //01_soccerMainScene
    soccerMainScene.panoramaFadeIn = 255; //Dont need to fade in: same Picture
    soccerMainScene.panoramaScreen();
    soccerMainScene.npcProblemScreen();
    soccerMainScene.chooseAnswerScreen();
    soccerMainScene.answerScreen();
    soccerMainScene.reactionScreen();
    soccerMainScene.itemScreen();

    //01_soccerToChefScene
    soccerToChefScene.firstScreen();
    soccerToChefScene.secondScreen();

    //02_chefMainScene
    chefMainScene.panoramaFadeIn = 255; //Dont need to fade in: same Picture
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

    //03_coffeeMainScene
    coffeeMainScene.panoramaScreen();
    coffeeMainScene.npcProblemScreen();
    coffeeMainScene.chooseAnswerScreen();
    coffeeMainScene.reactionScreen();
    coffeeMainScene.itemScreen();

    //03_coffeeToInvestorScene
    coffeeToInvestorScene.firstScreen();
    coffeeToInvestorScene.secondScreen();

    //04_investorMainScene
    investorMainScene.panoramaFadeIn = 255; //Dont need to fade in: same Picture
    investorMainScene.panoramaScreen();
    investorMainScene.npcProblemScreen();
    investorMainScene.chooseAnswerScreen();
    investorMainScene.answerScreen();
    investorMainScene.reactionScreen();
    investorMainScene.itemScreen();

    //04_InvestorToSocialScene
    investorToSocialScene.firstScreen();
    investorToSocialScene.secondScreen();
    investorToSocialScene.thirdScreen();

    //05_socialMainScene
    socialMainScene.panoramaFadeIn = 255; //Dont need to fade in: same Picture
    socialMainScene.panoramaScreen();
    socialMainScene.npcProblemScreen();
    socialMainScene.chooseAnswerScreen();
    socialMainScene.reactionScreen();
    socialMainScene.itemScreen();

    //05_socialToDimensionScene
    socialToDimensionScene.firstScreen();
    socialToDimensionScene.secondScreen();
    socialToDimensionScene.thirdScreen();
    socialToDimensionScene.fourthScreen();
    socialToDimensionScene.fifthScreen();
    socialToDimensionScene.sixthScreen();

    //06_DimensionMainScene
    dimensionMainScene.panoramaFadeIn = 255; //Dont need to fade in: same Picture
    dimensionMainScene.panoramaScreen();
    dimensionMainScene.npcProblemScreen();
    dimensionMainScene.chooseAnswerScreen();
    dimensionMainScene.answerScreen();
    dimensionMainScene.reactionScreen();
    dimensionMainScene.itemScreen();

    //06_dimensionToDestroyedScene
    dimensionToDestroyedScene.firstScreen();
    dimensionToDestroyedScene.secondScreen();
    dimensionToDestroyedScene.thirdScreen();
    dimensionToDestroyedScene.fourthScreen();
    dimensionToDestroyedScene.fifthScreen();
    dimensionToDestroyedScene.sixthScreen();

    //07_destroyedMainScene
    destroyedMainScene.panoramaFadeIn = 255; //Dont need to fade in: same Picture
    destroyedMainScene.panoramaScreen();
    destroyedMainScene.npcProblemScreen();
    destroyedMainScene.chooseAnswerScreen();
    destroyedMainScene.reactionScreen();
    destroyedMainScene.itemScreen();

    //07_destroyedToEvilMentorScene
    destroyedToEvilMentorScene.firstScreen();
    destroyedToEvilMentorScene.secondScreen();
    destroyedToEvilMentorScene.thirdScreen();
    destroyedToEvilMentorScene.fourthScreen();

    //08_evilMentorMainScene
    evilMentorMainScene.panoramaFadeIn = 255; //Dont need to fade in: same Picture
    evilMentorMainScene.panoramaScreen();
    evilMentorMainScene.npcProblemScreen();
    evilMentorMainScene.chooseAnswerScreen(
      GIFChooseImageToxic,
      GIFChooseImagePositive,
      GIFChooseImageNegative,
      GIFChooseImageNeutral
    );
    evilMentorMainScene.itemScreen();

    //08_EvilMentorToEndBossScene
    evilMentorToEndBossScene.firstScreen(transformationGIF);
    evilMentorToEndBossScene.secondScreen();

    //Doesnt work to reset everything before Bossfight to make it more fluently
    // saveStatesForBossFight();
    userScoreAndFightManual();
  }

  if (bossFightStarts === true) {
    if (createJustOneBossFight === true) {
      // ---------------------------------------------------------------------------------------------------------------------------FOR TESTING BOSSFIGHT
      // tint(255, 255);
      //Has to be created here, so that the parameter are correct and have the latest value by creating the class
      bossFight = new BossFight(
        //User
        //UserHealth (More is more)
        //(standard 100) (200 max! 100 min!)
        100 + userHealth,
        //UserSpeed (More is slower)
        //(standard: 40) (40 worst speed! 4 best speed!)
        40 - userSpeed,
        //UserDamage / Positivity / Attack (More is more)
        // (standard: 10) (100 max! 10 min!)
        10 + userPositivity,
        //UserShield (More is more)
        //(standard: 10) (50 max! 0 min!)
        0 + userShield,
        //
        //
        //Boss
        //BossHealth (More is more)
        //(standard: 100) (300 max! 100 min!)
        100 + bossHealth,
        //BossFireBallDamage = boss object Damage (More is more)
        //(standard: 10) (100 max! | 10 Min!)
        10 + bossObjectDamage,
        //BossFireAmount = BossObjectAmount (More is more)
        //(standard: 30) (100 max! 30 min!)
        30 + bossObjectAmount,
        //BossFireBallSpeed = BossObjectSpeed (More is more)
        //(standard: 10) (30 max! | 10 Min!)
        10 + bossObjectSpeed
      );
      createJustOneBossFight = false;
    }
    //The order is because of displaying things in the correct way (Below/Above)

    bossFight.userControl();
    bossFight.displayUserHealth();

    bossFight.displayBossHealth();

    //The userLookForBossFight function is external and not contained in the bossFight class
    //So you have to use push & pop to just affect the userLookForBossFight function
    //DISPLAY USER
    push();
    bossFight.displayUser();
    userLookForBossFight();
    pop();

    bossFight.displayFireBalls();

    bossFight.bossControl();
    bossFight.displayBoss();
    bossFight.switchBossImages();

    //Collision
    bossFight.countDown();
    bossFight.pointOnRectangleAndCollision();
    bossFight.displayPositiveHits();
    bossFight.displayToxicHits();
    bossFight.deleteFireBallsOutside();

    //Blends Stats in
    bossFight.displayUserParameter(
      userHealth,
      userSpeed,
      userPositivity,
      userShield
    );
    bossFight.displayBossParameter(
      bossHealth,
      bossObjectDamage,
      bossObjectAmount,
      bossObjectSpeed
    );

    bossFight.winOrLose();
    bossFight.winOrLoseFade();

    //
    if (bossFight.showEndScreen === true) {
      bossFightStarts = false;
      showEndscreen = true;
    }
  }

  //EndScreen
  if (showEndscreen === true) {
    if (bossFight.winnerState === "gewonnen") {
      endScreen.displayWinnerScreen();
      //The userLookForBossFight function is external and not contained in the bossFight class
      //So you have to use push & pop to just affect the userLookForBossFight function
      if (endScreen.showtipps === false) {
        push();
        endScreen.displayUser();
        userLookForBossFight();
        pop();
      }
    }
    if (bossFight.winnerState === "verloren") {
      endScreen.displayLoserScreen();
    }

    //For both Screens
    endScreen.displayTippsBackButton();
    endScreen.displayTippsButton();
    endScreen.displayTipps();
    endScreen.displayMenuButton();
  }

  if (bossFightStarts === false) {
    //When its inside this bool the boss stats are not overwritten
    //"Global" functions
    userStats();

    userLook();

    bossStats();
  }

  if (restart === true) {
    setEverythingJustOnce = true;
    startOver();
    restart = false;
  }

  // showUserScoreAndFightManual = true;
  /*
–––––––––––––––––––––––– Fuer Franzi & Yara
*/

  // HAVE TO BE ACTIVE THE WHOLE TIME
  // ---------------------------------------------------------------------------------------------------------------------------FOR TESTING BOSSFIGHT
  // startScreen.startScreen = false;
  // startScreen.showFirstScreen = false;
  // startScreen.startIntroductionBool === false;

  // HERE THE OTHER SCENE
  // evilMentorMainScene.showPanoramaScreen();

  // bossFightStarts = true;

  //For ENDBOSS FIGHT (Lags by over 3 Objects)
  // soccerMainScene.state = "toxic";
  // chefMainScene.state = "toxic";
  // investorMainScene.state = "toxic";
  // coffeeMainScene.state = "toxic";
  // socialMainScene.state = "toxic";
  // dimensionMainScene.state = "toxic";
  // destroyedMainScene.state = "toxic";
  // evilMentorMainScene.state = "toxic";
}

// createJustOneBossFight = true;
// ---------------------------------------------------------------------------------------------------------------------------FOR TESTING BOSSFIGHT

// evilMentorMainScene.showPanoramaScreen();
// startScreen.startScreen = false;
// startScreen.showFirstScreen = false;
// startScreen.startIntroductionBool === false;

// introToSoccerScene.showFirstScreen();
// soccerMainScene.showPanoramaScreen();
// soccerToChefScene.showFirstScreen();
// chefMainScene.showPanoramaScreen();
// chefToCoffeeScene.showFirstScreen();
// coffeeMainScene.showPanoramaScreen();
// coffeeToInvestorScene.showFirstScreen();
// investorMainScene.showPanoramaScreen();
// investorToSocialScene.showFirstScreen();
// socialMainScene.showPanoramaScreen();
// socialToDimensionScene.showFirstScreen();
// dimensionMainScene.showPanoramaScreen();
// dimensionToDestroyedScene.showFirstScreen();
// destroyedMainScene.showPanoramaScreen();
// destroyedToEvilMentorScene.showFirstScreen();
// evilMentorMainScene.showPanoramaScreen();
// evilMentorToEndBossScene.showFirstScreen();
// showUserScoreAndFightManual = true;

// showEndscreen = true;

// countSceneButtonClicks.length = [1, 1, 3, 1, 1, 1, 7];

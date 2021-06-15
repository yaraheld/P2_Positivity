import SpellButton from "./SpellButton";
import ChooseButton from "./chooseButton";
import TextAnimation from "./TextAnimation";
import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences";
import MainScene from "./MainScene";
let chefMainScene = new MainScene();

//variables & commentaries = english
//classes: Capital Letter
//variables: lowercaseInitial
//functions: self-explanatory naming

//textFont("Duper");
let duper = loadFont("00_Links/00_Fonts/duper.otf");
//textFont("Duper-Ita");
let duperItalic = loadFont("00_Links/00_Fonts/duper_italic.otf");
// textFont("Duper-Bold");
let duperBold = loadFont("00_Links/00_Fonts/duper_bold.otf");
//textFont("Duper-BoldIta");
let duperBoldItalic = loadFont("00_Links/00_Fonts/duper_bolditalic.otf");

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

function mouseClicked() {
  if (chefMainScene.spellButtonClick()) {
    chefMainScene.showNPCProblemScreen();
  }
}

function userStats() {}

function draw() {
  standardSettings();

  // chefMainScene.showNPCProblemScreen();

  //02_chefMainScene
  chefMainScene.panoramaScreen();
  chefMainScene.npcProblemScreen();
}

import MainScene from "./MainScene.js";
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
  if (chefMainScene.weiterButtonAnswerScreenClick()) {
    chefMainScene.showChooseAnswerScreen();
  }
}

function userStats() {}

//All events die p5 nutzt, muss ans fenster anhängen muss
window.mouseClicked = mouseClicked;
window.draw = draw;
function draw() {
  standardSettings();

  //Jump to next Scene (for Coding)
  // chefMainScene.showNPCProblemScreen();

  //02_chefMainScene
  chefMainScene.panoramaScreen();
  chefMainScene.npcProblemScreen();
  chefMainScene.chooseAnswerScreen();
}

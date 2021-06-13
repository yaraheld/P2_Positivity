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
  textAlign(CENTER);

  scale(1);
}

import MainScene from "./MainScene";
let chefMainScene = new MainScene();

function mouseClicked() {
  if (chefMainScene.spellButtonHitTest) {
    console.log("HIIII");
  }
}

function userStats() {}

let magicSound = loadSound("00_Links/00_Audio/magic.mp3");
magicSound.play();

function draw() {
  standardSettings();

  //02_chefMainScene
  chefMainScene.panoramaScreen();
  chefMainScene.spellButtonHitTest();
}

//<3 Hello Shimone

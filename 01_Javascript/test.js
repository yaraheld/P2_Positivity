// let myImage = loadImage("00_Links/02_chefMainScene/chef_szene_1.png");
// let sound = loadSound("00_Links/00_Audio/magic.mp3");
// sound.play();
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

import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences";
let textBox = new TextAnimationWithMultipleSentences(
  -300,
  -200,
  25,
  35,
  50,
  color(255),
  "Ist Ihnen denn die Arbeit und",
  "Duper-Bold",
  "das Geld wichtiger als Ihre Frau? ",
  "Duper-Bold",
  "Arbeiten Sie daran, ein besserer",
  "Partner für sie zu werden. Das",
  "wird einiges Verändern, sie ",
  "schaffen das!",
  "",
  "",
  "",
  ""
);

import TextAnimation from "./TextAnimation";
import SpellButton from "./SpellButton";
import ChooseButton from "./chooseButton";
let firstChooseButton = new ChooseButton(
  -300,
  -200,
  "GEHT MICH EIGENTLICH NICHTS AN ..."
);

function draw() {
  standardSettings();
  background(0);
  textBox.sentences();
  //for mouseClicked: everything appears at once
  //textBox.displayAllTextAtOnce();
  console.log(textBox.everySentenceHasEnded);

  firstChooseButton.displayActiveOrSleeping();
  firstChooseButton.displayButtonSentence();
  firstChooseButton.fadeIn();
}

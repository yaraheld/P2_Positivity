// let myImage = loadImage("00_Links/02_chefMainScene/chef_szene_1.png");

// let sound = loadSound("00_Links/00_Audio/magic.mp3");

// sound.play();

import TextAnimation from "./TextAnimation";
let firstsentence = new TextAnimation(
  "Duper",
  30,
  "Ist Ihnen denn die Arbeit und ",
  100,
  100,
  50
);

function draw() {
  firstsentence.typeWriter();
}

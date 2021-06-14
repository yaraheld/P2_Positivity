// let myImage = loadImage("00_Links/02_chefMainScene/chef_szene_1.png");

// let sound = loadSound("00_Links/00_Audio/magic.mp3");

// sound.play();

import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences";
let textBox = new TextAnimationWithMultipleSentences(
  100,
  100,
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

function draw() {
  background(0);
  textBox.sentences();
  // textBox.displayAllTextAtOnce(); //bei klick wird alles angezeigt
}

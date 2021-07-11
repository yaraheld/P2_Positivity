new p5();

// how to & source: https://github.com/processing/p5.js/wiki/Positioning-your-canvas#relocating-the-canvas
var cnv;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

//loads the biggest data
window.preload = preload;
function preload() {
  battleMusic = loadSound("00_Links/00_Audio/epicBattle.mp3");
  gameMusic = loadSound("00_Links/00_Audio/music.mp3");

  fireballSound = loadSound("00_Links/00_Audio/fire.mp3");
  userHitSound = loadSound("00_Links/00_Audio/userHit.mp3");
  bossHitSound = loadSound("00_Links/00_Audio/bossHit.mp3");

  GIFChooseImageToxic = loadImage("00_Links/08_evilMentorMainScene/toxic.gif");
  GIFChooseImagePositive = loadImage(
    "00_Links/08_evilMentorMainScene/positive.gif"
  );
  GIFChooseImageNegative = loadImage(
    "00_Links/08_evilMentorMainScene/negative.gif"
  );
  GIFChooseImageNeutral = loadImage(
    "00_Links/08_evilMentorMainScene/neutral.gif"
  );
  transformationGIF = loadImage(
    "00_Links/08_evilMentorToEndBossScene/firstScreen_small.gif"
  );
}

function setup() {
  cnv = createCanvas(1100, 620);
  centerCanvas();
  background(61, 18, 117);
  cnv.parent("positivity");
  frameRate(30);
}

// how to & source: https://github.com/processing/p5.js/wiki/Positioning-your-canvas#relocating-the-canvas

function windowResized() {
  centerCanvas();
}

let GIFChooseImageToxic;
let GIFChooseImagePositive;
let GIFChooseImageNegative;
let GIFChooseImageNeutral;
let transformationGIF;
let fireballSound;
let userHitSound;
let bossHitSound;
let battleMusic;
let gameMusic;

// deaktiviert Pfeiltasten
// how to & source: https://github.com/processing/p5.js/wiki/Positioning-your-canvas#relocating-the-canvas
window.addEventListener("keydown", function (event) {
  if ([38, 40].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
});

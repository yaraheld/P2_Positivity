new p5();

// From Garrit to center canvas
var cnv;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
function setup() {
  cnv = createCanvas(1100, 620);
  centerCanvas();
  background(61, 18, 117);
  cnv.parent("positivity");
  frameRate(30);
}
// From Garrit to center canvas
function windowResized() {
  centerCanvas();
}

let GIFChooseImageToxic;
let GIFChooseImagePositive;
let GIFChooseImageNegative;
let GIFChooseImageNeutral;
let transformationGIF;

//loads the biggest data
window.preload = preload;
function preload() {
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

// deaktiviert Pfeiltasten
window.addEventListener("keydown", function (event) {
  if ([38, 40].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
});

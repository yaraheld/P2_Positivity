new p5();

function setup() {
  //1100x620px
  let myCanvas = createCanvas(1100, 620);
  myCanvas.parent("positivity");

  frameRate(30);
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

let width = windowWidth;
let height = windowHeight;

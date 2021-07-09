new p5();

function setup() {
  //1100x620px
  let myCanvas = createCanvas(1100, 620);
  myCanvas.parent("positivity");

  frameRate(30);
}

// deaktiviert Pfeiltasten
window.addEventListener("keydown", function (event) {
  if ([38, 40].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
});

let width = windowWidth;
let height = windowHeight;

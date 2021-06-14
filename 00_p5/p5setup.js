function setup() {
  //1100x620px
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("positivity");

  frameRate(30);
}

// deaktiviert Pfeiltasten
window.addEventListener("keydown", function (event) {
  if ([38, 40].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
});

new p5();
let width = windowWidth;
let height = windowHeight;

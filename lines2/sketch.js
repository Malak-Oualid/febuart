let textLayer;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(2);

  for (let i = 100; i <= 700; i += 20) {
    // Calculate distortion based on mouse position
    let distortion = 0;
    if (mouseIsPressed) {
      let d = dist(mouseX, mouseY, i, 400); // Distance from mouse to line
      distortion = map(sin(d * 0.05 + frameCount * 0.1), -1, 1, -10, 10);
    }
    line(i + distortion, 0, i + distortion, 800);
  }
}
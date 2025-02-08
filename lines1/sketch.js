var maxSize = 0;
var isMouseOverCanvas = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  var centerX = width / 2;
  var centerY = height / 2;

  maxSize += 1; // Increase the size over time

  for (let size = maxSize; size > 0; size -= 20) {
    beginShape();

    // Change colors and distort shape if mouse is pressed
    if (mouseIsPressed) {
      fill("purple");
      stroke("black");
      // Flowy distortion using sine and cosine functions
      vertex(centerX + sin(frameCount * 0.1) * 10, centerY - size + cos(frameCount * 0.1) * 10); // Top
      vertex(centerX + size + sin(frameCount * 0.1) * 10, centerY + cos(frameCount * 0.1) * 10); // Right
      vertex(centerX + sin(frameCount * 0.1) * 10, centerY + size + cos(frameCount * 0.1) * 10); // Bottom
      vertex(centerX - size + sin(frameCount * 0.1) * 10, centerY + cos(frameCount * 0.1) * 10); // Left
    } else {
      fill("black");
      stroke("white");
      // Regular diamond shape
      vertex(centerX, centerY - size); // Top
      vertex(centerX + size, centerY); // Right
      vertex(centerX, centerY + size); // Bottom
      vertex(centerX - size, centerY); // Left
    }

    endShape(CLOSE);
  }

  // Reset maxSize if it gets too large
  if (maxSize > width) {
    maxSize = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
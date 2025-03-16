function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 12, 99); // Navy blue background

  noFill();
  strokeWeight(2);

  let rectCount = 5; // Number of concentric rectangles per cluster

  for (let centerX = 0; centerX <= windowWidth; centerX += windowWidth / 10) {
    let x = centerX;

    for (let centerY = 0; centerY <= windowHeight; centerY += windowHeight / 10) {
      let y = centerY;

      for (let i = 0; i < rectCount; i++) {
        // Balanced color logic based on position and index
        let colorFactor = (centerX + centerY + i * 50) % 255; // Generate a value between 0 and 255
        if (colorFactor < 85) {
          stroke(255, 0, 0); // Red
        } else if (colorFactor < 170) {
          stroke(255, 255, 0); // Orange
        } else {
          stroke(0, 165, 0); // Yellow
        }

        // Vary size by changing the padding increment
        let padding = i * 15; // Adjust padding for size variation
        rect(
          x - (width / 20) + padding,
          y - (height / 20) + padding,
          width / 20 - 2 * padding,
          height / 20 - 2 * padding
        );
      }
    }
  }
}
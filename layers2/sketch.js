layers = [];
numOfLayers = 100;
numOfCircles = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numOfLayers; i++) {
    layer = createGraphics(windowWidth, windowHeight);
    layers.push(layer);
    drawLayer(i);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < numOfLayers; i++) {
    image(layers[i], 0, 0);
  }
}

function drawLayer(layerIndex) {
  for (let i=0; i < numOfCircles; i++) {
    layer.clear();
    layer.noStroke();
    //layer.fill(random(100,255), random(100,255), random(100,255), random(50,80));
    // Randomly pick a pure R, G, or B color
    let colors = [
      [255, 0, 0],    // Red
      [0, 255, 0],    // Green
      [0, 0, 255],    // Blue
      [255, 165, 0],  // Orange
      [255, 192, 203],// Pink
      [255, 255, 0],  // Yellow
      [0, 255, 255],  // Cyan
      [128, 0, 128]   // Purple
    ];
    let colorChoice = random(colors); // Pick one of the three colors

    layer.fill(colorChoice[0], colorChoice[1], colorChoice[2], random(50,100));
    layers[layerIndex].ellipse(random(width), random(height), random(10, 150));
  }
}
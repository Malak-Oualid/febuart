let bg, mg, fg; // Graphics buffers for layers
let bgX = 0, mgX = 0, fgX = 0; // Positions for each layer

function setup() {
  createCanvas(800, 400);

  // Create off-screen graphics buffers for each layer
  bg = createGraphics(width, height);
  mg = createGraphics(width, height);
  fg = createGraphics(width, height);

  // Draw static elements on each layer
  drawBackground(bg);
  drawMidground(mg);
  drawForeground(fg);
}

function draw() {
  background(135, 206, 235);

  // Display layers with parallax effect
  image(bg, bgX, 0);
  image(mg, mgX, 0);
  image(fg, fgX, 0);

  // Calculate movement based on time (frame-rate independent)
  let speed = deltaTime / 1000; // Convert milliseconds to seconds
  bgX -= 50 * speed; // Background moves at 50 pixels per second
  mgX -= 100 * speed; // Midground moves at 100 pixels per second
  fgX -= 200 * speed; // Foreground moves at 200 pixels per second

  // Reset positions to create an infinite scroll effect
  if (bgX < -width) bgX = 0;
  if (mgX < -width) mgX = 0;
  if (fgX < -width) fgX = 0;
}

function drawBackground(layer) {
  layer.background(135, 206, 235); // Sky blue
  layer.fill(100);
  layer.noStroke();
  for (let i = 0; i < 5; i++) {
    layer.ellipse(i * 200 + 100, layer.height - 50, 300, 100); // Distant hills
  }
}

function drawMidground(layer) {
  layer.clear(); // Clear previous frame
  layer.fill(50, 205, 50); // Green
  layer.noStroke();
  for (let i = 0; i < 10; i++) {
    layer.rect(i * 100, layer.height - 100, 80, 100); // Trees
  }
}

function drawForeground(layer) {
  layer.clear(); // Clear previous frame
  layer.fill(139, 69, 19); // Brown
  layer.noStroke();
  for (let i = 0; i < 20; i++) {
    layer.rect(i * 50, layer.height - 50, 40, 50); // Grass
  }
}
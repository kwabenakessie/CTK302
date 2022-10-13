let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background("#1e96fc");
      textSize(50);
      text("Click To Next Page", width / 2, height / 2);

      break;

    case 1:
      background("#072ac8");
      fill("white")
      textSize(80);
      text("Good Job!!", width / 2, height / 2);
  }
  rect(width / 2, height - 100, 150, 50, 40);
}

function mouseReleased() {
  if (
    mouseX > width / 2 - 75 &&
    mouseX < width / 2 + 75 &&
    mouseY > height - 125 &&
    mouseY < height - 75
  ) {
    state++;
    if (state > 2) state = 0;
  }
}

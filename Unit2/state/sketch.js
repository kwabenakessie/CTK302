let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("0");
      //text("case 1", 100, 100);
      fill(random(205), random(128), random(155));
      for (let j = 0; j < 2000; j += 25) {
        for (let i = 0; i < 2000; i += 25) {
          ellipse(j, i, 20, 20);
        }
      }
      break;

    case 1:
      background("rgb(220,246,252)");
      //text("case 2", 100, 100);
      fill(random(180), random(128), random(100));
      for (let j = 0; j < height; j += 23) {
        for (let i = 0; i < width; i += 23) {
          rect(i, j, 20, 20);
        }
      }
      break;

    case 2:
      //noStroke();
      background("0");
      //text("case 3", 100, 100);
      fill("#36e5eb");
      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i <= width; i += 25) {
          ellipse(j, i, 50, 50);
        }
      }
      break;

    case 3:
      //text("case 4", 100, 100);
      fill(random(200), random(100), random(158));
      for (let j = 0; j <= height; j += 50) {
        for (let i = 0; i <= width; i += 25) {
          ellipse(j, i, 20, 200);
        }
      }
      break;
      
    case 4:
      fill(random(205), random(138), random(105));
      //text("case 4", 100, 100);
      for (let j = 0; j < 2000; j += 100) {
        for (let i = 0; i < 2000; i += 35) {
          ellipse(j, i, 100, 20);
        }
      }
      break;
  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 4) {
    state = 0;
  }
}

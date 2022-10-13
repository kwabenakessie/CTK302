let state = 0;
let timer = 0;
let x = 0;
let v = 5;
let w;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {

  background("white");
  fill("yellow");
  rect(displayWidth / 2, height / 2, 150, 450)
  switch (state) {
    case 0: // green light
      fill("gray");
      ellipse(displayWidth / 2, height / 2 - 130, 100, 100);
      fill("gray");
      ellipse(displayWidth/ 2, height / 2, 100, 100);
      fill("green");
      ellipse(displayWidth/ 2, height / 2 + 130, 100, 100);
      v = 8;
      break;

    case 1: // yellow light
      fill("gray");
      ellipse(displayWidth/ 2, height / 2 - 130, 100, 100);
      fill("yellow"); 
      ellipse(displayWidth/2, height/2, 100, 100);
      fill("gray");
      ellipse(displayWidth/2, height/2 + 130, 100, 100);
      v = 4;
      break;

    case 2: //red light
      fill("red");
      ellipse(displayWidth/2, height/2 - 130, 100, 100);
      fill("gray");
      ellipse(displayWidth/2, height/2, 100, 100);
      fill("gray");
      ellipse(displayWidth/2, height/2 + 130, 100, 100);
      if (x >= displayWidth / 2 && x <= displayWidth / 2) {
        v = 0;
      }
      break;

  }

  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 2) state = 0;
  }

  fill("blue");
  rect(x, height - 50, 100, 30);
  x = x + v;
  if (x > displayWidth) {
    x = 0;

  }

}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
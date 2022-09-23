
let x = 0;

function setup() {
  createCanvas(1290, 595);
}

function draw() {
  background("blue");
  fill("gold")
  textSize(100);
  text("Hey Prof Rose!!", x, 200)
  text
  x += 3;
  if (x > width) {
    x = 0;
  }
}

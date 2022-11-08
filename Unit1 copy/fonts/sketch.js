let f1, f2, f3 ;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/THESOLISTICE.ttf");
  f2 = loadFont("assets/airstrikebold.ttf");
  f3 = loadFont("assets/OriginTech.ttf");
  textAlign(CENTER);
}

function draw() {
  background("white");
  fill("black");

  textFont(f1, 48);
  text("Hello there!", width / 2, 100);
  textFont(f2, 38);
  text("I'm Prince", width / 2, 200);
  textFont(f3, 28);
  text("From Ghana", width / 2, 300)

}

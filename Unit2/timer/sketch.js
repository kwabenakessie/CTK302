let state = 0;
let timer = 0;
let i1, i2, i3

function setup() {
 createCanvas(550, 650);
  i1 = loadImage("assets/1.jpg");
  i2 = loadImage("assets/2.jpg");
  i3 = loadImage("assets/3.jpg");
  imageMode(CENTER);
}

function draw() {
  //background(220);

  switch (state) {
    case 0:
      //background("0");
      
      image(i1, width / 2, height / 2, 550, 750);
      fill("black");
      textSize(20);
      text("Thank you very much Professor Rose for invitating to have lunch with you.", 25, 25, 400, 400);
 
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      //background("gold");

      image(i2, width / 2, height / 2, 550, 750);
      fill("red");
      textSize(90);
      text("Chicago", 100, 70, 400, 400);

      timer++;
      if (timer > 2.5 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      //background("green");

      image(i3, width / 2, height / 2, 550, 750);
      fill("white");
      textSize(20);
      text("Create your legacy", 225, 320, 400, 400);
      
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 0;
      }
      break;
      
 }
}

    
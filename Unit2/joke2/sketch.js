let state = 0;
let timer = 0;

function setup() {
  createCanvas(displayWidth, 610);
  textAlign(CENTER);
  textSize(20);
  fill("white");
}

function draw() {

  switch (state){
    case 0:
      background("#9c7a97");
      text("I'm told winter coat is cheaper in Texas", width / 2, height / 2);
      
      break;

    case 1:
        background("blue");
        text("because it doesn't SNOW in Texas", width / 2, height / 2); 
  }

  timer++
  if (timer > 4 * 60) {
  timer = 0; 
  state++ ;
  if (state > 1){
      state = 0;
  }
  }
}


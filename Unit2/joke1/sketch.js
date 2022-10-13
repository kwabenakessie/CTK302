let state = 0;

function setup() {
  createCanvas(displayWidth, 610);
  textAlign(CENTER);
  textSize(20);
  fill("white");
}

function draw() {

  switch (state){
    case 0:
      background("#ff7d00");
      text("What is the difference between dust bin and trush can?", width / 2, height / 2);
      
      break;

    case 1:
        background("#78290f");
        text("This is my story on my fisrt time at walmart", width / 2, height / 2); 
  }

}

function mouseReleased(){
  state++;
  if (state > 1) state = 0;
}
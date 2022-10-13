let state = 0;
let s1, s2, s3;
let i1, i2, i3;

function preload(){
  s1 = loadSound("assets/acoustic.mp3");
  s2 = loadSound("assets/inspire.mp3");
  s3 = loadSound("assets/memories.mp3");

  i1 = loadImage("assets/landscape.jpg");
  i2 = loadImage("assets/disk.jpg");
  i3 = loadImage("assets/city.jpg");
  
}

function setup() {
  createCanvas(displayWidth, 615);
  imageMode(CENTER);
  
  
}

function draw() {
  background("#70D6FF");
  image(i1, width/2, height/2, width, height);
  switch (state) {

    case 0:
      text("Acoustic", 100, 100);
      if (!s1.isPlaying()){
        s1.play() ;
      }
      break;

    case 1:
      background("#FF70A6");
      image(i2, width/2, height/2, width, height);
      text("Inspire", 100, 100);
      if (!s2.isPlaying()){
        s2.play() ;
      }
      break;

    case 2:
      background("#FF9770");
      image(i3, width/2, height/2, width, height);
      text("Memories", 100, 100);
      if (!s3.isPlaying()){
        s3.play() ;
      }
      break;
  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;

  function touchStarted(){
    getAudioContext().resume();
  }
}
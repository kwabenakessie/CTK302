let slowmotion ;

function preload() {
  slowmotion = loadSound("assets/slowmotion.mp3");
}

function setup() {
  createCanvas(850, 500);
  textAlign(CENTER);
  slowmotion.play() ;
}

function draw() {
  background("pink");
  fill("blue");
  text(
    "The name of the song is slowmotion, I like it becouse I love slomotion Video",
    250,
    250,
    400,
    400,
   
  );
}

function mouseReleased() {
  if (slowmotion.isPlaying()){
      slowmotion.pause();
  } else {
      slowmotion.playing();
  }
}

function touchStarted(){
  getAudioContext().resume();
}
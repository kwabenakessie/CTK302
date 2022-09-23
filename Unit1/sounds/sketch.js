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
  background("pink") ;
  textSize(30) ;
  fill("blue") ;
  text(
    "The name of the song is slowmotion, \nI like it becouse I love slowmotion Video!",
    100,
    200,
    600,
    600,
   
  );
}

function mouseReleased() {
  if (slowmotion.isPlaying()) {
      slowmotion.pause();
  } else {
      slowmotion.play();
  }
}

function touchStarted(){
  getAudioContext().resume();
}
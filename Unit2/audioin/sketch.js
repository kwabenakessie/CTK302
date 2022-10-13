let mic;
let vol = 0;
let i1;

function preload(){
  i1 = loadImage("assets/1.jpg");
}

function setup() {
  createCanvas(displayWidth, 610);
  imageMode(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background("green");
  image(i1, width/2, height/2, width, height);
  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // text on the screen for debugging
  textSize(18);
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(3),
    10,
    100
  );

  // this moves the box
  //  x = vol*200 ;
  x = map(vol, 0, 1, 0, width);
  rect(x, 200, 100, 50);
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}

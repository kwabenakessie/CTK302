//Declaring the trees
let bigtrees = [];
let bigtree;
let bigtreeTaken = 0;
let maxBigtree = 7;
let mediumtrees = [];
let mediumtree;
let mediumtreeTaken = 0;
let maxMediumtree = 5;
let smalltrees = [];
let smalltree;
let smalltreeTaken = 0;
let maxSmalltree = 3;


//Declaring sounds
let startSound;
let gameSound;
let winSound;
let failSound;
let nurserypotSound;

//Declaring the nursery pot
let nurseryPot;
let nurserypotPos;

//Declaring the background and other image and font asset
let bg;
let title;
let font;
let playagain;
let play;
let save;
let fail;


//Declaring state and timer
let state = 0;
let timer = 0;

function preload() {
  //Adding sounds
  startSound = loadSound('assets/sounds/startgame.wav');
  gameSound = loadSound('assets/sounds/game.wav');
  winSound = loadSound('assets/sounds/wingame.wav');
  failSound = loadSound('assets/sounds/failgame.mp3');
  nurserypotSound = loadSound('assets/sounds/nurserypot.mp3');

  // startSound.loop();
  // startSound.stop();
  // gameSound.loop();
  // gameSound.stop();
  // winSound.loop();
  // winSound.stop();
  // failSound.loop();
  // failSound.stop();
  // nurseryPot.loop();
  // nurseryPotSound.stop();

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  //Setting rmode to center
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);

  //Adding bigtree, meduimtree and smalltree images
  bigtree = loadImage('assets/images/bigtree.png');
  mediumtree = loadImage('assets/images/mediumtree.png');
  smalltree = loadImage('assets/images/smalltree.png');

  // Adding background, images and font assets
  bg = loadImage('assets/images/bg.png');
  title = loadImage('assets/images/title.png');
 playagain = loadImage('assets/images/playagain.png');
  play = loadImage('assets/images/play.png');
  save = loadImage('assets/images/save.png');
  fail = loadImage('assets/images/fail.png');


  //Adding font
  font = loadFont('assets/fonts/fira.ttf')

  // Adding nursery pot
  nurseryPot = loadImage('assets/images/nurserypot.png')

  //Spawn bigtrees
  for (let i = 0; i <= maxBigtree; i++) {
    bigtrees.push(new Bigtree());
  }
  //Spawn mediumtrees
  for (let j = 0; j <= maxMediumtree; j++) {
    mediumtrees.push(new Mediumtree());
  }
  //Spawn smalltrees
  for (let k = 0; k <= maxSmalltree; k++) {
    smalltrees.push(new Smalltree());
  }

  //trees bigtree position
  nurserypotPos = createVector(width / 2, height - 150);
}

function draw() {
  background(220);

  switch (state) {

    case 0: // To play start game sound
      startSound.play();
      state = 1
      break;

    case 1: // start screen
      image(bg, width / 2, height / 2, windowWidth, windowHeight);
      image(title, width / 2, height / 2 - 200, 100 * 3, 50 * 3);
      fill("BLACK");
      textStyle(BOLD);
      // text("Font Style Bold, - 150, 300");
      textFont(font);
      textSize(18);
      text('Climate Stewards, to better the world globally, we need to act locally. Save mother earth from rising tempratures, ACT NOW!! plant as much trees now.', width / 2, height / 2 - 15, 400, 200);
      image(play, width / 2, height / 2 - 10, 75 * 2, 21 * 2);
      // text(mouseX + " , " + mouseY, 350, 50);
      break;

    case 2: // To play game sound
      gameSound.play();
      gameSound.setVolume(0.3);
      state = 3
      break;

    case 3: // Play game
      game();
      break;

    case 4: // To play win game sound
      winSound.play();
      state = 5
      break;

    case 5: // Win game
      image(bg, width / 2, height / 2, windowWidth, windowHeight);
      image(save, width / 2, height / 2 - 200, 100 * 3, 50 * 3);
      fill("BLACK");
      textStyle(BOLD);
      textFont(font);
      textSize(18);
      text('Yes! Yes! you have saved the earth from rising temperatures. Thank you!', width / 2, height / 2 - 15, 400, 200);
      image(playagain, width / 2, height / 2 -10, 75 * 2, 21 * 2);
      break;

    case 6: // To play game sound
      failSound.play();
      state = 7
      break;

    case 7: // lose game
      image(bg, width / 2, height / 2, windowWidth, windowHeight);
      image(fail, width / 2, height / 2 - 200, 100 * 3, 50 * 3);
      fill("BLACK");
      textStyle(BOLD);
      textFont(font);
      textSize(18);
      text('No! No! let us all help to save the earth. Play again to redeem yourself!', width / 2, height / 2 - 15, 400, 200);
      image(playagain, width / 2, height / 2 - 10, 75 * 2, 21 * 2);
      break;
  }
// fill("black");
// text(mouseX + ", " + mouseY, 40, 40);
}



// Setting for clicks
function mouseReleased() {

  switch (state) {
    case 1:
      // if ((mouseX > 287) && (mouseX < 436) && (mouseY > 700) && (mouseY < 750)) {
        state = 2;
        startSound.stop();
      // }
      break;

    case 3:

      break;

    case 5:
      // if ((mouseX > 128) && (mouseX < 273) && (mouseY > 400) && (mouseY < 440)) {
        state = 0;
        resetGame();
        winSound.stop();
      // }
      break;

    case 7:
      // if ((mouseX > 128) && (mouseX < 273) && (mouseY > 400) && (mouseY < 440)) {
        state = 0;
        resetGame();
        failSound.stop();
      // }
      break;


  }
}
// main game
function game() {
  background("white");

  //Display background
  image(bg, width / 2, height / 2 ,  windowWidth, windowHeight);

  //Displays bigtrees falling
  for (let i = 0; i < bigtrees.length; i++) {
    bigtrees[i].display();
    bigtrees[i].move();

    if (bigtrees[i].pos.dist(nurserypotPos) < 80) {
      bigtrees.splice(i, 1);
      bigtreeTaken++;
      nurserypotSound.play();
    }
  }

  //Displays mediumtrees falling
  for (let j = 0; j < mediumtrees.length; j++) {
    mediumtrees[j].display();
    mediumtrees[j].move();

    if (mediumtrees[j].pos.dist(nurserypotPos) < 80) {
      mediumtrees.splice(j, 1);
      mediumtreeTaken++;
      nurserypotSound.play();
    }
  }

  //Displays smalltrees falling
  for (let k = 0; k < smalltrees.length; k++) {
    smalltrees[k].display();
    smalltrees[k].move();

    if (smalltrees[k].pos.dist(nurserypotPos) < 80) {
      smalltrees.splice(k, 1);
      smalltreeTaken++;
      nurserypotSound.play();
    }
  }

  if (bigtrees.length == 0 && mediumtrees.length == 0 && smalltrees.length == 0) {
    state = 4;
  }

  //nursery Pot - change to image
  //fill("green");
  image( nurseryPot, nurserypotPos.x, nurserypotPos.y, 243 / 3, 356 / 3, 75, 105);
  checkForKey();
  if (mouseIsPressed) {
    nurserypotPos.x = mouseX;
    if (nurserypotPos.x <= 0) nurserypotPos.x = 0;
    if (nurserypotPos.x >= width) nurserypotPos.x = width;
  }
  // touchMoved()
}

//Declare Key Functions
function checkForKey() {
  if (keyIsDown(LEFT_ARROW)) {
    nurserypotPos.x -= 5;
    if (nurserypotPos.x <= 0) nurserypotPos.x = 0;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    nurserypotPos.x += 5;
    if (nurserypotPos.x >= width) nurserypotPos.x = width;
  }
  
}

// //Declare touch Functions
// function touchMoved(){
//   valueX = bigtreePos.x -= 5
//   valueY = bigtreePos.x += 5
// }

//Declaring the bigtree class
class Bigtree {
  //Consructor takes properties like colors and position
  constructor() {
    this.pos = createVector(random(width), random(-800, 0));
    this.vel = createVector(0, random(0.8, 2));
    this.col = color(0, 19, 254);
  }

  //Display takes in what you want to showcase like images and shapes
  display() {
    // fill(this.col);
    //add image here
    image(bigtree, this.pos.x, this.pos.y, 75, 125);
  }

  //Move determin the direction and velocity
  move() {
    this.pos.add(this.vel);
    if (this.pos.y >= height) {
      state = 6;
      gameSound.stop();
    }
  }
}

//Declaring the mediumtree class
class Mediumtree {
  //Consructor takes properties like colors and position
  constructor() {
    this.pos = createVector(random(width), random(-800, 0));
    this.vel = createVector(0, random(0.8, 2));
    this.col = color("red");
  }

  //Display takes in what you want to showcase like images and shapes
  display() {
    // fill(this.col);
    //add image here
    image(mediumtree, this.pos.x, this.pos.y, 75, 115);
  }

  //Move determin the direction and velocity
  move() {
    this.pos.add(this.vel);
    if (this.pos.y >= height) {
      state = 6;
      gameSound.stop();
    }
  }
}

//Declaring the smalltree class
class Smalltree  {
  //Consructor takes properties like colors and position
  constructor() {
    this.pos = createVector(random(width), random(-800, 0));
    this.vel = createVector(0, random(0.8, 2));
    this.col = color("yellow");
  }

  //Display takes in what you want to showcase like images and shapes
  display() {
    // fill(this.col);
    //add image here
    image(smalltree , this.pos.x, this.pos.y, 75, 105);
  }
  

  //Move determin the direction and velocity
  move() {
    this.pos.add(this.vel);
    if (this.pos.y >= height) {
      state = 6;
      gameSound.stop();
    }
  }
}

function resetGame() {
  //this will reset parameters to zero

  bigtrees = [];
  bigtreeTaken = 0;
  mediumtrees = [];
  mediumtreeTaken = 0;
  smalltrees = [];
  smalltreeTaken = 0;
  state = 0;
  timer = 0;

  //Spawn bigtrees
  for (let i = 0; i <= maxBigtree; i++) {
    bigtrees.push(new Bigtree());
  }
  //Spawn mediumtrees
  for (let k = 0; k <= maxMediumtree; k++) {
    mediumtrees.push(new Mediumtree());
  }
  //Spawn smalltrees
  for (let j = 0; j <= maxSmalltree; j++) {
    smalltrees.push(new Smalltree());
  }
  
}

//intialising sounds
function touchStarted() {
  getAudioContext().resume();
}

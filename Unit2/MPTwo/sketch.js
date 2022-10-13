let state = 0;
let timer = 0
let x = 0;
let s1, s2, s3;
let i1, i2, i3, i4,i5;
let bg;
let back;
let next;
let font;
let font2;
let travel;

function preload(){

  //font1 = loadFont("assets/rembank.otf");
  font = loadFont("assets/fonts/fira.ttf");
  font2 = loadFont("assets/fonts/semibold.ttf");


  s1 = loadSound("assets/sounds/acoustic.mp3");
  s2 = loadSound("assets/sounds/inspire.mp3");
  s3 = loadSound("assets/sounds/memories.mp3");

  i1 = loadImage("assets/images/portrait.png");
  i2 = loadImage("assets/images/yogurt.png");
  i3 = loadImage("assets/images/monaco.png");
  i4 = loadImage("assets/images/sky.png");
  i5 = loadImage("assets/images/gym.png");
  travel = loadImage("assets/images/travel.png");

  bg = loadImage("assets/images/bg.png");
  back = loadImage("assets/images/back.png");
  next = loadImage("assets/images/next.png");
  
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textFont(font);
  //textFont(font2);
  
  
}

function draw() {
  background("#fdfdff");
  
  switch (state) {
    case 0:
      //background("#ffcb08");
      image(bg,width/2, height/2, width,height);
      fill(0);
      textSize(40);
      fill(random(255), random(255), random(255));
      text("Click to Explore", width/2 - 150, height/2  + 200);
      
      //x += 3;
      //if (x > windowWidth) {
        //x = 0;
      //}

      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 1;
      }

      break;

    case 1:
        background("#fdfdff");
        image(i4, width/2, height - 250, 290, 450);
        image(back, width/2 - 80, height - 515, 120, 65);
        image(next, width/2 + 80, height - 515, 120, 65);
  
        textAlign(LEFT);
        textFont(font2);
        textSize(14);
        text("Travel", width / 2 - 118, height / 2 + 170);
        textFont(font);
        textSize(13);
        fill("black");
        text("The world is a book and those who do not\ntravel read only one page.",
        width/ 2 - 118, height/2 + 200);
        if (!s3.isPlaying()){
          s3.play() ;
        }

        timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 2;
      }
        break;
    
    case 2:
      background("#fdfdff");
      image(i2, width/2, height - 250, 290, 450);
      image(back, width/2 - 80, height - 515, 120, 65);
      image(next, width/2 + 80, height - 515, 120, 65);


      textAlign(LEFT);
      textFont(font2);
      textSize(14);
      text("Eat Healhty", width / 2 - 118, height / 2 + 170);
      textFont(font);
      textSize(13);
      fill("black");
      text("Your diet is a bank account. Good food\nchoices are good investments.",
      width/ 2 - 118, height/2 + 200);
      if (!s3.isPlaying()){
        s3.play() ;
      }

      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 3:
        background("#fdfdff");
        image(i5, width/2, height - 250, 290, 450);
        image(back, width/2 - 80, height - 515, 120, 65);
        image(next, width/2 + 80, height - 515, 120, 65);
  
        textAlign(LEFT);
        textFont(font2);
        textSize(14);
        text("Go to gym", width / 2 - 118, height / 2 + 170);
        textFont(font);
        textSize(13);
        text("All progress takes place outside the \ncomfort zone.",
        width/ 2 - 118, height/2 + 200);
        if (!s3.isPlaying()){
          s3.play() ;
        }

        timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 4;
      }
        break;  

      case 4:
      image(i1, width/2, height - 250, 290, 450);
      image(back, width/2 - 80, height - 515, 120, 65);
      image(next, width/2 + 80, height - 515, 120, 65);


      textAlign(LEFT);
      textFont(font2);
      textSize(14);
      text("Visit the Stadium", width / 2 - 118, height / 2 + 170);
      textFont(font);
      textSize(13);
      fill("black");
      text("I'm a football fan, a sports fan, a fan\nof competition.", width/ 2 - 118, height/2 + 200);
      if (!s3.isPlaying()){
        s3.play() ;
      }

      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 5;
      }
      break;


    case 5:
      background("#fdfdff");
      image(i3, width/2, height - 250, 290, 450);
      image(back, width/2 - 80, height - 515, 120, 65);
      image(next, width/2 + 80, height - 515, 120, 65);


      textAlign(LEFT);
      textFont(font2);
      textSize(14);
      text("My love Architechture", width / 2 - 118, height / 2 + 170);
        textFont(font);
        textSize(13);
        text("A doctor can bury his mistakes, but an \narchitect can only advise his clients \nto plant vines.",
        width/ 2 - 118, height/2 + 200);
      if (!s3.isPlaying()){
        s3.play() ;
      }

      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 0;
      }
      break;
    
    }
}


function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 5) state = 0;

  function touchStarted(){
    getAudioContext().resume();
  }
}
let numberOfTouches ;
let i1, i2, i3;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/1.jpg");
  i2 = loadImage("assets/2.jpg");
  i3 = loadImage("assets/3.jpg");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("no one is touching the screen", 5, 22) ; 
      break ;
      
      case 1: 
       text("it's kind of lonely here", 5, 22) ; 
      image(i1, width / 2, height/ 2 , width, height);
      break ;
      
      case 2:
      text("two fingers are touching the screen", 5, 22) ; 
      image(i2, width / 2, height/ 2 , width, height);
      break ;
      
      case 3:
     text("three are touching the screen", 5, 22) ; 
     image(i3, width / 2, height/ 2 , width, height);
      break ;
    
      
  }
  
}
let x = 0
function setup() {
  createCanvas(1290, 595);
}

function draw() {
background("aqua");
push();
 translate(x, 0);
 avatar();
 x += 0.5;
 if (x > width){
  x = -50;
 }
pop() 
}

function avatar(){
  noStroke();
//clouds
  fill("rgb(248,243,243)");
  ellipse(180, 69, 60, 60);
  
  fill("rgb(248,243,243)");
  ellipse(216, 85, 55, 55);
  
  fill("rgb(248,243,243)");
  ellipse(149, 77, 55, 55);
  
  fill("rgb(248,243,243)");
  ellipse(190, 90, 55, 55);
  
  fill("rgb(248,243,243)");
  ellipse(393, 91, 60, 60);
  
  fill("rgb(248,243,243)");
  ellipse(429, 107, 45, 55);
  
  fill("rgb(248,243,243)");
  ellipse(362, 99, 45, 55);
  
  fill("rgb(248,243,243)");
  ellipse(403, 112, 55, 35);
  
  fill("rgb(248,243,243)");
  ellipse(600, 91, 60, 60);
  
  fill("rgb(248,243,243)");
  ellipse(629, 107, 45, 55);
  
  fill("rgb(248,243,243)");
  ellipse(662, 99, 45, 55);
  
  fill("rgb(248,243,243)");
  ellipse(650, 97, 65, 35);
    
}
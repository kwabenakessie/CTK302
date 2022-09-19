
function setup() {
  createCanvas(750, 400);
}
 
  function draw(){
  c1 = color("#B61605");
  c2 = color("#ff901b");
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
}
  
  noStroke();
  fill("#FF5500");
  fill("#ffe200");
  ellipse(300, 250, 180, 180);
  fill("black");
    
    //sunset grass
  quad(0, 290, 750, 290, 750, 400, 0, 400);
  
  quad(380, 290, 380, 200, 490, 200, 490, 290);
  
  triangle(370, 200, 430, 150, 500, 200);
  quad(95, 290, 100, 150, 115, 150, 120, 290 )
  ellipse(107, 150, 80, 100);
  
  fill("Gray")
  quad(420, 290, 420, 240, 450, 240, 450, 290);
  
  noFill();
  strokeWeight(8);
  stroke("black");
  fill("white");
  noStroke();
  //text(mouseX + ", " + mouseY, 20, 20);
  
  
    
  if (mouseIsPressed) {
 //Rain scene
  background("#C9F8F8");
    
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
    
//Sun
  fill("#E2DC22")
  ellipse(200, 230, 100, 100);
  
    
//grass
  fill("#6EC918"); 
  quad(0, 245, 750, 240, 750, 400, 0, 400);
    
//text
    textSize(12);
    textAlign(LEFT);
    fill("#036068");
    text("The two scene depicts the two main weather season in GHANA. The dry (harmattan) and wet (rainy) Season.I hate harmattan seanson because it can reach tempratures of 40 degrees celsius. ", 50, 300, 500);
    

  //forest borrowed from Lana's code   
  fill("#06A131");
  bezier(-20, 252, 0, 204, 29, 212, 55, 250);
  bezier(-15, 252, 51, 215, 129, 215, 180, 250);
  bezier(386, 250, 505, 216, 606, 217, 599, 253);
  bezier(572, 248, 600, 225, 638, 224, 644, 245);
  bezier(630, 248, 652, 219, 750, 225, 800, 252);
  bezier(617, 253, 650, 203, 675, 219, 691, 249);
}

  //text(mouseX + ", " + mouseY, 20, 20);   
   
}
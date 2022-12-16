var bubbles = [];
let url = "";
let map;

function setup() {
  // let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  
  let key = "1-HpdhSe6iJAsmuWvmNImBaobG7ZbILB7qbddEeBgSSI"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  rectMode(CENTER);
  map = loadImage("asset/map.png");
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Is Africa a continent?"],
        data[i]["How much do you know about Africa?"],
        data[i]["What is the world's second-largest and second-most populous continent"],
        data[i]["How many countries are in Africa"]));
    
    // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("#7593af");

  image(map,1000, 700);
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(continent, Africa, populous,countries) {
    // only the order of these parameters matters!
    this.continent = continent;
    this.Africa = Africa;
    this.populous = populous;
    this.countries = countries; 
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    // stroke("red");
    fill("#fbf7eb");
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("black");
    text(
      this.continent + "\n" + this.Africa + "\n" + this.populous + "\n" + this.countries,
      this.pos.x,
      this.pos.y
    );
  
  this.pos.add(this.vel);
  if(this.pos.x > width) this.pos.x = 0;
    
  }
  
  
}

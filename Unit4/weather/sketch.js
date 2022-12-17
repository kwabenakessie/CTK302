// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let weatherType;
let image1, image2;
let font1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  image1 = loadImage("assets/weather.png");
  image1 = loadImage("assets/cloud.png");
  font1 = loadFont("assets/fira.ttf");
  

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Accra,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=a21e00bdf36317f4c606fdc8c9936475" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  
  temp = weather.main.temp;
  tempRound = Math.round(temp);
  
  weatherDesc = weather.weather[0].description;
  weatherDescCap = weatherDesc[0].charAt(0).toUppercase() + weatherDesc.slice(1)
  
  latitude = weather.coord.lat;
  longitude = weather.cord.lon;
  

}

function draw() {
  switch (state) {
    
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(200);
      fill("rgba(0, 0, 0, 0.5)");
      rect(300, 100, 330,270,20);
      
      fill("white");
      textFont(font1);
      textSize(35);
      text("${tempRound}", 350, 160);
      textSize(35);
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
 

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}

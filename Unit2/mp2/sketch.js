// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
let humidity = 0;
let temp = 0;
let tempc = 0;
let font;
let fontB;
let loct;
let freeze;
let cold;
let normal;
let warm;
let hot;
let wind;
let tempt;
let dots = [];
let maxDots = 500;
let lat;
let long;
let dress;
let note;
let windDes;
let tempDes;
let index;

let highestTemp = 40;
let lowestTemp = 0;
let columns = 0; // numbers between each length of temperature

let whatToWear = [
  "Put on a jacket as shown. It would be very cold",
  "The weather seems to be slightly cold, a sweater would be fine",
  "It seems like a great day, dress up casual",
  "It'll be pretty warm, wear something light",
  "It's going to be hot, put on some shorts and stay hydrated "
];

let windDesc = [
    "calm",
    "light air",
    "light breeze",
    "gentle breeze",
    "moderate breeze",
    "fresh breeze",
    "strong breeze",
    "moderate gale",
    "fresh gale",
    "strong gale",
    "whole gale",
    "storm",
    "hurricane"
]

//
// let imageToWear = [freeze, cold, normal, warm, hot];
let imageToWear = [];

var locationData;

function preload() {
  locationData = getCurrentPosition();
  imageToWear[0] = loadImage('asset/freeze.png');
  imageToWear[1] = loadImage('asset/cold.png');
  imageToWear[2] = loadImage('asset/normal.png');
  imageToWear[3] = loadImage('asset/warm.png');
  imageToWear[4] = loadImage('asset/hot.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  // // this is what calls positionPing function
  // getCurrentPosition(positionPing);

  //Declaing Latitude and Longitude from locationData
  let lat = locationData.latitude;
  let long = locationData.longitude;
  print(lat);
  print(long);

  // // HERE is the call to get the weather.
  //
  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&';
  //
  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';
  //
  var myIDString = 'appid=fd701dfb06f440d56db96fbdd2cbc3cf'; // USE YOUR ID HERE, take out the x's!!!
  //
  var myBigString = myCityString + myIDString;
  //
  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
  textAlign(LEFT);
  imageMode(CENTER);
  rectMode(CENTER);
  font = loadFont('asset/GilroyR.otf')
  fontB = loadFont('asset/GilroySB.otf')
  loct = loadImage('asset/loct.png');
  tempt = loadImage('asset/temp.png');


  wind = loadImage('asset/wind.png');

  for (let i = 0; i <= maxDots; i++) {
    dots.push(new Dot());
  }

}

function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = round(weather.wind.speed);
  temp = round(weather.main.temp);
  humidity = weather.main.humidity;
  desc = weather.weather[0].description;

  // columns = (highestTemp - lowestTemp) / whatToWear.length;
  // print(columns);
  // index = (temp / columns).toFixed(0);
  // print(index);

if (windspeed == 0){
  windex = 0;
} else if (windspeed > 0 && windspeed <= 1) {
  windex = 1;
} else if (windspeed > 1 && windspeed <= 3) {
  windex = 2;
} else if (windspeed > 3 && windspeed <= 5) {
  windex = 3;
} else if (windspeed > 5 && windspeed <= 8) {
  windex = 4;
} else if (windspeed > 8 && windspeed <= 10) {
  windex = 5;
} else if (windspeed > 10 && windspeed <= 13) {
  windex = 6;
} else if (windspeed > 13 && windspeed <= 16) {
  windex = 7;
} else if (windspeed > 16 && windspeed <= 20) {
  windex = 8;
} else if (windspeed > 20 && windspeed <= 23) {
  windex = 9;
} else if (windspeed > 23 && windspeed <= 27) {
  windex = 10;
} else if (windspeed > 27 && windspeed <= 32) {
  windex = 11;
} else if (windspeed > 32) {
  windex = 12;
}




  if (temp <= 8){
    index = 0;
  } else if (temp > 8 && temp <= 16) {
    index = 1;
  } else if (temp > 16 && temp <= 22) {
    index = 2;
  } else if (temp > 22 && temp <= 30) {
    index = 3;
  } else if (temp > 30) {
    index = 4;
  }


print(whatToWear[index]);
print(imageToWear[index]);
}


function draw() {
  // image(bg, width / 2, height / 2, 1920, 1080);
  background(235, 235, 235);

  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:

      // Description goes here and takes in index
      windDes = windDesc[windex];
      tempDes = whatToWear[index];
      note = tempDes + "."

      // what to wear goes here and takes in index
      dress = imageToWear[index];



      //temperature BLock
      stroke(255, 143, 143);
      fill('white');
      rect(width / 2 - 80, height / 2 - 220, 140, 70, 20);

      //Windspeed block
      stroke(143, 219, 255);
      fill('white');
      rect(width / 2 + 80, height / 2 - 220, 140, 70, 20);

      // Text block
      fill('white');
      rect(width / 2, height / 2 + 205 , 300, 200, 20);

      // Image goes HERE
      image(dress, width / 2, height / 2 + 15, 300, 366.67);
      // rect(width / 2 - 160, height / 2, 300, 500);


      noStroke();
      //Location
      textAlign(LEFT);
      image(loct, width / 2 - 135, height / 2 - 290, 432 / 18, 650 / 18);
      fill('Black');
      textFont(font);
      textSize(12);
      text("You are in", width / 2 - 110, height / 2 - 298);
      textFont(fontB);
      textSize(24);
      text(weather.name, width / 2 - 110, height / 2 - 275);

      //Temp and Wind
      image(tempt, width / 2 - 118, height / 2 - 220, 168 / 6, 232 / 6);
      image(wind, width / 2 + 40, height / 2 - 220, 78 / 2, 46 / 2);
      textAlign(CENTER);
      textFont(fontB);
      textSize(22);
      // tempc = round((temp - 32) / 1.8);
      text(temp + "°C", width / 2 - 60, height / 2 - 220);
      text(windspeed + "m/s", width / 2 + 100, height / 2 - 220);
      textFont(font);
      textSize(12);
      text("Temperature", width / 2 - 60, height / 2 - 200);
      text("Windspeed", width / 2 + 100, height / 2 - 200);

      // image(jack, width / 2, height / 2 + 30, 177, 403);
      textAlign(LEFT);
      textFont(fontB);
      textSize(14);
      text("Expectation", width / 2 - 118, height / 2 + 225);
      textFont(font);
      textSize(12);
      text("Today, " + desc + " is expected, with " + windDes + " and humidity of " + humidity + "%. " + note,
        width / 2 + 5, height / 2 + 318, 245, 160);

      // textFont(fontB);
      // textSize(20);
      // text("Description is " + desc, width / 2, height / 2 + 340);


      break;


  }
}

class Dot {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.a = 50
  }

  display() {
    noStroke();
    fill(48, 217, 255, this.a);
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }

  move() {
    this.pos.x = this.pos.x + windspeed;
    if (this.pos.x > width) this.pos.x = 0;
  }
}

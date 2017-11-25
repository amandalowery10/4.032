// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server

var queryResult;

function setup() {
  createCanvas(320, 568);
  background(0);
query();
}

// Run the API call
function query() {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/5c94b1451ec9c4f0b3c46ae2549560a3/33.0370,117.2920';

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

// Request is completed
function gotData(data) {
  // console.log(data);
  queryResult = data;

  // only look at current results:
  var currentWeather = queryResult.currently;
  var minute = queryResult.minutely.data[0]; // this is how to look at the current minute
  var day = queryResult.daily.data[0]; // this is how to look at the current day
  var sunrise = queryResult.daily.data[0].sunriseTime;
  var sunTime = new Date(sunrise*1000);
  //var sunrisehours = sunTime.getHours();

  var sunriseHours = sunTime.getHours();
  console.log("sunrise land",sunriseHours);

  var sunset = queryResult.daily.data[0].sunsetTime;
  var nightTime = new Date(sunset*1000);


  // a few variables for text formatting
  var xPos = 20;
  var yPos = 40;
  var yGap = 60;
  var textSizeLarge = 40;
  var textSizeSmall = 14;

  // List relevant items of information
  fill(255);
  textStyle(BOLD);

  // The location is not live data, just entered manually
  textSize(textSizeSmall);
  text("Location",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text("Cambridge",20, yPos);
  yPos+=yGap;

  textSize(textSizeSmall);
  text("Weather",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.summary,20, yPos);
  yPos+=yGap;

  textSize(textSizeSmall);
  text("Temperature",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.temperature + "º",20, yPos);
  yPos+=yGap;

  textSize(textSizeSmall);
  text("Precipitation",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.precipIntensity + "%",20, yPos);
  yPos+=yGap;

  textSize(textSizeSmall);
  text("Humidity",20, yPos);
  yPos+=textSizeLarge;
  textSize(textSizeLarge);
  text(currentWeather.humidity + "%",20, yPos);
  yPos+=yGap;



}

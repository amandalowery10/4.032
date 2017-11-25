function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  hourInc=400/12;
  hourWidth=400*(4/9);

  minInc=400/60;
  minWidth=400*(3/9);

  secStart=400*(7/9);

  secInc=400/60;


  noStroke();
  fill(0);

  rect(0,0, hourWidth, twelveHour()*hourInc);


  fill(100);
  rect(hourWidth, 0, minWidth, minute()*minInc);


  fill(200);
  rect(secStart, 0, width, second()*secInc);

  textSize(150);
  stroke(0);
  strokeWeight(5);
  fill(255);

  textAlign(CENTER, CENTER);

  text(twelveHour(), hourWidth/2, height/2);

  textSize(80);

  minCenter=400*(11/18);
  secCenter=400*(8/9)

  text(minute(), minCenter, height/2);

  textSize(50);

  text(second(), secCenter, height/2);

}


// return hours that read 1 through 12 rather than 0 through 23
function twelveHour() {
  var h = hour() % 12;
  if (h === 0) {
    h = 12;
  }
  return h;
}


// format hours and minutes
function hoursMinutes() {
  return nf(twelveHour(), 2) + ':' + nf(minute(), 2);
}


// format hours, minutes, and seconds
function hoursMinutesSeconds() {
  return hoursMinutes() + ':' + nf(second(), 2);
}

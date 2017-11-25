function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  secInc=540/60;
  minInc=500/60;
  hourInc=240/12;

  translate(width/2, height/2);
  stroke(0);
  fill(0);
  ellipse(0,0, 150, 150+hourInc*twelveHour());

  stroke(120);
  fill(120);

  rotate(QUARTER_PI);
  ellipse(0,0, 40+minute()*minInc, 75);

  stroke(220);
  fill(220);

rotate(HALF_PI);
  ellipse(0, 0, 20+second()*secInc, 20);






  stroke(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  rotate(5*QUARTER_PI);
  text(hoursMinutesSeconds(), 0,0);
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

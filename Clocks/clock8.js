function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  strokeCap(SQUARE);
}


function draw() {
  background(255);

  push();
  translate(width/2, height/2);
  noFill();
  stroke(0);

  var innerSize = 60;

  push();
  strokeWeight(6);
  fill(0);
  var hourSize = 160;
  var hourAngle = map(hour() % 12,  0, 12,  0, TAU);
  rotate(hourAngle);
  ellipse(0,-hourSize, 40,40);
  pop();

  push();
  strokeWeight(3);
  stroke(100);
  fill(100);
  var minuteSize = 160;
  var minuteAngle = map(minute(),  0, 60,  0, TAU);
  rotate(minuteAngle);
  ellipse(0, -minuteSize, 30, 30);
  pop();

  push();
  strokeWeight(1);
  stroke(200);
  fill(200);
  var secondSize = 160;
  var secondAngle = map(second(),  0, 60,  0, TAU);
  rotate(secondAngle);
  ellipse(0, -secondSize, 20,20);
  pop();

  pop();

  stroke(0);
  strokeWeight(3);
  fill(255);
  textSize(30);
  text(hoursMinutesSeconds(), width/2, height/2);
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

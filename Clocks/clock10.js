function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  hourInc=400/12;
  minInc=300/60;
  secInc=300/60;

  stroke(0);
  fill(0);
  triangle(0,height, hour()*hourInc, height, 0,(400- hour()*hourInc));
	fill(255);
  triangle(width, height, 100, height, height, 100);
  triangle(0, 0, 0, 300, 300, 0);

  stroke(120);
  fill(120);
  triangle(0,0, 0, minute()*minInc, minute()*minInc, 0);

  stroke(220);
  fill(220);
  triangle(width, height, 100+(60-second())*secInc, 400, 400, 100+(60-second())*secInc);

  stroke(200);
  textSize(28);
  fill(200);
  textAlign(CENTER, CENTER);
 	text(hoursMinutesSeconds(), 200, 200);

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

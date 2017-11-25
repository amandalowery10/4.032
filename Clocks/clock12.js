function setup() {
  createCanvas(500, 500);
}
setInterval(time_timer, 1000);
function time_timer() {}

value = 0;

function draw() {
  background(0);

  var date = new Date(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds(),
  ms = date.getMilliseconds();

  hourInc=400/12;
  minInc=300/60;
  secInc=300/60;

  if (value == 0) {
    stroke(200);
    textSize(100);
    textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
    fill(color('#87CEFA'));
    textAlign(CENTER, CENTER);
    text(hoursMinutesSeconds(), 250, 250);

    stroke(100);
    textSize(50);
    textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
    fill(100);
    textAlign(CENTER, CENTER);
    text('The time is', 250, 100);

    stroke(100);
    textSize(50);
    textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
    fill(100);
    textAlign(CENTER, CENTER);
    text('in the USA (EST)', 250, 400);


  } else {
    var spaintime = hours + 6;
    stroke(200);
    textSize(100);
    textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
    fill(color('#87CEFA'));
    textAlign(CENTER, CENTER);
    text(spaintime + ':' + minutes + ':' + seconds, 250, 250);

    stroke(100);
    textSize(50);
    textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
    fill(100);
    textAlign(CENTER, CENTER);
    text('Son las', 250, 100);

    stroke(100);
    textSize(50);
    textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
    fill(100);
    textAlign(CENTER, CENTER);
    text('en Espana', 250, 400);

  }
}

function mouseClicked() {
  if (value == 0) {
    value = 255;

  } else {
    value = 0;
  }

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

function spaintimeMinutesSeconds(){
    return hoursMinutes() + ':' + nf(second(), 2);
}

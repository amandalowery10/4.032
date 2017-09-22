console.log("it should work");

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  strokeCap(SQUARE);
  textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
}

function draw() {
  translate(width / 2.0, height / 2.0);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds(),
    i,
    v,
    t;
  var hours = 12;

  background(color('#c20000'));

  // Draw clock
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(0, 0, 450, 450);

  // Minute Markers
  fill(0);
  strokeWeight(1);

  var circleRadius = 210;


  // Hour number
  textSize(40);
  fill(0);
  noStroke()

  var numberRadius = 110;
  for (i = 0; i < 12; i++) {
    if(i<(hours%12-2)||i>(hours%12)) {
    }
    else {
      v = p5.Vector.fromAngle((i - hours%12 + 16) / 12.0 * TAU - HALF_PI);
      v.mult(numberRadius);
      if(i+1 == hours%12){fill(color(255,0,0));}
      else{fill(0);}
      text(i + 1, v.x, v.y);
    }
  }

  // Minute Number
  textSize(15);
  fill(0);
  noStroke()
  var numberRadius = 165;
  for (i = 0; i < 60; i++) {
    if(i<(minutes-4)||i>(minutes+2)) {
    }
    else {
      v = p5.Vector.fromAngle((i - minutes + 16) / 60.0 * TAU - HALF_PI);
      v.mult(numberRadius);
      if(i+1 == minutes){fill(color(255,0,0));}
      else{fill(0);}
      text(i + 1, v.x, v.y);
    }
  }


  // Second Number
  textSize(10);
  fill(0);
  noStroke()
  var numberRadius = 200;
  for (i = 0; i < 60; i++) {
    if(i<(seconds-4)||i>(seconds+2)) {
    }
    else {
      v = p5.Vector.fromAngle((i - seconds + 16) / 60.0 * TAU - HALF_PI);
      v.mult(numberRadius);
      if(i+1 == seconds){fill(color(255,0,0));}
      else{fill(0);}
      text(i + 1, v.x, v.y);
    }
  }




}

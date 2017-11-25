function setup() {
  createCanvas(500, 500);
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

  background(0);

  // Minute Markers
  fill(0,255,0);
  strokeWeight(1);

  var circleRadius = 210;

  for (i = 0; i < 60; i++) {
    v = p5.Vector.fromAngle((i + 1) / 60.0 * TAU - HALF_PI);

    v.mult(circleRadius);
    if (i % 5 == 4) {
      ellipse(v.x, v.y, 5, 5);
    } else {
      ellipse(v.x, v.y, 1, 1);
    }
  }


  // Hour hand
  stroke(0, 255, 0);
  strokeWeight(6);
  t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(127);
  line(0, 0, v.x, v.y);

  // Minute hand
  strokeWeight(4);
  t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(205);
  line(0, 0, v.x, v.y);

  // Second hand
  stroke(0, 255, 0);
  strokeWeight(2);
  t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
  v = p5.Vector.fromAngle(t);
  v.mult(210);
  line(0, 0, v.x, v.y);



}

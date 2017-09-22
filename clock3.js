function setup() {
    createCanvas(500, 500);
}

function draw() {
  translate(width / 2.0, height / 2.0);

  // Draw clock
  fill(0);
  ellipse(0, 0, 450, 450);

  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ms = date.getMilliseconds();

    // Hour circle
    noStroke();
    fill(255);
    t = (hours + minutes / 60 + seconds / 3600) * TAU / 12 - HALF_PI;
    v = p5.Vector.fromAngle(t);
    v.mult(180);
    ellipse(v.x, v.y, 150,150);

    // New Minute hand
    noStroke();
    fill(255);
    t = (minutes + seconds / 60 + ms / 1000 / 60) * TAU / 60 - HALF_PI;
    v = p5.Vector.fromAngle(t);
    v.mult(180);
    ellipse(v.x, v.y, 100,100);

    // Second hand
    noStroke();
    fill(255);
    strokeWeight(1);
    t = (seconds + ms / 1000) * TAU / 60 - HALF_PI;
    v = p5.Vector.fromAngle(t);
    v.mult(210);
    ellipse(0, 0, v.x, v.y);

}

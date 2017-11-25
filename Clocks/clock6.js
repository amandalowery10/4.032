function setup() {
  // Create the canvas
  createCanvas(500, 500);
  background(color('#87CEFA'));

  // Set colors
  fill(204, 101, 192, 127);
  noStroke();
}

function draw(){
  background(color('#87CEFA'));
  frameRate(1);

  var date = new Date(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds(),
  ms = date.getMilliseconds();

    var x =  500/60*seconds;
    var y =5;
    fill(color('yellow'));
    ellipse(x, y, 150, 150);

  // fill(255);
  // ellipse(500, 50, 200, 50)

  for (var i = 0; i < hours; i++) {
    var x = random(150,500);
    var y = random(0,150);
    fill(255);
    ellipse(x, y, 200, 50)
  }

  for (var i = 0; i < minutes; i++) {
    var x = random(1,500);
    var y = random(485,500);
    fill(color('green'));
    ellipse(x, y, 12, 121);
  }
}

var angleS = 0.0;
var angleM = 0.0;
var angleH = 0.0;
var sx = 0
var sy = 0;
var mx = 0
var my = 0;
var hx = 0
var hy = 0;

function setup() {
    createCanvas(500, 500);
    textFont('Futura, Avenir, Helvetica, Georgia, Sans-Serif');
}

function draw() {
    background(0); //bl ack
    translate(width / 2, height / 2); // origin at the middle
    fill(240); // gray
    strokeWeight(2);
    stroke(0);
    ellipse(0, 0, 400, 400); // clock

    angleS = map(second(), 0, 60, 0, TWO_PI) - HALF_PI; // aling second to start at the top
    angleM = map(minute(), 0, 60, 0, TWO_PI) - HALF_PI; // aling minute to start at the top
    angleH = map(hour(), 0, 24, 0, TWO_PI * 2) - HALF_PI; // aling hour to start at the top

    sx = cos(angleS) * 165; // second x
    sy = sin(angleS) * 165; // second y
    mx = cos(angleM) * 120; // minute x
    my = sin(angleM) * 120; // minute y
    hx = cos(angleH) * 60; // hour x
    hy = sin(angleH) * 60; // hour y

    noStroke();
    textFont("Futura");

    textSize(28);
    fill(color(231, 76, 60)); // red - second
    text(second(), sx, sy);

    textSize(36);
    fill(color(46, 204, 113)); // green - minute
    text(minute(), mx, my);

    textSize(60);
    fill(color(67, 103, 140)); // blue - hour
    text(hour(), hx, hy);

}

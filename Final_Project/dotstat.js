p.setup = function() {
  p.createCanvas(400, 400);
  console.log("dotsetup");
}

p.draw = function(){
  p.background('#B0E0E6');
  drawdots();
}

function drawdots(){
  fill(255);
  ellipse(252, 144, 72, 72);

}

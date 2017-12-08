var piGraph = function(p){
  var angles = [36,108,216];
  var colors = ["#ddf5f8","#80c1ca","#5199a3"]
  p.setup = function() {
    p.createCanvas(window.innerWidth, 500);
    console.log("piChart");

  }

  p.draw = function draw() {
    // p.background(100);
    p.noStroke();
    p.textFont("Futura");
    p.fill('white');
    p.textSize(40);
    p.text("Cost Breakdown",480,50);
    pieChart(300, angles);
    drawLabels();
  }

  var drawLabels = function(){
    p.noStroke();
    p.textFont("Futura");
    p.fill('white');
    p.textSize(25);
    p.text("indirect costs",300,200);
    p.text("direct non-medical care",480,460);
    p.text("direct medical care",p.width * 2 /3,280);
  }

  var pieChart = function (diameter, data) {
    var lastAngle = 0;
    for (var i = 0; i < data.length; i++) {
      // var gray = p.map(i, 0, data.length, 0, 255);
      p.fill(colors[i]);
      p.stroke(colors[i]);
      p.arc(p.width/2, p.height/2, diameter, diameter, lastAngle, lastAngle+p.radians(angles[i]));
      lastAngle += p.radians(angles[i]);
    }
  }

}

var pieChart = new p5(piGraph,"piChart");

var fundingGraph = function(p){
  var leftData = [79,156,162,277,394];
  var rightData = [1136,200,1,83,333];
  var leftLabels = ["$79M","$156M","$162M","$277M","$394"];
  var rightLabels = ["1136 people","azz","now","let","that","mutha"];

  p.setup = function() {
    p.createCanvas(850, 300);
    console.log("setup");
  }

  p.draw = function(){
    p.background('#B0E0E6');
    drawBars(leftData,leftLabels,rightData,rightLabels);
  }

  function drawBars(leftData,leftLabels,rightData,rightLabels){

    var centerX = p.width/2;
    var numBars = leftData.length;
    var barHeight = p.height/(numBars);
    var maxLeft = leftData.reduce(function(a, b) {return Math.max(a, b);});
    var maxRight = rightData.reduce(function(a, b) {return Math.max(a, b);});

    var normalizedLeft = [];
    var normalizedRight = [];
    // Normalize datasets
    for(var i=0;i<leftData.length;i++){
      normalizedLeft[i] = leftData[i]/maxLeft;
      normalizedRight[i] = rightData[i]/maxRight;
      // console.log("drawing",leftData[i],rightData[i],maxLeft,maxRight);
    }

    // Draw Left and right bars
    var y = 0;
    for (var i=0; i < leftData.length;i++){

      //Draw left bar
      var leftWidth = normalizedLeft[i]*(p.width/2)

      p.rect(centerX - leftWidth,y,leftWidth,barHeight);
      p.fill('#5199A3')


      //Draw right bar
      var rightWidth = normalizedRight[i] * (p.width/2)
      p.rect(centerX,y,rightWidth,barHeight);
      p.text(leftLabels[i], centerX-(leftWidth/2), y+ (barHeight/2));

      y += barHeight;

    }
  }

}

var myFundingGraph = new p5(fundingGraph,"myChart");

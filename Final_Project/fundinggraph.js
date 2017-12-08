var fundingGraph = function(p){
  var leftData = [79,156,162,277,394];
  var rightData = [1136,200,1,83,333];
  var leftLabels = ["$79M","$156M","$162M","$277M","$394M"];
  var rightLabels = ["1136 people","200 people","1 person","83 people","333 people"];
  var barLabels = ["autism","child diabetes","muscular dystrophy","leukemia","pediatric AIDS"];
  var barState = [0,0,0,0,0];

  p.setup = function() {
    //p.createCanvas(1000, 400);
    canvas = p.createCanvas(window.innerWidth, 400);
    console.log("setup");
  }

  p.draw = function(){
    //p.background('#B0E0E6');
    drawBars(leftData,leftLabels,rightData,rightLabels);
  }

  function drawBars(leftData,leftLabels,rightData,rightLabels){

    var centerX = 2* p.width/3;
    var offset = 10;
    var numBars = leftData.length;
    var y = 125;
    var barHeight = (p.height-y)/(numBars);
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
    p.push();
    p.fill("#5199A3"); // Fill inside
    p.noStroke(); // border
    p.rect(0,0,centerX-offset,100);
    p.rect(centerX,0,p.width-centerX,100);
    p.pop();
    p.textFont("Futura");
    p.fill('white');
    p.textSize(22);
    p.text("research funding",p.width/2+20,60);
    p.text("# of kids that are affected",centerX + (p.width-centerX)-800/2,60);
    p.text("(out of 100,000)",centerX + (p.width-centerX)-800/2,80);

    for (var i=0; i < leftData.length;i++){
      p.push();
      p.fill('#80C1CA');
      p.stroke('#B0E0E6');
      //Draw left bar
      var leftWidth = normalizedLeft[i]*(p.width/3)

      p.rect(centerX - leftWidth -offset,y,leftWidth,barHeight);
      //p.fill('#5199A3');


      //Draw right bar
      var rightWidth = normalizedRight[i] * (p.width/3)
      p.rect(centerX,y,rightWidth,barHeight);
      // p.pop();
      var intersectLeft = p.mouseX > centerX-leftWidth-offset && p.mouseX < centerX-offset && p.mouseY < y+barHeight && p.mouseY > y;
      var intersectRight = p.mouseX > centerX && p.mouseX < centerX+rightWidth && p.mouseY > y && p.mouseY < y+barHeight;
      if(intersectLeft || intersectRight){
        barState[i] = 1;
      }

      if (barState[i] == 1){
        // Draw text labels
        p.fill('white');
        p.noStroke();
        //p.text(leftLabels[i], centerX-(leftWidth/2)-27, y+ (barHeight/2));
        p.text(leftLabels[i], centerX-90, y+ (barHeight/2));
        if (rightWidth > 200){
            p.text(rightLabels[i], centerX+(rightWidth/2)-10, y+ (barHeight/2));
        } else{
          p.text(rightLabels[i], centerX+rightWidth+20, y+ (barHeight/2));
        }
      }


      p.pop();


      // Draw label
      // p.text("Label here", 10, y+ (barHeight/2));
      p.text(barLabels[i],130, y+(barHeight/2)); // Change labels here
      y += barHeight;


    }
  }

}

var myFundingGraph = new p5(fundingGraph,"myChart");

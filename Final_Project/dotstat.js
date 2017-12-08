var dotstat = function(p){
  var showText = false;
  var boyImg = p.loadImage("boy.svg");
  var girlImg = p.loadImage("white_girl.svg");
  var whiteGirlImg = p.loadImage("dark_blue_girl.svg");
  var hoverState = false;

  p.setup = function() {
    p.createCanvas(window.innerWidth, 500);
    console.log("dotsetup");
  }

  p.draw = function(){
    p.background('#B0E0E6');
    p.noStroke();
    drawdots();
    drawBoys();
    drawGirl();
  }

  function drawdots(){
    p.fill(255);
    var rows = 8;
    var columns = 10 ;
    var x = 40;
    var y = 40;
    var r = 26;
    for(var row = 1;row<rows;row++){
      if(row == 7){
        for (var col=1;col<8;col++){
          p.ellipse(x*col,y*row, r, r);
        }
      }
      else{
        for (var col=1;col<columns;col++){
          if (row == 1 && col == 1){
            p.push();
            p.fill("#1B707C");
            p.ellipse(x*col,y*row, r, r);
            p.pop();
          }else{
            p.ellipse(x*col,y*row, r, r);
          }
        }
      }
    }

    if(p.mouseX>x && p.mouseX<x+r/2 && p.mouseY>y && p.mouseY <y+r/2){
      showText = true;
    }


    p.textFont("Futura");
    p.textSize(22);
    var statText = "1 in 68 kids in the US are diagnosed with autism.";
    p.text(statText,(p.width/2)-200,75);

    if (showText){
      p.textSize(22);
      p.textFont("Futura");
      var story = "My little brother, Logan, is autistic."
// \n \ He likes legos and pizza bites.
// He has autism."
      p.text(story,((p.width/2)-200),125
    )
      p.fill("#5199A3");
      p.ellipse(x, y, r, r);

    }
  }

  function drawBoys(){
    var numBoys = 5;
    var x = 30;
    var spacing = 40;
    var width = 20;
    var height = 94;
    var y = 350
    for (var i = 0;i<numBoys;i++){
      p.image(boyImg,x,y,boyImg.width/2,boyImg.height/2);
      x += spacing;
    }
  }

  function drawGirl(){
    var topLeftX = 230;
    var topLeftY = 360;
    var height = 65;
    var width = 30;
    var bottomRightX = topLeftX+width;
    var bottomRightY = topLeftY+height;


    var intersect = p.mouseX > topLeftX && p.mouseX < bottomRightX && p.mouseY > topLeftY && p.mouseY < bottomRightY;
    p.fill(255);
    p.textSize(22);
    p.text("Boys are 5x as likely to be diagnosed with autism than girls.",440,350);

    if (hoverState || intersect){
      hoverState = true;
      p.image(girlImg,topLeftX,topLeftY,width,height);
      p.textSize(22);
      p.text("It is more difficult to detect autism in girls than boys.",(p.width/2)-200,400);

    }else{
      p.image(whiteGirlImg,topLeftX,topLeftY,width,height);
    }
  }
}


var newdotstat = new p5(dotstat,"dotStat");

function setup() {
  // Create the canvas
  createCanvas(500, 500);
  background(color('#87CEFA'));

  // Set colors
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

}
var petals = [];
//[x,y,w,h]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function draw(){
  translate(width / 2.0, height / 2.0);
  var date = new Date(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds(),
  ms = date.getMilliseconds();

  fill(color('yellow'));
  ellipse(0, 0, 150, 150);

  // flower
  noStroke();
  for (var i = 0; i < 60; i ++) {
    fill(255);
    ellipse(0, 120, 11, 100);
    rotate(PI/30);
  }



  //Minute petal
  for (var i = 0; i < 60; i ++) {
    if (minutes%60 + 30 ==i){
      fill(color('orange'));
    }
    else{
      fill(color('white'));
    }
    ellipse(0, 140, 12, 121);
    rotate(PI/30);
  }



  //Seconds petal
  for (var i = 0; i < 60; i ++) {
    if (seconds%60 + 30 ==i){
      fill(color('#87CEFA'));
    }
    else{
      fill(color('white'));
    }
    ellipse(0, 140, 12, 121);
    rotate(PI/30);
  }

  //Hour petal
    for (var i = 0; i < 12; i ++) {
      if (hours%12 + 6 ==i){
        fill(color('red'));
        ellipse(0, 140, 12, 121);
      }

      rotate(PI/6)

    }




  // if(petals.length < seconds ){
  //   console.log(seconds,petals.length);
  //   var needToAdd = seconds - petals.length
  //   for(var i = 0; i < needToAdd; i++){
  //     var new_petal = [getRandomInt(width/3,width), getRandomInt(0,200), 11, 100];
  //     petals.push(new_petal);
  //   }
  //
  //   for (var i = 0;i < petals.length;i++){
  //     var petal = petals[i];
  //     //console.log(petals);
  //     ellipse(petal[0],petal[1],petal[2],petal[3]);
  //   }
  // }





}

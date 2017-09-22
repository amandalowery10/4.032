function setup() {
    createCanvas(500, 500);
}

  function draw() {
  	background (255);

  	var H = hour ();
  	var M = minute();
  	var S = second ();

  	fill (96, 139, 100);
  	triangle (M, 10, H, height/2,S*5, width/2);

    fill(100,50,100);
    triangle (M, 5, H, height/2, S*5, width/2);
}

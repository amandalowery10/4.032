function setup() {
  createCanvas(500, 500);
}

setInterval(time_timer, 1000);
function time_timer() {

  var date = new Date(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds(),
  ms = date.getMilliseconds();

  //length of bars
  var hour_len = hours * 500 / 12,
  min_len = hour_len * minutes / 60,
  sec_len = min_len * seconds / 60;

  stroke(color('#96C0CE'));
  fill(color('#96C0CE'));
  rect(0, 0, hour_len, 500);

  stroke(color('#BEB9B5'));
  fill(color('#BEB9B5'));
  rect(0, 0, min_len, 500);

  stroke(color('#74828F'))
  fill(color('#74828F'));
  rect(0, 0, sec_len, 500);

  noStroke();
  textSize(28);
  fill(color('#BEB9B5'));
  text(seconds + '\n' +'secs', sec_len-60, 200, 1000, 1000);

  noStroke();
  textSize(28);
  fill(color('#96C0CE'));
  text(minutes + '\n' +'mins', min_len-60, 200, 1000, 1000);

}

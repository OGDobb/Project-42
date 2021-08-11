var hr, min, sec;

var hrAngle, minAngle, secAngle;


function setup() {
  createCanvas(800,800);
  
  

  
}

function draw() {
  background(0);  
  drawSprites();

  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);
  console.log(hr);
  hrAngle = map(hr, 0, hr%12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);

  translate(400,400);
  push();
  stroke(255,0,0);
  strokeWeight(7);
  rotate(hrAngle)
  line(0,0,0,-100);
  pop();

  
  push();
  stroke(0,0,255);
  strokeWeight(7);
  rotate(minAngle)
  line(0,0,0,-125);
  pop();

  push();
  stroke(0,255,0);
  strokeWeight(7);
  rotate(secAngle)
  line(0,0,0,-150);
  pop();
  
  
  ellipseMode(RADIUS);

  push();
  stroke(255,0,0);
  strokeWeight(7);
  arc(0, 0, 150 ,150, 0, hrAngle);
  pop();

  push();
  stroke(0,0,255);
  strokeWeight(7);
  //arc(0, 0, 160 ,160, 0, minAngle);
  pop();

  push();
  stroke(0,255,0);
  strokeWeight(7);
 //arc(0, 0, 170 ,170, 0, secAngle);
  pop();
}
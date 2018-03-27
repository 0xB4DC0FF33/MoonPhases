var t = 0;
var side = 1;
var p1 = 0;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);
  fill(255);
  translate(width/2, height/2);

  beginShape();
  vertex(0, -50);
  p1 = -70*sin(t*0.1);
  if (side == 1) {
    bezierVertex(70, -50, 70, 50, 0, 50);
    bezierVertex(p1, 50, p1, -50, 0, -50);
  } else if (side == 2) {
    bezierVertex(-p1, -50, -p1, 50, 0, 50);
    bezierVertex(-70, 50, -70, -50, 0, -50);
  }
  endShape();

  if(p1<-68) {
    side = 1
  }
  if(p1>68) {
    side = 2
  }
  t++;
}

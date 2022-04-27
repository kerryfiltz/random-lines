function setup() {
  createCanvas(460, 460);
  frameRate(1);
}

function draw() {
  background('#2d2a32');
  var step = 20;
  
  rectMode(CENTER);
  noStroke();
  fill('#29262E')
  rect(300,300,420,420,10)
  
  for(var x=20; x<=420; x=x+step) {
    for(var y=20; y<=420; y=y+step){
      strokeCap(PROJECT);
      strokeWeight(3);
      if(random()>0.5) {
        stroke('#ddd92a')
        line(x,y,x+step,y+step);
      } else {
        stroke('#fafdf6')
        line(x+step,y,x,y+step);
      }
    }
  }
}

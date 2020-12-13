var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);

  rect2=createSprite(100,200,40,40);
  rect2.velocityX=2;
}


function draw() {
  background(0);
  
  if(rect2.x-rect1.x<rect2.width/2+rect1.width/2&&rect1.x-rect2.x<rect2.width/2+rect1.width/2){
    rect2.velocityX=rect2.velocityX*(-1);
  }
  drawSprites();
}
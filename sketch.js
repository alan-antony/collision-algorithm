var movingRect,fixdRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(800,200,80,40);
  movingRect.shapeColor="blue";
}

function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2) {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }  
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  drawSprites();
}
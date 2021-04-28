var ball1 ;
var ball2;
var distanceX, distanceY;

function setup() {
  createCanvas(800,400);
  ball1= createSprite(400, 200, 50, 50);
  ball2= createSprite(300,200,40,40);
  ball1.shapeColor ="green";
  ball2.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ball1.y = mouseY;
  ball1.x = mouseX;
 // console.log(ball1.y-ball2.y);
 distanceX = (ball1.width+ball2.width)/2;
 distanceY = (ball1.height+ball2.height)/2;
  if(ball1.x-ball2.x <distanceX && ball2.x-ball1.x <distanceX && ball1.y-ball2.y<distanceY && ball2.y-ball1.y<distanceY){
    ball1.shapeColor ="pink";
    ball2.shapeColor = "red";
  }
  else{
    ball1.shapeColor ="green";
  ball2.shapeColor = "blue";
  }
  

}
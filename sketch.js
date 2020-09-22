var wall,thickess;
var bullet,speed,weight;




function setup() {
  createCanvas(1600,400);
speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)
bullet=createSprite(50,200,50,5)
bullet.velocityX = speed
bullet.shapeColor = "purple"
wall=createSprite(1200,200,thickess,height/2);
wall.shapeColor =0
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickess*thickess*thickess);
if (damage>10){

  wall.shapeColor=color(255,0,0)
}
if (damage<10){

  wall.shapeColor=color(0,255,0)
}

  }

  drawSprites();
}
function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false
}
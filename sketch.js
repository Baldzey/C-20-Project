var car, wall;

var speed, weight;



function setup() {
  createCanvas(1600,400);
 car = createSprite(200, 200, 50, 50);
 wall = createSprite(1500,200,60, height/2);

speed=random(55,90)
weight=random(400,1500)



}

function draw() {
  background("pink");
  wall.shapeColor = "black"
  car.velocityX = speed;
car.collide(wall);
  if(wall.x - car.x < (car.width + wall.width) / 2){
 car.velocityX = 0;
 
 var damage = 0.5 * weight * speed * speed/22509;

 if(damage < 100){
car.shapeColor = "green"
}

if(damage < 180){
car.shapeColor = "yellow"
}

if(damage > 180){
  car.shapeColor = "red"
}




  }
  


  drawSprites();
}
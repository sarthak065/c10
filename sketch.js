var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png") 
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(600,300);
  
  sea=createSprite(220,20,600,10);
  sea.addImage(seaImage)
  sea.velocityX=-2;
 
 
 
 
 
 
  ship=createSprite(270,180,20,20)
  ship.addAnimation("ship",shipImg)
  
ship.scale=0.2

}
function draw() {
  
  background("white")
 
  ship.velocityX = -1;




if (sea.x < 0) {
  sea.x = sea.width / 2;
}

ship.collide(sea);
drawSprites() 
  
}  
  
  

  
  
  




 

  

  
  
  




 

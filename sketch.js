var ship,shipImage
function preload(){
shipImage= loadAnimation ("ship-1.png")
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(100,200,10,10)
  ship.addAnimation ("nagashree",shipImage)
  ship.scale = 0.25
}

function draw() {
  background("blue");
 drawSprites ()
}
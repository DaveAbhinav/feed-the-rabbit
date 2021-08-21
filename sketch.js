var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg;
var apple,leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  var sprites = Math.round(random(1,2))
  if(frameCount%80 === 0){
    if(sprites === 1){
      spawnApples();
    }
    else if(sprites === 2){
      spawnLeaf();
    }
  }

  drawSprites();
}

function spawnApples(){
apple = createSprite(Math.round(random(10,390)),10,20,20);
apple.addImage(appleImg);
apple.scale = 0.09;
apple.velocityY = 5;
}

function spawnLeaf(){
  leaf = createSprite(Math.round(random(10,390)),10,20,20);
  leaf.addImage(leafImg);
  leaf.scale = 0.08;
  leaf.velocityY = 5;
  }
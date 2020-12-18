
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 
}



function setup() {
  createCanvas(600,600);
 
  // creating ground sprite and giving its velocity
  ground=createSprite(30,550,2000,20);
  ground.velocityX=-4;
 
  // creating monkey sprite
  monkey=createSprite(40,480);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.16;
  
  
  // giving value to the score variable and survival time
   score=0;
  survivalTime=0;
  
  //creating groups for food and obstacles
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
background("lightblue");
  
  
  //resetting ground's position
  if(ground.x>0){
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground);
  
  
  //condition to make monkey jump
 if(keyDown("space") && monkey.y>400){
   monkey.velocityY=-17;
 }
  //giving gravity to monkey
  monkey.velocityY=monkey.velocityY+0.8;
  
  food();
  obstacles();
  drawSprites();
  
  
  //displaying scores
  textSize(20);
  fill("white");
  strokeWeight(3);
  stroke("green");
  text("SCORE :" +score,450,45);
  
  //displaying survival time
  textSize(20);
  fill("white");
  strokeWeight(2.6);
  stroke("red");
  survivalTime= Math.round(frameCount/frameRate());
  text("SURVIVAL TIME:"+survivalTime,10,45);
  
}

//function to create tasty bananas
function food(){
  if(frameCount % 80===0){
    banana=createSprite(600,Math.round(random(150,400)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.17;
    banana.lifetime=600;
    FoodGroup.add(banana);
  }
}

// function to create stones on the way
function obstacles(){
  if(frameCount % 150===0){
    obstacle=createSprite(600,505);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.lifetime=200;
    obstacle.scale=0.2;
  }
  
}






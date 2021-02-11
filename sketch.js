  //Variables
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var Reset;
var gameState=Play;
var gameState=Reset;
var Play = 1;
var survivalTime=0;
 var survivalTime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("images.jfif")
}

function setup() {
  createCanvas(590,400)
 monkey = createSprite(90,240,50,50) 
  monkey.addAnimation("running",monkey_running)
  ground = createSprite(45,320,1090,9);
  ground.shapeColor="brown"
   //create Obstacle and banana Groups
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  gameState=Play
  
  stroke="white";
  textSize=20;
  fill("white");
  textSize=20;
  fill("black");
  survivalTime =Math.ceil(frameCount/frameRate())
  text("survival time: " + survivalTime,100,50)
}

function draw() {
background("lightgreen")
  monkey.scale=0.144;
   monkey.collide(ground);
   
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.9
    
  drawSprites();
  
  spawnFood();
  spawnObstacles();
  
     //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -18;    
    }
  
}

function spawnObstacles(){
     //write code here to spawn the obstacles
  if (frameCount % 270 === 0) {
    var obstacle = createSprite(600,240,50,50);
    obstacle.y = Math.round(320,420)
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -7;
    
    
     //assign lifetime to the variable
    obstacle.lifetime = 220;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
   
}
}
function spawnFood(){
    if (frameCount % 80 === 0) {
    var banana = createSprite(600,240,50,50);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
    
     //assign lifetime to the variable
    banana.lifetime = 220;
    
    //add each obstacle to the group
    bananaGroup.add(banana);
}
}
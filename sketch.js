//PRO-16:MONKEY GO HAPPY by Rohan Nagashetti

//Code Start

//Declaring In Game Object Variables
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var BANANANAGroup, obstacleGroup;
//var ground, groundImg, ground2, invisGround;
var sky, sky2, skyImg;

//Declaring Non-Object variables
var score;
var survivalTime;

function preload(){
  
//Adding Images and Animations
  
  //Monkey Animation
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //Banana and Obstacle Images
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  //Ground Image
  groundImg = loadImage("Ground.png");

  skyImg = loadImage("sky.png");
 
}



function setup() {
  
  //Creating the Canvas to Play on
  createCanvas(600, 600);
  
  
  
  //Defining the Sky1 and Sky2 Variables
  
  sky = createSprite(300, 270, 10, 10);
  sky.addImage("skyImg", skyImg);
  sky2 = createSprite(1710, 270, 10, 10);
  sky2.addImage("skyImg", skyImg);
  
  //Defining the Monkey Variable, Giving its Animation, and Scaling it to Size
  monkey = createSprite(50, 510, 10, 10);
  monkey.addAnimation("monkeyAnimation", monkey_running);
  monkey.scale = 0.15;
  
  invisGround = createSprite(40, 573, 30, 30);
  invisGround.visible = false;
  
  BANANANAGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  survivalTime = 0;
}


function draw() {
  
  //Giving the Background Color
  background("white");
  
  
  //Making the Monkey Collide with the Ground
  monkey.collide(invisGround);
  
  //Making the Monkey Jump
  if(keyWentDown("space") && monkey.y > 510){
    monkey.velocityY = -25;
  }
  monkey.velocityY++;
  monkey.velocityY++;
  
  //Making the Ground Scroll
  sky.velocityX = -5;
  sky2.velocityX = -5;
  
  if(sky.x < -1020){
    sky.x = 1800;
    
  }
  if(sky2.x <-1020){
    sky2.x = 1800;
  }
  
  survivalTime = Math.round(frameCount/frameRate());
  
  
  
  
  console.log(survivalTime);
  
  spawnBANANANANANANNANANANANANANANANANA();
  spawnOBSTACLE();
  drawSprites();
  fill("BLACK");
  stroke("BLACK")
  textSize(20);
  textFont("PIXEL");
  text("SCORE: "+score, 200, 30);
  text("SURVIVAL TIME: "+survivalTime, 350, 30);
}

function spawnBANANANANANANNANANANANANANANANANA(){
  if(frameCount % 80 == 0){
    banana = createSprite(620, random(320, 430), 50, 50);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 125;
    BANANANAGroup.add(banana);
  }
  
}
function spawnOBSTACLE(){
  if(frameCount % 300 == 0){
    obstacle = createSprite(620, 520, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    obstacle.lifetime = 125;
  }
  
}








var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup,backgroundimage
var score=0;

function preload(){
  monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  ground_image = loadImage("jungle.jpg")
  }
function setup() {
  createCanvas(500,500);
  monkey=createSprite(100,390,5,50)
  monkey.addAnimation("hi",monkey_running)
  monkey.scale=0.1

  ground=createSprite(250,390,1000,10)
  foodGroup=new Group(); 
  obstacleGroup=new Group();
  
  
  }
  
  
function draw() {
 background(255);
  monkey.collide(ground)
  if(keyDown("space")&& monkey.y >= 350) {
      monkey.velocityY = -16;
  }
  if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach()
    score=score+1
  }
 
  stroke ("white")
  textSize (20)
  fill ("black")
  text ("Score : " + score,150,50)
  monkey.velocityY = monkey.velocityY + 0.8
  createBanana();
  createObstacle();
  drawSprites();
  }
function createBanana() {
  if (frameCount % 180 === 0) {
    var banana = createSprite(500,350,40,10);
    banana.y = Math.round(random(225,250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5*3
    foodGroup.add(banana);
    }
    } 
function createObstacle() {
  if (frameCount % 250 === 0) {
    var obstacle = createSprite(500,365.5,40,10);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1;
    obstacle.velocityX = -5*3;
    obstacleGroup.add(obstacle);
    }
  } 

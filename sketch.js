function preload(){
    background1 = loadImage("background,png.png");
    //coin1 = loadImage("coin.png.png");
    girl1 = loadImage("girl.png.png");
    train1 = loadImage("trainl.png");
    train2 = loadImage("trainm.png");
    train3 = loadImage("trainr.png");
}

function setup() {
    createCanvas(10000, 900);
    bg = createSprite(200, 200, 5000, 900);
    bg.addImage(background1); bg.scale=0.5
    
    //coin = createSprite(0, 0, 1200, 900);
    //coin.addImage(coin1);

    girl = createSprite(190, 230, 100, 100);
    girl.addImage(girl1);
    girl.scale = 0.7

}

function draw() {
 background(0);
 if(bg.y>450){
  bg.y = 400
 }
 spawnTrainsm();
 spawnTrainsr();
 spawnTrainsl();
 drawSprites();
}

function spawnTrainsl(){
 if(frameCount % 60 === 0){

 train = createSprite(170, 50, 100, 100);
 train.addImage(train1);
 train.scale = 0.1
 train.velocityY = -1
}
}

function spawnTrainsm(){
if(frameCount % 100 === 0){

 train = createSprite(152, 50, 100, 100);
 train.addImage(train2);
 train.scale = 0.1
 train.velocityY = -4
}
}

function spawnTrainsr(){
if(frameCount % 150 === 0){

 train = createSprite(250, 50, 100, 100);
 train.addImage(train3);
 train.scale = 0.1
 train.velocityY = -3
}
}
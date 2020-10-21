var backgroundimage
var bg
var chorimage
var theif
var score=0;
var invisibleground
var play=1
var end=0
var obstaclesGroup
 var gameState=play
function preload (){
backgroundimage=loadImage("bg1.jpg")
chorimage=loadImage("chor.png")
obstacleImage=loadImage("car1.png")
}

function setup(){
createCanvas(500,500);
bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
bg.addImage(backgroundimage)
bg.scale=2.5;
bg.velocityX=-8
obstaclesGroup=createGroup()


theif=createSprite(50,400,10,10);
theif.addImage(chorimage);
theif.scale=0.5;

theif.setCollider("rectangle",0,0,100,theif.height)
invisibleground=createSprite(250,480,500,10)
invisibleground.visible=false;

}


function draw(){

background("black")

if(gameState===play){
    if(bg.x<0){
        bg.x=bg.width/2
    
    }
    score=score+Math.round(World.frameRate/60)
    if(keyDown("space")&theif.y>=390.5){
        theif.velocityY=-13;
    
    }
    theif.velocityY=theif.velocityY+0.8;
    obstacles();
    if (obstaclesGroup.isTouching(theif)){
        gameState=end
    }
}
else if (gameState===end){
    theif.velocityY=0;
    bg.velocityX=0;
    obstaclesGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
}

console.log(theif.y);
theif.collide(invisibleground)

drawSprites();
textSize(22);
fill("red")
text("score= "+score,350,50)
}

function obstacles(){
    if(frameCount%60===0){

    
    var obstacle=createSprite(500,460,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-8
    obstacle.lifetime=100;
    obstaclesGroup.add(obstacle)
}
}









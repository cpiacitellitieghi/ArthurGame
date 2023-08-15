var skeletonImg,skeleton
var knifeRedImg,knifeRed
var knifeLongImg,knifeLong
var friskImg,frisk
var friskLoseImg,friskLose
var backgroundImg,background
var heartImg,heart
var gameState = 0; 
var fight,mercy,act,iten;
var kniveRedGroup,knifeLongGroup,heartGroup
var lifeImage,life = 275
var btn1;
var btn2;
var btn3;
var btn4;

function preload() {
  friskLoseImg = loadAnimation("/Assets/Frisk00.png","/Assets/Frisk01.png","/Assets/Frisk02.png","/Assets/Frisk03.png","/Assets/Frisk04.png","/Assets/Frisk05.png","/Assets/Frisk06.png",
  "/Assets/Frisk07.png","/Assets/Frisk08.png","/Assets/Frisk09.png","/Assets/Frisk10.png","/Assets/Frisk11.png","/Assets/Frisk12.png","/Assets/Frisk13.png","/Assets/Frisk14.png");
  skeletonImg = loadImage("/Assets/skull.png")
  friskImg = loadImage("/Assets/Frisk.png")
  knifeRedImg = loadImage("/Assets/KniveRed.png")
  knifeLongImg = loadImage("/Assets/Knive.png")
  backgroundImg = loadImage("/Assets/background.png")
  heartImg = loadImage("/Assets/heart.png")
  lifeImage = loadImage("/Assets/life.png")
}

function setup() 
{
  createCanvas(1905,windowHeight -17 );
  frisk = createSprite(950,270)
  frisk.addImage("frisk",friskImg)
  frisk.scale = 1.2

  skeleton = createSprite(950,600);
  skeleton.addImage("skeleton",skeletonImg)
  skeleton.scale = 0.15
  skeleton.debug = true;

  kniveRedGroup = createGroup()
  knifeLongGroup = createGroup()

  fight = createImg('/Assets/Fight.png');
  fight.position(63,740);
  fight.size(430,255);
  

  fight.visible = false
}

function draw() 
{
background(backgroundImg);
showLife();
drawSprites();

if (gameState === 0) {
  fight.mouseClicked(buttons);
  console.log(gameState)
}
else if(gameState === 1){
  spawnKnifeRed();
  spawnLongKnife();

  console.log(gameState)

  if (keyDown("RIGHT_ARROW")) {
    skeleton.x = skeleton.x + 6
  }
  
  if (keyDown("LEFT_ARROW")) {
    skeleton.x = skeleton.x - 6
  }
  
  if (keyDown("DOWN_ARROW")) {
    skeleton.y = skeleton.y + 6
  }
  
  if (keyDown("UP_ARROW")) {
    skeleton.y = skeleton.y - 6
  }
  
  if (knifeLongGroup.isTouching(skeleton)) {
    gameState = 2
  }
} else (gameState === 2)
console.log(gameState)
{

}


}
function spawnKnifeRed() {
  if (frameCount % 60 === 0) {
    var knifeRed = createSprite(Math.round(random(80,1905),Math.round(random(80,windowHeight-100),40,10)));
    knifeRed.debug = true;
   // knifeRed.y = );
   // knifeRed.x = Math.round(random(80,410));
    knifeRed.addImage(knifeRedImg);
    knifeRed.scale = 0.3;
    knifeRed.velocityX = -4;

      //Faca vermelha segue personagem
    if (skeleton.x > knifeRed.x ) {
      knifeRed.velocityX = 5; 
    } else {
      knifeRed.velocityX = -5; 
    }

    if (skeleton.x > knifeRed.y ) {
      knifeRed.velocityY = 5; 
    } else {
      knifeRed.velocityY = -5; 
    }

    
    //ajuste a profundidade (depth)
    knifeRed.depth = skeleton.depth;
    skeleton.depth = skeleton.depth + 1;
    
    kniveRedGroup.add(knifeRed)

  }

}

function spawnLongKnife() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    var knifeLong = createSprite(1600,100,40,10);
    //knifeLong.y = Math.round(random(80,410));
    //knifeLong.x = Math.round(random(100,1900));
    knifeLong.addImage(knifeLongImg);
    knifeLong.scale = 0.3;
    knifeLong.velocityX = -4;
    

    
    //ajuste a profundidade (depth)
    knifeLong.depth = skeleton.depth;
    skeleton.depth = skeleton.depth + 1;
    
    knifeLongGroup.add(knifeLong)
  }
}
function showLife() {
  image(lifeImage, 120, 755, 50, 50);
  fill("white");
  rect(190, 765,275,20);
  fill("#f50057");
  rect(190, 765 ,life,20)
  noStroke();
}
function buttons () {
   gameState = 1
  
}
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,dropbox1,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	dropbox1 = new Dropbox(400,650,100,20);
	dropbox2 = new Dropbox(340,620,20,100);
	dropbox3 = new Dropbox(460,620,20,100);	

	packageBody = Bodies.circle(400, 200 , 5 , {restitution:0.6, friction: 0.00000001, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  dropbox1.display();
  dropbox2.display();
  dropbox3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW) 
 {
	Matter.Body.setStatic(packageBody,false);
 }
 else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
  else if (keyCode === LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)
    
  }
}




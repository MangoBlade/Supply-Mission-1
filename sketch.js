var helicopterIMG, helicopterSprite, packagesprite,packageIMG;
var packageBody,ground
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
	

	packagesprite=createSprite(width/2, 80, 10,10);
	packagesprite.addImage(packageIMG)
	packagesprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="brown"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);							
	
  
}


function draw() {
		

  rectMode(CENTER);
  background(0);
  packagesprite.x= packageBody.position.x 
  packagesprite.y= packageBody.position.y
 
  drawSprites();
 
}

function keyPressed() {
	

 if (keyCode === 32) {
	 Matter.Body.setStatic(packageBody,false)
	    
  }
}




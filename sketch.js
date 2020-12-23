var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);

	var basket = Bodies.rectangle(200,350,200,20);
	basket.shapeColor = color("red");

	var basket1 = Bodies.rectangle(140,310,20,100);
	basket1.shapeColor = color("red");

	var basket2 = Bodies.rectangle(255,310,20,100);
	basket2.shapeColor = color("red");
}


function draw() {
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,20);
  

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
  }
}




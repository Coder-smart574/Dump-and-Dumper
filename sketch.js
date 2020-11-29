
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

var ground;

var dustbin_rect1, dustbin_rect2, dustbin_rect3;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ground=Bodies.rectangle(625, 600, 1250, 10, {isStatic: true});
	World.add(world, ground)	
	
	dustbin_rect1=new Rectangle(1050, 591, 200, 20);
	dustbin_rect2=new Rectangle(950, 550, 20, 100);
	dustbin_rect3=new Rectangle(1150, 550, 20, 100);
	
	paper=new Paper(400, 585)
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin_rect1.display();
  dustbin_rect2.display();
  dustbin_rect3.display();

  paper.display();
  
  fill("yellow")
  rect(ground.position.x, ground.position.y, 1250, 10)
  fill("pink")
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Body.applyForce(paper.Body, paper.Body.position, {x=85, y=85})
  }
}

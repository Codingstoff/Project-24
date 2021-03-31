
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var leftbox, rightbox,bottombox;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (400,700,800,100)
	ball = new Ball (100,650,20);
	bottombox = new Box(700,650,100,20)
	rightbox = new Box(750,610,20,100)
	leftbox = new Box(650,610,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  
  ground.display();
  ball.display();
 bottombox.display();
 leftbox.display();
 rightbox.display();
}


function keyPressed() 
{
	if (keyCode === UP_ARROW)
	{
      Matter.Body.applyForce ( ball.body, ball.body.position, {x:0.5,y:-2});

	}

}



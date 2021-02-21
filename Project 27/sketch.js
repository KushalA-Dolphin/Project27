
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ball1,ball2,ball3,ball4;
var stand;
var line;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1=new Ball (100,300);

    ball2=new Ball (300,300);

	ball3=new Ball (500,300);

	ball4=new Ball (700,300);
 
    stand = new Stand(width/2,250,width,20);
	
	Engine.run(engine);
  
	var options = {
		bodyA:stand.body,
		bodyB:ball1.body,
		stiffness: 0.4,
		length: 30,
	}
	var chain = Constraint.create(options);
	World.add(world.chain);
}


function draw() {
  rectMode(CENTER);
  background(215);
  
  stand.shapeColor=rgb(210,105,30);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  stand.display();
}




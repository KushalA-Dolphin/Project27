
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ball1,ball2,ball3,ball4;
var stand1,stand2,stand3,stand4;
var line;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1=new Ball (200,300);

    ball2=new Ball (250,300);

	ball3=new Ball (300,300);

	ball4=new Ball (450,300);
 
    stand1 = new Stand(175,250,100,10);
	stand2 = new Stand(250,250,100,10);
	stand3 = new Stand(325,250,100,10);
	stand4 = new Stand(400,250,100,10);
	
	Engine.run(engine);
  
	var options = {
		bodyA:stand1.body,
		bodyB:ball1.body,
		length: 200,
		stiffness: 0.4,
	}
	var chain = Constraint.create(options);
	World.add(world,chain);
	chain.shapeColor=rgb(10,40,12);
	var options = {
		bodyA:stand2.body,
		bodyB:ball2.body,
		length: 200,
		stiffness: 0.4,
	}
	var chain = Constraint.create(options);
	World.add(world,chain);
	chain.shapeColor=rgb(10,40,12);
	var options = {
		bodyA:stand3.body,
		bodyB:ball3.body,
		length: 200,
		stiffness: 0.4,
	}
	var chain = Constraint.create(options);
	World.add(world,chain);
	chain.shapeColor=rgb(10,40,12);
	var options = {
		bodyA:stand4.body,
		bodyB:ball4.body,
		length: 200,
		stiffness: 0.4,
	}
	var chain = Constraint.create(options);
	World.add(world,chain);
	chain.shapeColor=rgb(10,40,12);
}


function draw() {
  rectMode(CENTER);
  background(215);

  if (keyDown(DOWN_ARROW)){
	ball1.body.position.y=ball1.body.position.y-2;
	ball1.body.position.x=ball1.body.position.x-2;
  }

  
  line(ball1.body.position.x,ball1.body.position.y,stand1.body.position.x,stand1.body.position.y);
  line(ball2.body.position.x,ball2.body.position.y,stand2.body.position.x,stand2.body.position.y);
  line(ball3.body.position.x,ball3.body.position.y,stand3.body.position.x,stand3.body.position.y);
  line(ball4.body.position.x,ball4.body.position.y,stand4.body.position.x,stand4.body.position.y);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
}




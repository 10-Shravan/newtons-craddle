
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;
var bo1,bo2,bo3,bo4,bo5,r1;
function preload()

{


}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		bodyA:bo1,
		bodyB:this.rope,
	   friction:0.5,
	   lenght:10
	}
	
 bo1= Matter.Bodies.circle(200,450,300,options);
 World.add(world,bo1);

   bo2= Matter.Bodies.circle(200,450,300,options);
 World.add(world,bo2);

   roof=Bodies.rectangle(200,200,800,20,{isStatic:true});
   World.add(world,roof);

 

	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  rect(roof.position.x,roof.position.y,800,20);
 
  ellipseMode(RADIUS);
  ellipse(bo1.position.x,bo1.position.y);

  drawSprites();
 
}




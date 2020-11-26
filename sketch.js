
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,targetCenter,targetCenter1,targetCenter2,dustbin;

function preload()
{dustbinImage=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(1200, 400);
	dustbin = createSprite(600,300,180,30)
	dustbin.addImage(dustbinImage)
	dustbin.scale=0.6

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,390,1200,20)
	paper = new Paper(50,200,60,60)

	targetCenter = new Target(600,370,150,30)
	targetCenter1 = new Target(525,290,30,100)
	targetCenter2 = new Target(645,290,30,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('blue');
  
  
  ground.display();
  paper.display();
  targetCenter.display();
  targetCenter1.display();
  targetCenter2.display();
  drawSprites();
}


function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-85})
}


}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

	var boyimg,boyface,stone,ground;
	var mango;

function preload(){
	boyimg=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 stone=new Stone(100,400,45);
	// boyface=new Boy(200,450,25,70);
	ground = new Ground(400,690,800,40);
	mango = new Mango(800,220,51);
	tree = new Tree(900,650);
	Sling1 = new Sling(stone.body, {x: 100, y: 400});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(40);
  image(boyimg, 50, 300, 400, 500);
  ground.display();
  tree.display();
  mango.display();
  stone.display();
  Sling1.display();
  detectcollision(stone, mango);
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	Sling1.fly();
}

function detectcollision(lstone, lmango){
	mangopos=lmango.body.position
	stonepos=lstone.body.position

	var distance=dist(stonepos.x, stonepos.y, mangopos.x, mangopos.y)
	if (distance <=lstone.r+lmango.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
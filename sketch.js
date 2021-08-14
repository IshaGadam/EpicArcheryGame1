const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var compB,playB;
var compP,playP;


function setup() {
  canvas = createCanvas(1200,1200);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   compB = new ComputerBase(800,500,180,150);
   playB = new PlayerBase(200,500,180,150);

   compP = new Computer(200,350,50,180);
   playP = new Player(800,350,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base
   compB.display();
   playB.display();
   
  //display Player and computerplayer
   playP.display();
   compP.display();


}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  box = new Box(50,100,2,40)
  circle = new Circle(1000,100,10,10)
  

}

function draw() {
  background(189);
  Engine.update(engine);
  
  box.display()
  circle.display()
  
 
}

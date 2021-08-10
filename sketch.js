
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object1=Bodies.rectangle(100,100,50,50)
  World.add(world,object1)
  object2=Bodies.rectangle(300,100,10,60)
  World.add(world,object2)
  object3=Bodies.circle(500,100,40);
  World.add(world,object3)
  object4=Bodies.rectangle(700,100,70,20)
  World.add(world,object4)
  object5=Bodies.circle(900,100,70)
  World.add(world,object5)
 /* console.log(object1)
  console.log(object1.position.x)
  console.log(object1.position.x)*/
}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  fill("red");
    rect(object1.position.x,object1.position.y,50,50);
    fill("blue");
    rect(object2.position.x,object2.position.y,10,60);
    fill("green");
    circle(object3.position.x,object3.position.y,40);
    fill("purple");
    rect(object4.position.x,object4.position.y,70,20);
    fill("brown");
    circle(object5.position.x,object5.position.y,50);
}



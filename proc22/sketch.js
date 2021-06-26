const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;

function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic:true
  }

  box = Bodies.rectangle(200,200,50,50,option);
  World.add(world,box)
  console.log(box)
}
function draw()
{
  background("pink");

  Engine.update(engine)
  rectMode(CENTER);

   rect(box.position.x,box.position.y,50,50);
  
}

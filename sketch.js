const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bola;
var chao;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var bolaConfig = {
    restitution: 0.95
  }
  
  bola = Bodies.circle(100,10,20, bolaConfig);
  World.add(world, bola);

  var chaoConfig = {
    isStatic: true
  }
  
  chao = Bodies.rectangle(200,390,400,20, chaoConfig);
  World.add(world, chao);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("grey");

 Engine.update(engine);

  ellipse(bola.position.x, bola.position.y, 20, 20);
  rect(chao.position.x, chao.position.y, 400, 20);
}


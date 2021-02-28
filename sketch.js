const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var chain, ball1, ball2, ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ground = Bodies.rectangle(400, 380, 800, 20, {isStatic: true});
  World.add(world, ground);

  ball1 = Bodies.circle(300, 40, 25, {isStatic: true});
  World.add(world, ball1);

  ball2 = Bodies.circle(500, 40, 25, {isStatic: true});
  World.add(world, ball2);

 /* var options = {
    bodyA: ball1.body,
    bodyB: ball2.body,
    length: 10,
    stiffness: 0.5
  }

  chain = Constraint.create(options);
  World.add(world, chain);*/

}

function draw() {
  background("blue");
  
  Engine.update(engine);

  fill("brown");
  stroke("brown");
  rect(ground.position.x, ground.position.y, 800, 20);

  fill("red");
  stroke("red");
  ellipse(ball1.position.x, ball1.position.y, 25, 25);

  fill("red");
  stroke("red");
  ellipse(ball2.position.x, ball2.position.y, 25, 25);

  /*stroke("black");
  line(ball1.body.position.x, ball1.body.position.y, ball2.body.position.x, ball2.body.position.y);*/

}
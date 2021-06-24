const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var leftSide;
var rightSide;
var top_wall;
var ball;
var binSide1;
var binSide2;

function setup() {
  createCanvas(700,400);
  engine = Engine.create();
  world = engine.world;
  
  
  binSide1 = new Ground(500, 339, 10, 80);
  binSide2 = new Ground(580, 339, 10, 80);
  ground =new Ground(200,390,1600,20);
  rightSide = new Ground(690,200,20, 400);
  
  leftSide = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,1600,20);
  var ball_options = {
    restitution: 0.3,
    //density:1.2,
   friction:0
  }
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y, 13)
  ground.show();
  top_wall.show();
  leftSide.show();
  rightSide.show();
  binSide1.show();
  binSide2.show();
  Engine.update(engine);
}
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
    if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:0.034});
    }
}
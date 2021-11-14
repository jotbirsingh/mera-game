const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
var gun;
var engine;
var world;
var angle;
function preload(){
backgroundImg = loadImage("background.jpg");
}

function setup(){
  createCanvas(1200,600);
  
  engine = Engine.create()
  world=engine.world
  angleMode(DEGREES);
  angles =20;
 // background= createSprite(50, width/2, 100,height);
  //background.addImage(backgroundImg);
gun = new Gun(300,240,125,95,angles);

bottle = new Bottle(500,350,65,105,angles);

}

function draw(){
  background(backgroundImg);
  Engine.update(engine);
//background.display();
bottle.display();
  gun.display();
}
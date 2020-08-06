const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject    
var world;
let flower;
var dustbin;
function preload(){
dustbin = loadImage('Sprites/dustbin.png');
flower = loadImage("Sprites/paper.png");
}
function setup() {
    createCanvas(2000, 2000);
    rectMode(CENTER);


    engine = Engine.create();
    world = engine.world;
    dustbinObj=new Dustbin(1200,650);
    paperObject=new Paper(200,450,40);
    groundObject=new Ground(width/2,670,width,20);
    //Create a Ground
    

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
    });

    Engine.run(engine);
Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
 
  
  
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:305,y:-305});
    
    }
}






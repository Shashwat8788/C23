const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);

    ground = new Ground(width/2,height-5,width,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    keyPressed();
   
}

function keyPressed(){
    if(keyCode===DOWN_ARROW){
        Matter.Body.setStatic(box2.body,false);
    }
}
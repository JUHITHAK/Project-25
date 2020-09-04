const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sideL,sideB,sideR,bin,paper,ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    bin = new Duspen();
    paper = new Paper(100,100);
   
    ground = new Ground(600,590,1200,20,"yellow");
    
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    bin.display();
    paper.display();
    ground.display();
    
   
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85})
    }
}
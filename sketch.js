const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body=Matter.Body

var box1,box2,box3;
var ground, ball;

function setup(){
  createCanvas(1000,600)
  box11=createSprite(1300,565,170,20)
  engine=Engine.create()
  world=engine.world
  box1=new Dustbin(900,565,170,20)
  box2=new Dustbin(815,515,20,120)
  box3=new Dustbin(985,515,20,120)
  
  // Creating new Ground
  ground=new Ground(800,585)
  paper=new Paper(250,450,40)

}

function draw(){
  background(0,0,0)
  Engine.update(engine)

  ground.display()
paper.display()
  box1.display()
  box2.display()
  box3.display()

  }

  function keyPressed(){ 
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body, paper.body.position,{x:25,y:-45}); 
     } 
   }

  

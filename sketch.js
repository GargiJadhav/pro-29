const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;


function setup(){
createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
    ground = new Ground(520,500,330,20);
fill("pink");
   block1 = new Block(655,458,30,40);
    block2 = new Block(625,458,30,40);
    block3 = new Block(685,458,30,40);
    block4 = new Block(715,458,30,40);
    block5 = new Block(595,458,30,40);
    block6 = new Block(745,458,30,40);
    block7 = new Block(565,458,30,40);
    block8 = new Block(655,417,30,40);
    block9 = new Block(625,417,30,40);
    block10 = new Block(685,417,30,40);
    block11 = new Block(715,417,30,40);
    block12 = new Block(595,417,30,40);
    block13 = new Block(655,376,30,40);
    block14 = new Block(625,376,30,40);
    block15 = new Block(685,376,30,40);
    block16 = new Block(675,335,30,40);
    block17 = new Block(645,335,30,40);
    block18 = new Block(660,294,30,40);
    ground2 = new Ground(800,300,330,20);
    block19 = new Block(900,254,30,40);
    block20 = new Block(935,254,30,40);
    block21 = new Block(970,254,30,40);
    block22 = new Block(930,214,30,40);
    block23 = new Block(900,214,30,40);
    block24 = new Block(870,254,30,40);
    block25 = new Block(920,169,30,40);

    polygon = new Polygon(200,200,50);
slingshot = new Slingshot(polygon.body,{x:100,y:200});
}
function draw(){
background("black");
Engine.update(engine);

ground2.display();
ground.display();
slingshot.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
polygon.display();


drawSprites();




}
function mouseDragged(){
    Matter.body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingshot.fly();
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body

var engine, world;
var division = []
var divheight = 300
var praticals = []
var plinkoList = []

function preload() {

}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world

  gr = new Ground(400, 690, 800, 20)
  //createSprite(400, 200, 50, 50);
  for (var i = 0; i <= width; i = i + 80) {
    division.push(new Divi(i, height - divheight / 2, 10, divheight));
  }
   for (var j = 75; j <= width; j = j + 50) {
    plinkoList.push(new Plinko(j, 75));
   }
   for (var j = 50; j <= width - 10; j = j + 50) {
     plinkoList.push(new Plinko(j, 175));
   }
  for (var j = 75; j <= width; j = j + 50) {
     plinkoList.push(new Plinko(j, 275));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
     plinkoList.push(new Plinko(j, 375));
  }
  Engine.run(engine)
  //console.log(ping)
}

function draw() {
  //Engine.update(engine)

  background(0);


  for (var n = 0; n < division.length; n++) {
    division[n].display();
  }

  if (frameCount % 60 === 0) {
    praticals.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
  }
  for (var h = 0; h < praticals.length; h++) {
    praticals[h].display();
  }
   for (var j = 0; j <  plinkoList.length; j++) {
    plinkoList[j].display();
   }

  gr.display();

}

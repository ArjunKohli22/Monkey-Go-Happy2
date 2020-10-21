var monkey,stone,banana;
var count;
var backImage;

function preload(){
monkey_running=loadAnimation("Monkey1.png","Monkey3.png","Monkey4.png","Monkey5.png","Monkey6.png","Monkey7.png","Monkey8.png","Monkey9.png");
  stone=loadImage("stone.png");
  banana=loadImage("banana.png");
  backImage=loadImage("jungle.jpg");
}

function setup() {
  createCanvas(600, 200);

  banana=creatSprite(200,200,20,20);
  banana.Scale=0.5;
 banana.addAnimation=("running",monkey_running);  
  
  
  
  
  
}

function draw() {
  background(220);
}
var iss,issImg;
var bg;

function preLoad() {
  issImg = loadImage("iss.png")
  bg = loadImage("iss.png")
}


function setup() {
  createCanvas(800,500);
  //iss.addImage("isss", issImg)
}



function draw() {
  background(bg); 
  drawSprites();
}
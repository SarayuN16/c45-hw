var fox;
var road;
var rocks;
var startingbg;

var gameState = "end";

let engine;
let world;


function preload()
{
    fox = loadImage("fox.png");
    roadImg = loadImage("road.webp");
    rocks = loadImage("rockobstacle.png");
    startingbg = loadImage("startingbg1.webp");
    
}



function setup()
{
    createCanvas(windowWidth, windowHeight);


    road = createSprite(windowWidth/2,windowHeight/2,windowWidth,10);
    road.addImage("road",roadImg);
    road.velocityX = -2;
    road.scale = 2.2;
    road.x = windowWidth/2;

    fox = createSprite()
}

function draw()
{
    background(startingbg);
    //image(startingbg,0,0,displayWidth+80,displayHeight);

    push();
    imageMode(CENTER);


    if (road.x < 0){
        road.x=windowWidth/2;
    }

    pop();

    drawSprites();
}

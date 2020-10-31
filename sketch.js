var Gamestate=0
var database
var playercount
var player
var game
var form
var allplayers
var car1,car2,car3,car4,cars

function setup(){
    database=firebase.database()
    createCanvas(windowWidth-50,windowHeight-50);
    game= new Game()
    game.getGamestate()
    game.start()
    
}

function draw(){
    background("white");
    if(playercount===4){
    game.updategamestate(1)
    }
if(Gamestate===1){
    clear()
game.play()
drawSprites()
}
  
}
 

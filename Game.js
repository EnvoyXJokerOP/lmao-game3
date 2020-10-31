class Game {
    constructor(){
 
    }
    getGamestate(){
    var  Gamestateref= database.ref('Gamestate')
    Gamestateref.on("value",(data)=>{
        Gamestate=data.val()
    })
    }
    updategamestate(state){
     database.ref('/').update({
        Gamestate:state

     })
    }
     async start(){
         if(Gamestate===0){
        player=new Player()
        var playercountref=await database.ref('playercount').once("value")
       if(playercountref.exists()){
      playercount=playercountref.val()
      player.getplayercount()
       }

       
        form= new Form()
        form.display()
         }
     car1=createSprite(300,200)
     car2=createSprite(500,200)
     car3=createSprite(700,200)
     car4=createSprite(900,200)
     cars=[car1,car2,car3,car4]
        }

    play(){
    form.hide()

    Player.getplayerinfo()
    if(allplayers!==undefined){
        var index=0
        var x=0
        var y       

    for(var plr in allplayers){
      index=index+1
      x=x+200
      y=displayHeight-allplayers[plr].distance
      console.log(index)
      console.log(cars[index-1])
      cars[index-1].x=x                                                               
      cars[index-1].y=y 
      
        if(index=player.index){
            cars[index-1].shapecolor="Red"
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
      
        }
       
        
    }
    }

   if(keyDown("up")&&player.index!==null){
player.distance=player.distance+50
player.update()
   }
    }

    }

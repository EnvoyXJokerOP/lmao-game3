class Player {
  constructor(){
this.name=null
this.distance=0
this.index=0
  }
  getplayercount(){
  var  playercountref= database.ref('playercount')
  playercountref.on("value",(data)=>{
      playercount=data.val()
  })
  }
  updateplayercount(count){
   database.ref('/').update({
       playercount:count

   })
  }
  update(){
   var playerindex="players/player"+this.index
   database.ref(playerindex).set({
   Name:this.name,
   distance:this.distance
  })
  }
  
static getplayerinfo(){
     var playerinforef=database.ref('players')
     playerinforef.on("value",(data)=>{
         allplayers=data.val()
     })
 }
}                                                 

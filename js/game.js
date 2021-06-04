class Game{
   constructor() {

   }
getState(){
   var gamestateref = database.ref('gameState') 
   gamestateref.on('value',function(data){
       gameState = data.val()
 })
}
update(count){
   database.ref('/').update({
      gameState:count
   })

}
async start(){
   if(gameState===0){
      player = new Player()
      var playercountref = await database.ref('playerCount').once('value')
      if(playercountref.exists()){
         playerCount = playercountref.val()
         player.getCount()
      }
   form = new Form()
   form.display()
   }

   car1 = createSprite(100,200)
   car2 = createSprite(300,200)
   car3 = createSprite(500,200)
   car4 = createSprite(700,200)
   cars = [car1,car2,car3,car4]
}

play(){
   form.hide()
   Player.getplayerinfull()
   if(allPlayers!==undefined){
      //var displayPostion = 130
      var index = 0
      var x = 0
      var y = 0
      for(var plr in allPlayers)
      {
         index = index+1
         x = x+200
         y = displayHeight-allPlayers[plr].distance
         cars[index-1].x=x
         cars[index-1].y=y
         if(index === player.index){
            cars[index-1].shapeColor='red'
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
         }
   }
}
   if(keyIsDown(UP_ARROW)&& player.index!==null){
      player.distance = player.distance + 50
      player.update()
   }
drawSprites()
} 

}


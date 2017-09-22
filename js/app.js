// Enemies our player must avoid
var Enemy = function(speed, row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.row=row;
    this.x=0;
    this.y=0;

 };
 

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x=this.x+this.speed;
    if (this.x<=player.x && this.x>=player.x+83 && this.y==player.y) {
        //function reset
       player.reset();
    }

};

 
 Enemy.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };
 
 // This class requires an update()

    var player = function() {
 
    this.sprite = 'char-princess-girl';
    this.x=249;
    this.y=506;

    this.reset= function(){
    this.x=249;
    this.y=506;
    }

   this.handleInput =function(key){
    if (key== "left" && this.x!=0) {
        this.x=this.x-83;
    }
    else if (key== "right"&& this.x<=332) {
        this.x=this.x+83;
    }
    else if (key== "up"&& this.y!=0) {
        this.x=this.y-101;
    }
    else if (key== "down"&& this.y<=606) {////506
        this.x=this.y+101;
    }
   }

};
   
   player.prototype.update = function(dt) {
    
   }


   player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
   
 var player=new player();
 
 var Enemy =new Enemy(20,1);
// var Enemy =new Enemy(Math.floor( Math.random() * 4));


 // Math.floor( Math.random() * 4 ) 
 
 // Now instantiate your objects.
 // Place all enemy objects in an array called allEnemies
 // Place the player object in a variable called player
 
 
 
 // This listens for key presses and sends the keys to your
 // Player.handleInput() method. You don't need to modify this.
 document.addEventListener('keyup', function(e) {
     var allowedKeys = {
         37: 'left',
         38: 'up',
         39: 'right',
         40: 'down'
     };
 
     player.handleInput(allowedKeys[e.keyCode]);
  });

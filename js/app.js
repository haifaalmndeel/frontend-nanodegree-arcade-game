var Enemy = function(speed, row) {

    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.row = row;
    this.x = 0;
    this.y = 55 + 85 * this.row;

};


Enemy.prototype.update = function(dt) {

    this.x = this.x + this.speed * dt;
    if (this.x + 70 > player.x && this.x < player.x + 70 && (this.y - 20 < player.y && this.y + 20 > player.y)) {
        //function reset
        player.reset();
    }

    //reset he enemy 
    if (this.x >= 505) {
        this.x = 0;
        this.row = Math.floor(Math.random() * 3);
        this.speed = Math.floor(Math.random() * 60) + 40;
    }
};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var player = function() {

    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 406;

    this.reset = function() {
        this.x = 202;
        this.y = 406;
    };

    this.handleInput = function(key) {
        if (key == "left" && this.x != 0) {
            this.x = this.x - 101;
        } else if (key == "right" && this.x <= 332) {
            this.x = this.x + 101;
        } else if (key == "up" && this.y > 55) {
            this.y = this.y - 83;
        } else if (key == "down" && this.y < 406) {
            this.y = this.y + 83;
        }
    };

};

player.prototype.update = function(dt) {
    if (this.y < 55) {
        this.x = 202;
        this.y = 406;
    }
};


player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var player = new player();


var allEnemies = [];
for (var i = 0; i < 4; i++) {

    var enemy = new Enemy(Math.floor(Math.random() * 60) + 40, Math.floor(Math.random() * 3));
    allEnemies.push(enemy);
}


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

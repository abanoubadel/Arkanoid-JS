var Lives = function (liveNum) {
    this.lives = 3;
    
    this.box = new Box("lives");

    if(typeof liveNum === "number")
    {
        this.lives = liveNum;
    }
    // this.box.write((this.lives+1)+"")
    /*
        generate lives shape 'hearts'
        take number of lives as input
    */
    this.box.lives(this.lives);
}

Lives.prototype.getLives = function() {
    return this.lives;
};

Lives.prototype.isDead = function(){
    return (this.lives <= 1)
}
Lives.prototype.revive = function(num){
    this.lives += num;
}
Lives.prototype.add = function(){
    this.revive(1);
}

Lives.prototype.Die = function(){

    if(!this.isDead()){
        this.lives--;
        // this.box.write((this.lives+1)+"")
        this.box.lives(this.lives);

        return false;
    }
    this.whenDead();    
    return true;
}

Lives.prototype.whenDead = function () {
    // body...

}
document.body.style.color = "white";
var Box = function(id){
    this.id = id;
    this.box = document.createElement("div");
    this.box.id = id;
    document.body.appendChild(this.box);
    // this.box.style.fontSize = "50px";
    // this.box.style.color = "white";
};
Box.prototype.write = function(txt) {
    if(document.getElementById(this.id))
    {
        document.getElementById(this.id).innerHTML = txt;
    }
}
Box.prototype.lives = function(lives) {
    var html = '<ul>';
    for (var i = 0; i < lives; i++) {
        html += '<li class="heart"></li>';
    };
    html += '</ul>';
    document.getElementById(this.id).innerHTML = html;
}



var InfoBox = function()
{
   Box.call(this,"info");

};
InfoBox.prototype.write = function(txt){
    Box.prototype.write.call(this,txt);
    setTimeout(Box.prototype.write.call(this,''),3000);
};

InfoBox.prototype = Object.create(Box.prototype);
InfoBox.prototype.constructor = InfoBox;

var Game = function() {
    this.isFreeze = false;

    this.setScence();
    this.setGameEngine();
    this.setGameConditions();
};

Game.prototype.setGameConditions = function(){
    var lapse = this.lapse;
    var lifes = this.lifes;
    var swing = this.swing;
    var ball = this.ball;
    var infoBox = this.infoBox;
    var game = this; 
    lifes.whenDead = function(){
        game.isFreeze = true;
        document.body.innerHTML ="<div id='gamesol'>Game over</div>"

    }

    this.bRod.whenCollided = function(obj){
        lifes.Die();
        obj.MoveObjectOverObject(swing);
        ball.stop();

        lapse.reset();     
    }
    swing.whenCollided = function(obj){
        //lapse.incSpeed();
    }
    
    this.level.addLevelLoad(function(){
        infoBox.write("Level "+this.current);
    });
    /*this.level.whenLevelLoaded = function(){
        infoBox.write("cantelever");
    }*/

    var engine =this.engine; 
    engine.setEngineMove(function(){ball.unStop();})   



}



Game.prototype.setScence = function(){
    var window = new Window();
    this.objects = new Objects();
    this.infoBox = new Box("infoBox");
    
    this.swing = new Swing((Config.Window.width / 2) - 50, Config.Window.height - 50);
    this.ball = new Ball((Config.Window.width / 2) - 10, Config.Window.height - 75, 5, -5);
    var walls = this.createWalls();
    this.bRod = walls["bRod"];
    this.bRod.sound = "sound/brod.mp3" 
    this.objects.addSingleItem(this.swing);
    this.objects.addSingleItem(this.ball);
    this.objects.addItems(walls);
    this.engine = new Engine(this.swing,0,Config.Window.width);

};


Game.prototype.setGameEngine = function(){

    var objects = this.objects;
    

    this.level = new Level(objects);
    var layout = new Layout(objects);
    var physics = new Physics(objects.items);
    this.lifes = new Lives();
    var engine = this.engine;
    this.lapse = new SpeederTimer(10,2,0.85);
    var score = 0;
    var scoreBoard = new Box("scoreBoard");
    var blocksDestroyed;
    

    //defining things in the closure
    var lifes = this.lifes;
    var lapse = this.lapse;
    var ball = this.ball;
    var swing = this.swing;
    var level = this.level;
    var game = this;
    var movement = function(){
        physics.move();
        layout.refresh();
        blocksDestroyed = objects.cleanObjects();
        if(level.decreaseBlocks(blocksDestroyed)){
            ball.MoveObjectOverObject(swing);
            ball.stop();
        }
        score += blocksDestroyed;
        
        scoreBoard.write(score);
        if(!game.isFreeze){  
            setTimeout(function(){movement();},lapse.getTimer());    
        }
    };
    movement();


};

Game.prototype.createWalls = function(){
        var margin = 10;
        var winMargin = 0;
        var walls = {};
        walls["rRod"] = new Rod("rightWall", true, -winMargin, -margin/2, Config.Window.height+margin);
        walls["lRod"] = new Rod("LeftWall", true, Config.Window.width+Config.Rod.dim+winMargin, -margin/2, Config.Window.height+margin);
        walls["tRod"] = new Rod("TopWall", false, -margin/2, -winMargin, Config.Window.width+margin);
        walls["bRod"] = new Rod("BottomWall", false, -margin/2,Config.Window.height+Config.Rod.dim+winMargin , Config.Window.width+margin);
        
        

        return walls;
};




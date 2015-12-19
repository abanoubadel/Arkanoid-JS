

var Lives = function (liveNum) {
    this.lives = 2;
    
    this.box = new Box("lives");

    if(typeof liveNum === "number")
    {
        this.lives = liveNum;
    }
        this.box.write((this.lives+1)+"")
}

Lives.prototype.getLives = function() {
    return this.lives;
};

Lives.prototype.isDead = function(){
    return (this.lives <= 0)
}

Lives.prototype.Die = function(){

    if(!this.isDead()){
        this.lives--;
        this.box.write((this.lives+1)+"")

        return false;
    }
    this.whenDead();    
    return true;
}

Lives.prototype.whenDead = function () {
    // body...

}

var Box = function(id){
    this.id = id;
    this.box = document.createElement("div");
    this.box.id = id;
    document.body.appendChild(this.box);
    this.box.style.fontSize = "50px";
};
Box.prototype.write = function(txt) {
    document.getElementById(this.id).innerHTML = txt;
}







var Game = function() {
    var window = new Window();
    var objects = new Objects();
    var swing = new Swing((Config.Window.width / 2) - 50, Config.Window.height - 50);
    var ball = new Ball((Config.Window.width / 2) - 20, Config.Window.height - 90, 10, -10);
    
    this.createWalls = function(){
        var margin = 10;
        var winMargin = 0;
        var walls = {};
        walls["rRod"] = new Rod("rightWall", true, -winMargin, -margin/2, Config.Window.height+margin);
        walls["lRod"] = new Rod("LeftWall", true, Config.Window.width+Config.Rod.dim+winMargin, -margin/2, Config.Window.height+margin);
        walls["tRod"] = new Rod("TopWall", false, -margin/2, -winMargin, Config.Window.width+margin);
        walls["bRod"] = new Rod("BottomWall", false, -margin/2,Config.Window.height+Config.Rod.dim+winMargin , Config.Window.width+margin);
        
        

        return walls;
    }
    objects.addSingleItem(swing);
    objects.addSingleItem(ball);

    var walls = this.createWalls();
    bRod = walls["bRod"];
    

    //document.body.appendChild(document.c)
    
    var lifes = new Lives();
    
    lifes.whenDead = function(){
        document.body.innerHTML ="Game over"
    }

    bRod.whenCollided = function(obj){
        lifes.Die();
        obj.setX( swing.getX()+(swing.getWidth()-obj.getWidth())/2 );
        obj.setY( swing.getY()-obj.getHeight() );
        lapse.reset();     
//        obj.stop();
    }


    lapse = new SpeederTimer(30,2,0.95);
    swing.whenCollided = function(obj){
        lapse.incSpeed();
    }
        
    objects.addItems(walls);



    var engine = new Engine(swing,0,Config.Window.width);
    var level = new Level(objects);
    var layout = new Layout(objects);
    var physics = new Physics(objects.items);
    
    var score = 0;
    var scoreBoard = new Box("scoreBoard");

    var movement = function(){
        physics.move();
        layout.refresh();
        score += objects.cleanObjects();
        scoreBoard.write(score+" points");  
        setTimeout(function(){movement();},lapse.getTimer());    

    };
    movement();

    /*var time = setTimeout(function(){
        movement();

    }, lapse);*/
   /* var pTime = setInterval(function(){
        physics.move();
    }, 500);*/

    layout.draw();
};








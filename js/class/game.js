var Game = function() {
    var window = new Window();
    var objects = new Objects();
    var swing = new Swing((Config.Window.width / 2) - 50, Config.Window.height - 50);
    var ball = new Ball((Config.Window.width / 2) - 10, Config.Window.height - 75, 10, 10);
    
    
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
    

    var lives = 3;
    var lifeBox = document.createElement('div');
    lifeBox.id = 'life';
    //document.body.appendChild(document.c)
    

    bRod.whenCollided = function(obj){
        lives--;
        obj.stop();
        clearInterval(time);
    }
        
    objects.addItems(walls);



    var engine = new Engine(swing,0,Config.Window.width);
    var level = new Level(objects);
    var layout = new Layout(objects);
    var physics = new Physics(objects.items);

    var time = setInterval(function(){
        physics.move();
        layout.refresh();
        objects.cleanObjects(); 
        

    }, 60);
   /* var pTime = setInterval(function(){
        physics.move();
    }, 500);*/

    layout.draw();
};



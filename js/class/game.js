var Game = function() {
    var window = new Window();
    var objects = new Objects();
    var swing = new Swing((Config.Window.width / 2) - 50, Config.Window.height - 50);
    var ball = new Ball((Config.Window.width / 2) - 20, Config.Window.height - 90, 10, 10);
    
    
    this.createWalls = function(){
        var margin = 10;
        var winMargin = 0;
        var walls = [];
        var rRod = new Rod("rightWall", true, -winMargin, -margin/2, Config.Window.height+margin);
        var lRod = new Rod("LeftWall", true, Config.Window.width+Config.Rod.dim+winMargin, -margin/2, Config.Window.height+margin);
        var tRod = new Rod("TopWall", false, -margin/2, -winMargin, Config.Window.width+margin);
        var bRod = new Rod("BottomWall", false, -margin/2,Config.Window.height+Config.Rod.dim+winMargin , Config.Window.width+margin);
        
        bRod.whenCollided = function(obj){
            obj.stop();
        }
        walls.push(rRod);
        walls.push(lRod);
        walls.push(tRod);
        walls.push(bRod);


        return walls;
    }
    objects.addSingleItem(swing);
    objects.addSingleItem(ball);
    objects.addItems(this.createWalls());



    var engine = new Engine(swing,0,Config.Window.width);
    var level = new Level(objects);
    var layout = new Layout(objects);
    var physics = new Physics(objects.items);

    var time = setInterval(function(){
        physics.move();
        layout.refresh();
        objects.cleanObjects(); 
        

    }, 100);
   /* var pTime = setInterval(function(){
        physics.move();
    }, 500);*/

    layout.draw();
};




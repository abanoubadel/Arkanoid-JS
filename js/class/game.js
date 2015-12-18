var Game = function() {
    //create game window
    var window = new Window();
    //create game object
    var objects = new Objects();
    //create swing
    var swing = new Swing(
        (Config.Window.width / 2) - 50, // x axis
        Config.Window.height - 30 // y axis
    );
    //create ball
    var ball = new Ball(70, 70, -10, -10);
    //add swing to game object
    objects.addSingleItem(swing);
    //add ball to game object
    objects.addSingleItem(ball);
    //
    var engine = new Engine(
        swing, 
        0, // minimum swing range
        Config.Window.width //maximum swing range
    );
    //create level (default first level) you can change it from Config
    var level = new Level(objects);
    //create layout
    var layout = new Layout(objects);
    //draw layout
    layout.draw();

    // var time = setInterval(function(){
    //     layout.refresh();
    // }, 50);
};

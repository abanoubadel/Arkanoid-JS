var Game = function() {
    var window = new Window();
    var objects = new Objects();
    var swing = new Swing((Config.Window.width / 2) - 50, Config.Window.height - 30);
    var ball = new Ball(70, 70, -10, -10);
    objects.addSingleItem(swing);
    objects.addSingleItem(ball);
    var engine = new Engine(swing);
    var level = new Level(objects);
    var layout = new Layout(objects);

    var time = setInterval(function(){
        layout.refresh();
    }, 50);

    layout.draw();
};

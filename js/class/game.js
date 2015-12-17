var Game = function() {
    var window = new Window();
    var objects = new Objects();
    var level = new Level( objects );
    var layout = new Layout( objects );
    console.log( objects );
    layout.draw();
};
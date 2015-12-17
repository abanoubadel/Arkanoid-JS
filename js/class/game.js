var Game = function() {
    // var menu = new Menu();
    var window = new Window();
    var level = new Level();
    var layout = new Layout();
    // layout.append( menu.generateHTML() );
    layout.append(level.draw());
};

var Swing = function(x, y) {
    //calling constructors
    this.velocityX = 0;
    this.velocityY = 0;
    var length = 100;
    var width = 30;
    Shape.call(this, x, y, length, width, "swing", "swing");
    this.setColor("black");
};

Swing.prototype = Object.create(MovingShape.prototype);
Swing.prototype.constructor = Swing;


Swing.prototype.move = function(x) {
    // body...
    MovingShape.prototype.move.call(this, x, 0);
};


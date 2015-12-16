var Block = function(id, x, y, classes, BGcolor) {
    Shape.call(this, x, y, Config.Block.width, Config.Block.height, id, classes, BGcolor);
    this.colors = ['violet', 'orange', 'blue', 'red', 'yellow', 'green'];

    this.setColor = function(num) {
        this.addClass(this.colors[num]);
    };

    this.setRandomColor = function() {
        var num = Math.floor(Math.random() * (this.colors.length - 0)) + 0;
        this.addClass(this.colors[num]);
    };
};

Block.prototype = Object.create(MovingShape.prototype);
Block.prototype.constructor = Block;
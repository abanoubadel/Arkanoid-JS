var Block = function(id, x, y, classes, BGcolor) {
    Shape.call(this, x, y, Config.Block.width, Config.Block.height, id, classes, BGcolor);
    this.colors = ['purple', 'grey', 'blue', 'red', 'yellow', 'green'];


    this.setColor = function(num) {
        this.addClass(this.colors[num]);
    };

    this.setRandomColor = function() {
        var num = Math.floor(Math.random() * (this.colors.length - 0)) + 0;
        this.addClass(this.colors[num]);
    };
};
Block.prototype = Object.create(Shape.prototype);
Block.prototype.constructor = Block;

Block.prototype.checkCollision = function(obj) {
	var result = Shape.prototype.checkCollision.call(this,obj);
	if(result[0]> 0 || result[1]> 0 )
	{
		this.addClass("anhillated");
		this.destroy();
	}
	return result; 
}
//MovingShape.prototype.move.call


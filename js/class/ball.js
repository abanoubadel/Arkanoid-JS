var Ball = function(x, y, vx, vy) {
    // body...
    var width = 25;
    var height = width;
    Shape.call(this, x, y, width, height, "Ball", "Ball");
    this.velocityX = vx;
    this.velocityY = vy;
}

Ball.prototype = Object.create(MovingShape.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.checkCollision = function(obj) {
    var coll = MovingShape.prototype.checkCollision.call(this, obj);
    return coll;

}


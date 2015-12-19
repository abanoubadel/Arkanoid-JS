var Rod = function(id, isVertical, x, y, length) {
    var height;
    var width;
    this.sound = "sound/rod.mp3"

    var thin = Config.Rod.dim;
    if (isVertical) {
        height = length;
        width = thin;
        x = x -thin;
    } else {
        height = thin;
        width = length;
        y = y-thin;
    }

    Shape.call(this, x, y, width, height, id, "rod");

}
Rod.prototype = Object.create(Shape.prototype);
Rod.prototype.constructor = Rod;

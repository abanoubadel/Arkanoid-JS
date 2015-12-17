










var Rod = function(id, isVertical, x, y, length) {
    var height;
    var width;
    var thin = 10;
    if (isVertical) {
        height = length;
        width = thin;
    } else {
        height = thin;
        width = length;
    }
    Shape.call(this, x, y, width, height, id, "rod");

}



Rod.prototype = Object.create(Shape.prototype);
Rod.prototype.constructor = Rod;

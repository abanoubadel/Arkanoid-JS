var MovingShape = function(x, y, width, height, id, addedClass) {
   Shape.call(this, x, y, width, height, id, addedClass);
 
    this.velocityX = 0;
    this.velocityY = 0;
    this.accX = 1.5;
    this.accY =1.2;

}





MovingShape.prototype = Object.create(Shape.prototype);
MovingShape.prototype.constructor = MovingShape;

MovingShape.prototype.getAcceleration =function(){
    console.log([this.accX,this.accY]);
    return [this.accX,this.accY];
}

MovingShape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    //this.setPlace();
}

MovingShape.prototype.revertVelocityX = function() {
    this.velocityX *= -1*this.getAcceleration()[1];
    this.accX = (this.accX-1)*0.7+1;

};

MovingShape.prototype.revertVelocityY = function() {
    this.velocityY *= -1*this.getAcceleration()[1];

    this.accY = (this.accY-1)*0.7+1;
};

MovingShape.prototype.stop = function() {
    this.velocityX = 0;
    this.velocityY = 0;
};



MovingShape.prototype.getVelocityDir = function(){
    return [this.velocityX/Math.abs(this.velocityX),this.velocityY/Math.abs(this.velocityY)];
};


MovingShape.prototype.revertVelocity = function(carr) {
    var vector1 = Math.sqrt(this.velocityX*this.velocityX + this.velocityY*this.velocityY);
    if (carr[0] > 0) {
        this.revertVelocityX();
    }
    if (carr[1] > 0) {
        this.revertVelocityY();

    };
    var vector2 = Math.sqrt(this.velocityX*this.velocityX + this.velocityY*this.velocityY);
    if(vector2 != 0)
    {
        this.velocityX  = Math.ceil((this.velocityX*vector1)/vector2);
        this.velocityY  = Math.ceil((this.velocityY*vector1)/vector2);
    }
}


MovingShape.prototype.inertia = function() {
    this.move(this.velocityX, this.velocityY);
    //MovingShape.prototype.move.call(this,this.velocityX,this.velocityY);	
}

MovingShape.prototype.setX = function(x) {
    this.move(x - this.getX(), 0);
}
MovingShape.prototype.setY = function(y) {
    this.move(0,y - this.getY());
}

/*MovingShape.prototype.checkCollisionDims = function(obj) {
    var center1 = this.getCenter();
    var center2 = obj.getCenter();
    var dim1 = this.getDims();
    var dim2 = obj.getDims();
    var collisionDim = [];
    for (var i = 0; i < this.getDimSize(); i++) {
        collisionDim.push(-1 * Math.abs(center1[i] - center2[i]) + (dim1[i] + dim2[i]) / 2);
    };
    


    var CollisionHappened = true;

    for (var i = 0; i < collisionDim.length; i++) {
        if (collisionDim[i] < 0) {
            CollisionHappened = false;
        }
    };
    if (!CollisionHappened) {
        for (var i = 0; i < collisionDim.length; i++) {
            collisionDim[i] = 0;
        };
    }

    return collisionDim;


}


MovingShape.prototype.checkCollision = function(obj) {
    var center2 = obj.getCenter();
    var center1 = this.getCenter();

    if (this == obj) {
        return [0, 0];
    }
    var collArr = this.checkCollisionDims(obj);
    if (collArr[1] >= collArr[0]) {
        collArr[1] = 0;

    } else {
        collArr[0] = 0;
    }
    for (var i = 0; i < collArr.length; i++) {
        if (collArr[i] < 0) {
            collArr[i] = 0;
        }
    };
    return collArr;

}*/


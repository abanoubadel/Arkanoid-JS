var MovingShape = function(x, y, width, height, id, addedClass) {
   Shape.call(this, x, y, width, height, id, addedClass);

    this.velocityX = 0;
    this.velocityY = 0;
    this.accX = 1.0;
    this.accY =1.0;

}





MovingShape.prototype = Object.create(Shape.prototype);
MovingShape.prototype.constructor = MovingShape;

MovingShape.prototype.getAcceleration =function(){
    //console.log([this.accX,this.accY]);
    return [this.accX,this.accY];
}

MovingShape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    //this.setPlace();
}

MovingShape.prototype.revertVelocityX = function() {
    this.velocityX *= -1;
    //this.accX = (this.accX-1)*0.7+1;

};

MovingShape.prototype.revertVelocityY = function() {
    this.velocityY *= -1;

    //this.accY = (this.accY-1)*0.7+1;
};

MovingShape.prototype.stop = function() {
    this.velocityX = 0;
    this.velocityY = 0;
};



MovingShape.prototype.getVelocityDir = function(){
    var arr = [];
    if(Math.abs(this.velocityX)>0)
    {
        arr.push(1);
    }
    else
    {
        arr.push(this.velocityX/Math.abs(this.velocityX));   
    }
    
    if(Math.abs(this.velocityY)>0)
    {
        arr.push(1);
    }
    else
    {
        arr.push(this.velocityY/Math.abs(this.velocityY));   
    }
    return arr;
    
};

MovingShape.prototype.getVelocityangle = function(){
    
    if(Math.abs(this.velocityY)>0)
    {
        return Math.atan(Math.abs(this.velocityX)/Math.abs(this.velocityY))*180/(Math.PI);
    }
    return 0;
};




MovingShape.prototype.changeAngleOnCollision = function(carr){
    //checking if the hit is not diagonal or there is a hit 
    if(!( (carr[0]<=0 && carr[1] <= 0) || (carr[0] > 0 && carr[1] > 0) ))
    {
        var objAngle = this.getVelocityangle();
        var refrenceAngle;
        if(carr[0]>0)
        {
            refrenceAngle = 90;
        }
        if(carr[1]>0)
        {
            refrenceAngle = 0;
        }
        var angleChange = (refrenceAngle - objAngle)*0.1;
        var derievedAngle = objAngle+angleChange;
        
        if(derievedAngle>60){
            objAngle = 60;
        }
        else if(derievedAngle<30){
            objAngle = 30;
        }
        else
        {
            objAngle = derievedAngle;   
        }
        this.setVelocityTheta(objAngle); 

    }       

};

MovingShape.prototype.setVelocityTheta = function(theta){
    angle = theta*Math.PI/180;
    var v = this.getScalarVelocity();
    this.velocityX = v*Math.cos(angle)*this.getVelocityDir()[0];
    this.velocityY = v*Math.sin(angle)*this.getVelocityDir()[1];

};

MovingShape.prototype.revertVelocity = function(carr) {
    if (carr[0] > 0) {
        this.revertVelocityX();
    }
    if (carr[1] > 0) {
        this.revertVelocityY();

    };
    //this.changeAngleOnCollision(carr);





   
    /*if(vector2 != 0)
    {
        this.velocityX  = Math.ceil((this.velocityX*vector1)/vector2);
        this.velocityY  = Math.ceil((this.velocityY*vector1)/vector2);
    }*/
}

MovingShape.prototype.MoveObjectOverObject = function(obj) {
        this.setX( obj.getX()+(obj.getWidth()-this.getWidth())/2 );
        this.setY( obj.getY()-this.getHeight() );

}


MovingShape.prototype.getScalarVelocity = function() {
    return Math.sqrt(this.velocityX*this.velocityX + this.velocityY*this.velocityY);
};


MovingShape.prototype.inertia = function() {
    this.move(this.velocityX, this.velocityY);
    //MovingShape.prototype.move.call(this,this.velocityX,this.velocityY);	
};

MovingShape.prototype.setX = function(x) {
    this.move(x - this.getX(), 0);
};
MovingShape.prototype.setY = function(y) {
    this.move(0,y - this.getY());
};

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


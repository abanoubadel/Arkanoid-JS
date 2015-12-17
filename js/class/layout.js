var Layout = function( objects ) {
    var id = "game";
    var game = document.getElementById(id);

    this.clear = function() {
        game.innerHTML = '';
    };

    this.append = function(element) {
        game.appendChild(element);
    };

    this.draw = function(){
    	for (var i = 0; i < objects.items.length; i++) {
    		var div = document.createElement('div');
    		div.id = objects.items[i].getId();
    		div.style.left = objects.items[i].getX() + "px";
    		div.style.top = objects.items[i].getY() + "px";
    		div.style.width = objects.items[i].getWidth() + "px";
    		div.style.height = objects.items[i].getHeight() + "px";
    		var classes = objects.items[i].getClasses();

    		for (var j = 0; j < classes.length; j++) {
    			div.classList.add(classes[j]);
    		};

    		this.append(div);
    	};
    };

    this.refresh = function(){
        this.clear();
        this.draw();
    };
};

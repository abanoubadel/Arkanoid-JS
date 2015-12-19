var Objects = function(){
	this.items = [];
	this.setItems = function(items){
		// itemsMirror = Object.create(items)
		/*while(items.length > 0) {
			this.addSingleItem(items.shift());
		};*/
		for (var key in items) {
			if (items.hasOwnProperty(key)) {
    			this.addSingleItem(items[key]);
  			}
		}
		
	};
	this.addItems = function(items){
		this.setItems(items);
	};

	this.cleanObjects = function(){
		num = 0;
		for (var i = 0; i < this.items.length; i++) {
			if(this.items[i].isDestroyed())
			{
				this.remove(i);
				num++;
			}
		};
		return num;
	}

	this.remove = function(num){
		this.items[num]=this.items[this.items.length-1]
		this.items.pop();
	}
	this.addSingleItem = function(item){
		if(item instanceof Shape)
		{
			this.items.push(item);
		}
	};


};
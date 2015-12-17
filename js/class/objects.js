var Objects = function(){
	this.items = [];
	this.setItems = function(items){
		// itemsMirror = Object.create(items)
		for (var i = 0; i < items.length; i++) {
			this.items.push(items.shift());
		};		
	};
	this.addSingleItem = function(item){
		items.items.push(item);
	};
};
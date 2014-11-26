/* The iterator pattern provides a way to iterate through a collection of items or 
objects in a special way depending on the needs of the client
*/
var Iterator = function(items){
	this.index = 0;
	this.items = items;
}

Iterator.prototype = {
	first: function(){
		this.reset();
		return this.next();
	},
	next: function(){
		return this.items[this.index++];
	},
	hasNext: function(){
		return this.index <= this.items.length;
	},
	reset: function(){
		this.index = 0;
	},
	each: function(callback){
		for(var item = this.first(); this.hasNext() ; item = this.next()){
			callback(item);
		}
	}
}

var items = ["lol", 1, "Florian", 126, "Super", 921];

var iter = new Iterator(items);
iter.each(function(item){
	console.log(item);
});
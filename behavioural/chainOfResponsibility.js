/*Chain of responsibilty makes it possible to chain function calls
with each one changing the state of the object before the next function calls
Widely used in javascript (JQuery, DOM);*/

var Request = function(value){
	this.amount = value;
}
Request.prototype = {
	get: function(bill){
		var count = Math.floor(this.amount/ bill);
		this.amount -= count * bill;
		console.log("Dispense "+ count + " $"+ bill + " bills");
		return this;
	}
}

var request = new Request (538);
request.get(100).get(50).get(20).get(10).get(5).get(1);

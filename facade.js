/*
The façade structural pattern provides an "interface" through which a client can
interract with various layers of an architecture. The façade simplified the 
underlying layers
*/
var Mortgage = function(name){
	this.name = name;
}
Mortgage.prototype = {
	applyFor: function(amount){
		var result = "approved";
		if(!new Bank().verify(this.name, amount)){
			result = "denied";
		} else if(!new Credit().get(this.name)){
			result = "denied";
		} else if(!new Background().check(this.name)){
			result = "denied";
		}
		return this.name + " Has been " + result + " for a "+ amount+ " mortgage";
	}
}
var Bank = function(){
	this.verify = function(name, amount){
		return true;
	}
}
var Credit = function(){
	this.get = function(name){
		return true;
	}
}
var Background = function(){
	this.check = function(name){
		return true;
	}
}

var mort = new Mortgage("Florian");
console.log(mort.applyFor("15.000$"));

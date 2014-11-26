function Shop(){
	this.construct = function(builder){
		builder.step1();
		builder.step2();
		return builder.build();

	}
}
function Car(){
	this.doors=  0;
	this.addParts = function(){
		this.doors = 3;
	}
	this.say = function(){
		console.log("I have "+this.doors+" doors")
	}
}
function CarBuilder(){
	this.car = null;
	this.step1 = function(){
		this.car = new Car();
	}
	this.step2 = function(){
		this.car.addParts();
	}
	this.build = function(){
		return this.car;
	}
}
var aBuilder = new CarBuilder();
var aShop = new Shop();
var aCar = aShop.construct(aBuilder);
aCar.say();
/*Decorator structural design pattern;
Add functionality to an existing object by wrapper over it 
So basically it's just a wrapper with added functionality
*/
var User = function(name) {
	this.name = name;

	this.say = function() {
		console.log("User: " +this.name);
	}
}

var DecoratedUser = function(user, street, city) {
	this.user = user;
	this.name = user.name;
	this.street = street;
	this.city = city;

	this.say = function() {
		console.log("Decorated user: " + this.name + ", " +
			this.street + ", " + this.city);
	}
}

var user = new User("Florian");
user.say();

var decorated = new DecoratedUser(user, "Roland Garros", "Chateauroux");
decorated.say();


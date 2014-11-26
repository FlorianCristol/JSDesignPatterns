function EmployeeFactory() {
	this.createEmployee = function(type) {
		var employee;
		if (type === "parttime") {
			employee = new PartTime();
		} else if (type === "fulltime") {
			employee = new FullTime();
		}

		employee.type = type;

		employee.say = function() {
			console.log("I am " + this.type + "");
		}
		return employee;
	}
}

function PartTime() {
	this.hourly = "$14";
}

function FullTime() {
	this.hourly = "$16";
}
var fact = new EmployeeFactory();
var em = new fact.createEmployee("parttime");
em.say();
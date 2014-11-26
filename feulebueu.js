function add(x,y){
	return x+y;
}
function sub(x,y){
	return x-y;
}
var Command = function(execute,undo,value){
	this.execute = execute;
	this.undo = undo;
	this.value = value;
}
var AddCommand = function(value){
	return new Command(add,sub,value);
}
var SubCommand = function(value){
	return new Command(sub,add,value);
}


var Calculator = function(){
	var current = 0;
	var commands = [];

	return {
		execute: function(command){
			current = command.execute(current, command.value);
			commands.push(command);
		},
		undo: function(){
			command = this.commands.pop();
			current = command.execute(current, command.value)
		},
		getCurrentValue: function(){
			return current;
		}
	}
}
var calc = new Calculator();
calc.execute(new AddCommand(60));
console.log(calc.getCurrentValue());
var Singleton = (function(){
	var instance;

	function createInstance(){
		var object = new Object("This is the object");
		return object;
	}
	return {
		getInstance: function(){
			if(!instance){
				instance = createInstance();
			}
			return instance;
		}
	};
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
if(instance1 !== instance2){
	console.log("no singleton");
}else{
	console.log("singleton");
}



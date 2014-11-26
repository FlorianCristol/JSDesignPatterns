/* Proxy structural pattern
This pattern uses a class which is between the client and the class containg 
the data the client is looking for; It serves the same data but can do it in
a different way. Maybe more optimised.
It can help to reduce the number of server calls for example, which take
a lot of time;
*/
function GeoCoder() {
	this.getLatLng = function(address) {
		if (address === "Amsterdam") {
			return "52.3700° N, 4.8900° E";
		} else if (address === "London") {
			return "51.5171° N, 0.1062° W";
		} else if (address === "Paris") {
			return "48.8742° N, 2.3470° E";
		} else if (address === "Berlin") {
			return "52.5233° N, 13.4127° E";
		} else {
			return "";
		}
	};
}

function GeoProxy() {
	var geocoder = new GeoCoder();
	var geocache = [];
	return {
		getLatLng: function(address) {
			if (!geocache[address]) {
				geocache[address] = geocoder.getLatLng(address);
				console.log("Adding to cache "+address);
			}
			console.log(address + ": " + geocache[address]);
			return geocache[address];
		},
		getCount: function() {
			var count = 0;
			for (var code in geocache) {
				count++;
			}
			return count;
		}
	};
}
var geo = new GeoProxy();

// geolocation requests

geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("London");
geo.getLatLng("London");
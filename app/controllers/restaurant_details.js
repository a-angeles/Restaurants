//Emy code
var APP = require("core");

var CONFIG = arguments[0];
//
$.NavigationBar.showBack(function(_event) {
	APP.removeChild();
});
//
APP.log("debug", "text | " + JSON.stringify(CONFIG));

$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

$.menu.addEventListener("click", function() {
	APP.addChild("menu", {
		isChild: "true",
		text: "Hello from menu",
	});

});

$.hours.addEventListener("click", function() {
	APP.addChild("hours", {
		isChild: "true",
		text: "Hello from hours",
	});

});

$.about.addEventListener("click", function() {
	APP.addChild("about", {
		isChild: "true",
		text: "Hello from about",
	});

});
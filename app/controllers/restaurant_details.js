//Emy code
var APP = require("core");

var CONFIG = arguments[0];
//
$.NavigationBar.showBack(function(_event) {
	APP.removeChild();
});
//
APP.log("debug", "text | " + JSON.stringify(CONFIG));

$.heading.text = CONFIG.heading;
$.heading.color = APP.Settings.colors.hsb.primary.b > 70 ? "#000" : APP.Settings.colors.primary;
$.text.text = CONFIG.text;
$.hoursText.text = CONFIG.hours;
$.menuText.text = CONFIG.menu;
$.aboutText.text = CONFIG.about;

//$.photoText.image = CONFIG.photo.urls.square_75;
/*
for(var thing in CONFIG.photo) {
	alert(thing + " = " + CONFIG.photo[thing]);
}

alert(CONFIG.photo);
Ti.API.info(CONFIG.photo);
*/
$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

/*
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
*/
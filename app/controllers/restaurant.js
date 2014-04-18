/**
 * Controller for the text screen
 *
 * @class Controllers.text
 * @uses core
 */
var APP = require("core");

var CONFIG = arguments[0];

APP.log("debug", "text | " + JSON.stringify(CONFIG));

$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

if(CONFIG.isChild === true) {
	$.NavigationBar.showBack(function(_event) {
		APP.removeChild();
	});
} else {
	if(APP.Settings.useSlideMenu) {
		$.NavigationBar.showMenu(function(_event) {
			APP.toggleMenu();
		});
	} else {
		$.NavigationBar.showSettings(function(_event) {
			APP.openSettings();
		});
	}
}

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
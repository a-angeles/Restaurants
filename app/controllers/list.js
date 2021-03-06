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

$.rest.addEventListener("click", function() {
	APP.addChild("restaurant", {
		isChild: "true",
		text: "Hello from BK",
	});

});

// Do we need this part of the code? It works fine without it.
//var args = arguments[0] || {};
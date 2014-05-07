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

if(CONFIG.photo) {
	$.photoText.image = CONFIG.photo.urls.medium_640;
}

$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

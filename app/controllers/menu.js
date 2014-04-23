/**
 * Controller for the text screen
 *
 * @class Controllers.text
 * @uses core
 */
var APP = require("core");

var CONFIG = arguments[0];
// create the back button
$.NavigationBar.showBack(function(_event) {
	APP.removeChild();
});

APP.log("debug", "text | " + JSON.stringify(CONFIG));

$.heading.text = CONFIG.heading;
$.heading.color = APP.Settings.colors.hsb.primary.b > 70 ? "#000" : APP.Settings.colors.primary;
$.text.text = CONFIG.text;

$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
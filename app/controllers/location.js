/**
 * Controller for the text screen
 *
 * @class Controllers.text
 * @uses core
 */
var APP = require("core");

var CONFIG = arguments[0];

APP.log("debug", "text | " + JSON.stringify(CONFIG));

//$.heading.text = CONFIG.heading;
//$.heading.color = APP.Settings.colors.hsb.primary.b > 70 ? "#000" : APP.Settings.colors.primary;
//$.text.text = CONFIG.text;

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
//var args = arguments[0] || {};

//Annotations

//Union
var anno1 = Alloy.Globals.Map.createAnnotation({
	title: "Union",
	latitude: 43.075455,
	longitude: -87.881401,
});
$.map.addAnnotation(anno1);

//Sandburg

var anno2 = Alloy.Globals.Map.createAnnotation({
	title: "Sandburg",
	latitude: 43.079358,
	longitude: -87.882539,
});
$.map.addAnnotation(anno2);

//Cambridge
var anno3 = Alloy.Globals.Map.createAnnotation({
	title: "Cambridge",
	latitude: 43.061018,
	longitude: -87.892002,
});
$.map.addAnnotation(anno3);

//Riverview
var anno4 = Alloy.Globals.Map.createAnnotation({
	title: "Riverview",
	latitude: 43.060893,
	longitude: -87.895285,
});
$.map.addAnnotation(anno4);

//Northwest Quadrant
var anno5 = Alloy.Globals.Map.createAnnotation({
	title: "Northwest",
	latitude: 43.078794,
	longitude: -87.884406,
});
$.map.addAnnotation(anno5);

//Library
var anno6 = Alloy.Globals.Map.createAnnotation({
	title: "Library",
	latitude: 43.077477,
	longitude: -87.880264,
});
$.map.addAnnotation(anno6);

//EMS
var anno7 = Alloy.Globals.Map.createAnnotation({
	title: "EMS",
	latitude: 43.076067,
	longitude: -87.88653,
});
$.map.addAnnotation(anno7);

//Enderis
var anno8 = Alloy.Globals.Map.createAnnotation({
	title: "Enderis",
	latitude: 43.078026,
	longitude: -87.879663,
});
$.map.addAnnotation(anno8);

//Cunningham
var anno9 = Alloy.Globals.Map.createAnnotation({
	title: "Cunningham",
	latitude: 43.077916,
	longitude: -87.885693,
});
$.map.addAnnotation(anno9);
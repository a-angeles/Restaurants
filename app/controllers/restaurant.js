//variable creation and call to core modules
var APP = require("core");
var CONFIG = arguments[0];
var Cloud = require("ti.cloud");

//creating the init function
var init = function() {

	//log any errors
	APP.log("debug", "text | " + JSON.stringify(CONFIG));

	//navigation background color set from framework
	$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

	//is this a child window, if so display back arrow vs. hamburger
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

	//call to login user function
	loginUser();

};

//make something function -- can do with out later (remember to kill out of login function)
var makeSomeThing = function() {
	Cloud.Objects.create({
		classname: 'Restaurants',
		fields: {
			name: 'TheCoolGrind',
			hours: '9am - 9pm',
			logo: "/images/logo.png",
			menuId: 0,
			building: "Union"
		}
	}, function(e) {
		if(e.success) {

			Ti.API.info("=====");
			Ti.API.info("Inspecting Object e: " + e);
			for(var thing in e) {
				Ti.API.info("e." + thing + " = " + e[thing]);
			}
			Ti.API.info("=====");

			var test = e.Restaurants[0];
			alert('Success:\n' + 'id: ' + test.id + '\n' + 'name: ' + test.name);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};

//getting all the stuff from the cloud
var getAllTheThings = function() {
	Cloud.Objects.query({
		classname: 'Restaurants',
		page: 1,
		per_page: 50
	}, function(e) {
		if(e.success) {

			var rows = [];

			alert('Success:\n' + 'Count: ' + e.Restaurants.length);
			for(var i = 0; i < e.Restaurants.length; i++) {
				var restaurant = e.Restaurants[i];
				//alert('id: ' + restaurant.id + '\n' + 'name: ' + restaurant.name );

				var row = Ti.UI.createTableViewRow({
					layout: "vertical",
					hasChild: true,
					name: restaurant.name,
					building: restaurant.building
				});

				var title = Ti.UI.createLabel({
					text: restaurant.name,
					font: {
						fontFamily: "bold",
						fontSize: "22dp"
					},
					left: "10dp"
				});

				var hours = Ti.UI.createLabel({
					text: restaurant.hours,
					left: "10dp"
				});

				row.add(title);
				row.add(hours);

				rows.push(row);

			}

			$.myStuff.setData(rows);

		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};

//login function
var loginUser = function() {
	Cloud.Users.login({
		login: 'test',
		password: 'test'
	}, function(e) {
		if(e.success) {
			var user = e.users[0];
			alert('Success:\n' + 'id: ' + user.id + '\n' + 'sessionId: ' + Cloud.sessionId + '\n' + 'first name: ' + user.first_name + '\n' + 'last name: ' + user.last_name);

			makeSomeThing();
			alert("made something");

			getAllTheThings();
			alert("got somethings");

		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};

//click event
$.myStuff.addEventListener("click", function(e) {

	//make a restaurant_details js xml and tss
	//and write all restaurant details ther.
	APP.addChild("text", {
		heading: e.row.name,
		text: e.row.building
	});
});

init();

//Emy code
/*var APP = require("core");

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

});*/

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
			name: 'Burger King',
			building: "Union",
			hours: '10am - 8pm',
			menu: "combo 1 n combo2 n combo3 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum",
			about: "This is a test for about BK Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum"
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
					building: restaurant.building,
					hours: restaurant.hours,
					photo: restaurant.photo,
					menu: restaurant.menu,
					about: restaurant.about
				});

				var title = Ti.UI.createLabel({
					text: restaurant.name,
					font: {
						fontFamily: "bold",
						fontSize: "22dp"
					},
					left: "10dp"
				});

				row.add(title);

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

			//APP.openLoading();

			getAllTheThings();

			//APP.closeLoading();
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
	APP.addChild("restaurant_details", {
		heading: e.row.name,
		text: e.row.building,
		hours: e.row.hours,
		menu: e.row.menu,
		about: e.row.about,
		photo: e.row.photo
	});
});

init();
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "hours";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Text"
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "data/logo.png",
        __parentSymbol: $.__views.Wrapper
    });
    $.__views.NavigationBar.setParent($.__views.Wrapper);
    $.__views.heading = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "25dp",
            fontFamily: "HelveticaNeue-Light"
        },
        color: "#000",
        id: "heading"
    });
    $.__views.Wrapper.add($.__views.heading);
    $.__views.text = Ti.UI.createLabel({
        top: "10dp",
        left: "15dp",
        right: "15dp",
        bottom: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        color: "#000",
        id: "text"
    });
    $.__views.Wrapper.add($.__views.text);
    var __alloyId4 = [];
    $.__views.__alloyId5 = {
        properties: {
            color: "#000",
            title: "RESTAURANT 1",
            id: "__alloyId5"
        }
    };
    __alloyId4.push($.__views.__alloyId5);
    $.__views.__alloyId6 = {
        properties: {
            color: "#000",
            title: "RESTAURANT 2",
            id: "__alloyId6"
        }
    };
    __alloyId4.push($.__views.__alloyId6);
    $.__views.__alloyId7 = {
        properties: {
            color: "#000",
            title: "RESTAURANT 3",
            id: "__alloyId7"
        }
    };
    __alloyId4.push($.__views.__alloyId7);
    $.__views.__alloyId8 = {
        properties: {
            color: "#000",
            title: "RESTAURANT 4",
            id: "__alloyId8"
        }
    };
    __alloyId4.push($.__views.__alloyId8);
    $.__views.__alloyId9 = {
        properties: {
            color: "#000",
            title: "RESTAURANT 5",
            id: "__alloyId9"
        }
    };
    __alloyId4.push($.__views.__alloyId9);
    $.__views.__alloyId10 = {
        properties: {
            color: "#000",
            title: "RESTAURANT 6",
            id: "__alloyId10"
        }
    };
    __alloyId4.push($.__views.__alloyId10);
    $.__views.__alloyId11 = {
        properties: {
            color: "#000",
            title: "RESTAURANT 7",
            id: "__alloyId11"
        }
    };
    __alloyId4.push($.__views.__alloyId11);
    $.__views.__alloyId2 = Ti.UI.createListSection({
        id: "__alloyId2"
    });
    $.__views.__alloyId2.items = __alloyId4;
    var __alloyId12 = [];
    __alloyId12.push($.__views.__alloyId2);
    $.__views.__alloyId1 = Ti.UI.createListView({
        sections: __alloyId12,
        id: "__alloyId1"
    });
    $.__views.Wrapper.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var CONFIG = arguments[0];
    APP.log("debug", "text | " + JSON.stringify(CONFIG));
    $.heading.text = CONFIG.heading;
    $.heading.color = APP.Settings.colors.hsb.primary.b > 70 ? "#000" : APP.Settings.colors.primary;
    $.text.text = CONFIG.text;
    $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
    true === CONFIG.isChild ? $.NavigationBar.showBack(function() {
        APP.removeChild();
    }) : APP.Settings.useSlideMenu ? $.NavigationBar.showMenu(function() {
        APP.toggleMenu();
    }) : $.NavigationBar.showSettings(function() {
        APP.openSettings();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
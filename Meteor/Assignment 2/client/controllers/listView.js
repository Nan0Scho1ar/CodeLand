Meteor.startup(function() {
    GoogleMaps.load();
});


Session.set("firstArrow", 1);
Session.set("lastArrow", 1);
Session.set("firstLast", "firstName");
Session.set("showAdd", false);
Session.set("showCoordField", true);
Session.set("mode", "display");
Template.listView.helpers({
    allPeople: function() {
        if (Session.get("firstLast") === "firstName") {
            return people.find({}, {sort: {firstName: Session.get("firstArrow")}});
        } else {
            return people.find({}, {sort: {lastName: Session.get("lastArrow")}});
        }
    },
    displayAdd: function() {
        return Session.get("showAdd");
    },
    findMe: function() {
        return Session.get("showCoordField");
    },
    firstUp: function() {
        return Session.get("firstArrow") === 1;
    },
    firstDown: function() {
        return Session.get("firstArrow") === -1;
    },
    lastUp: function() {
        return Session.get("lastArrow") === 1;
    },
    lastDown: function() {
        return Session.get("lastArrow") === -1;
    },
    deleteMode: function() {
        return Session.get("mode") === "delete";
    },
    displayMode: function() {
        return Session.get("mode") === "display";
    },
});

Template.listView.events({
    "click #firstOrder": function() {
        if(Session.get("firstArrow") === 1) {
            Session.set("firstArrow", -1);
            Session.set("firstLast", "firstName");
        } else if(Session.get("firstArrow") === -1) {
            Session.set("firstArrow", 1);
            Session.set("firstLast", "firstName");
        }
    },
    "click #lastOrder": function() {
        if(Session.get("lastArrow") === 1) {
            Session.set("lastArrow", -1);
            Session.set("firstLast", "lastName");
        } else if(Session.get("lastArrow") === -1) {
            Session.set("lastArrow", 1);
            Session.set("firstLast", "lastName");
        }
    },
    "click #hideAdd": function() {
        Session.set("showAdd", false);
    },
    "click #deleteToggle": function() {
       if(Session.get("mode") === "delete") {
        Session.set("mode", "display");
        Session.set("delText", "off");
    } else if(Session.get("mode") === "display") {
        Session.set("mode", "delete");
        Session.set("delText", "on");
    }


},

"click #delete": function (event) {
    var guy = event.currentTarget.name
    Meteor.call("removePerson", guy);
},


      "click #submitAdd": function() {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        if(Session.get("showCoordField") === false) {
            var latitude = Session.get("latitude");
            var longitude = Session.get("longitude");
        } else {
            var latitude = $("#latitude").val();
            var longitude = $("#longitude").val();
        }
        var phoneNumber = $("#phoneNumber").val();
        var email = $("#email").val();
        var gender = $("#gender").val();
        var person = {UUID: guid(), image: "default.png", firstName: firstName, lastName: lastName, gender: gender, latitude: parseFloat(latitude), longitude: parseFloat(longitude), phoneNumber: phoneNumber, email: email};
        Meteor.call("addNewPerson", person);
        Session.set("showAdd", false);
    }
});

// Not my code see http://slavik.meltser.info/the-efficient-way-to-create-guid-uuid-in-javascript-with-explanation/
function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}
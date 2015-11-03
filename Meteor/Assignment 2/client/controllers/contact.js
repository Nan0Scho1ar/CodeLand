
Session.set("showCoordFieldEdit", true);
Session.set("showEdit", false);
if (Meteor.isClient) {
    Meteor.startup(function() {
        GoogleMaps.load();
    });

    Template.contact.helpers({
        exampleMapOptions: function() {
            if (GoogleMaps.loaded()) {
                return {
                    center: new google.maps.LatLng(people.findOne({UUID: Session.get("currentPerson")}).latitude, people.findOne({UUID: Session.get("currentPerson")}).longitude),
                    zoom: 8
                };
            }
        },
        findMeEdit: function() {
            return Session.get("showCoordFieldEdit");
        },
        displayEdit: function() {
            return Session.get("showEdit");
        },
    });

    Template.contact.events({
        "click #hideEdit": function() {
            Session.set("showEdit", false);
        },
        "click #geolocateEdit": function() {
            if(Session.get("showCoordFieldEdit") === false) {
                Session.set("showCoordFieldEdit", true);
            } else {
                Session.set("showCoordFieldEdit", false);
                Session.set("positionEdit", Geolocation.currentLocation());
            }
        },
        "click #submitEdit": function() {
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            if(Session.get("showCoordFieldEdit") === false) {
                var latitude = Session.get("positionEdit").coords.latitude;
                var longitude = Session.get("positionEdit").coords.longitude;
            } else {
                var latitude = $("#latitude").val();
                var longitude = $("#longitude").val();
            }
            var phoneNumber = $("#phoneNumber").val();
            var email = $("#email").val();
            var gender = $("#gender").val();
            var person = {UUID: Session.get("currentPerson"), image: "default.png", firstName: firstName, lastName: lastName, gender: gender, latitude: parseFloat(latitude), longitude: parseFloat(longitude), phoneNumber: phoneNumber, email: email};
            Meteor.call("removePerson", Session.get("currentPerson"));
            Meteor.call("addNewPerson", person);
            Session.set("showEdit", false);
        }
    });

    Template.contact.onCreated(function() {
        // We can use the `ready` callback to interact with the map API once the map is ready.
        GoogleMaps.ready('exampleMap', function(map) {
            // Add a marker to the map once it's ready
            var marker = new google.maps.Marker({
                position: map.options.center,
                map: map.instance
            });
        });
    });
}

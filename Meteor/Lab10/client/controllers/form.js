/*global people*/
Template.form.events({
    "submit form": function (event, template) {
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        var gpa = parseFloat(event.target.gpa.value);
        if(firstName === "") {
            alert("First name is required");
        }
        if(lastName === "") {
            alert("Last name is required");
        }
        if(gpa === "") {
            alert("gpa is required");
        } else if(firstName !== "" && lastName !== "" && gpa !== "") {
            Session.set("currentContent", "display");
            people.insert({firstName: firstName, lastName: lastName,gpa: gpa});
            //console.log(people.find().fetch());
        }
        return false;
    }
});
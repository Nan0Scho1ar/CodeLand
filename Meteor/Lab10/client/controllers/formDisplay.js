Session.set("currentContent", "form");
Template.formDisplay.helpers({
    "showForm": function() {
        return Session.get("currentContent") === "form";
    },
    "showDisplay": function() {
        return Session.get("currentContent") === "display";
    }
});
Template.body.events({
    "click #switch" : function(event, template) {
        if(Session.get("currentContent") === "form") {
            Session.set("currentContent", "display");
        } else if(Session.get("currentContent") === "display") {
            Session.set("currentContent", "form");
        }
    },
});
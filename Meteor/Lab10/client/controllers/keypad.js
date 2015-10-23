Session.set("button1class", "btn-default");
Session.set("button2class", "btn-default");
Session.set("button3class", "btn-default");
Session.set("button4class", "btn-default");
Session.set("button5class", "btn-default");
Session.set("button6class", "btn-default");
Session.set("button7class", "btn-default");
Session.set("button8class", "btn-default");
Session.set("button9class", "btn-default");

Template.keypad.helpers( {
    "button1class" : function () { return Session.get("button1class")},
    "button2class" : function () { return Session.get("button2class")},
    "button3class" : function () { return Session.get("button3class")},
    "button4class" : function () { return Session.get("button4class")},
    "button5class" : function () { return Session.get("button5class")},
    "button6class" : function () { return Session.get("button6class")},
    "button7class" : function () { return Session.get("button7class")},
    "button8class" : function () { return Session.get("button8class")},
    "button9class" : function () { return Session.get("button9class")},
});

Template.keypad.events({
    "click button": function() {
        Session.set("button1class", "btn-default");
        Session.set("button2class", "btn-default");
        Session.set("button3class", "btn-default");
        Session.set("button4class", "btn-default");
        Session.set("button5class", "btn-default");
        Session.set("button6class", "btn-default");
        Session.set("button7class", "btn-default");
        Session.set("button8class", "btn-default");
        Session.set("button9class", "btn-default");
    },
    
    "click #btn1" : function() {
        Session.set("button1class", "btn-primary");
    },
    "click #btn2" : function() {
        Session.set("button2class", "btn-primary");
    },
    "click #btn3" : function() {
        Session.set("button3class", "btn-primary");
    },
    "click #btn4" : function() {
        Session.set("button4class", "btn-primary");
    },
    "click #btn5" : function() {
        Session.set("button5class", "btn-primary");
    },
    "click #btn6" : function() {
        Session.set("button6class", "btn-primary");
    },
    "click #btn7" : function() {
        Session.set("button7class", "btn-primary");
    },
    "click #btn8" : function() {
        Session.set("button8class", "btn-primary");
    },
    "click #btn9" : function() {
        Session.set("button9class", "btn-primary");
    },
});
/*global people*/
Session.set("orderTracker", 1);
Template.display.helpers({
    list: function() {return people.find({}, {sort: {firstName: Session.get("orderTracker")}});},
    displayChart: function() {
        return {
            
            title: {
                text: "GPA's"
            },
            series: [{
                type: 'pie',
                name: 'values',
                data: [
                    ['Fail',             people.find({gpa: {$lt: 4}}).count()],
                    ['Pass',             people.find({$and: [{gpa: {$gte: 4}}, {gpa: {$lt: 5}}]}).count()],
                    ['Credit',           people.find({$and: [{gpa: {$gte: 5}}, {gpa: {$lt: 6}}]}).count()],
                    ['Distinction',      people.find({$and: [{gpa: {$gte: 6}}, {gpa: {$lt: 7}}]}).count()],
                    ['High Distinction', people.find({gpa: 7}).count()]
                ]
            }]
        };
    }
});
Template.display.events({
    "click #delete" : function(event, template) {
        people.remove({_id: this._id});
    },
    "click #order" : function(event, template) {
        console.log(Session.get("orderTracker"));
        if(Session.get("orderTracker") === 1) {
            Session.set("orderTracker", -1);
        } else if(Session.get("orderTracker") === -1) {
            Session.set("orderTracker", 1);
        }
    }
});

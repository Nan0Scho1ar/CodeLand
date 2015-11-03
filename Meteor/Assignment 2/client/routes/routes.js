Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function() {
    this.render('listView');
});
Router.route('/search', function() {
    this.render('search');
});
Router.route('/addContact', function() {
    this.render('addContact');
});
Router.route('/:UUID', {
    template: 'contact',
    data: function(){
        Session.set("currentPerson", this.params.UUID);
        return people.findOne({UUID: Session.get("currentPerson")});
    }
});
Router.route('/', function() {
    this.render('page1');
});
Router.route('/page2');
Router.configure({
layoutTemplate: 'layout'
});

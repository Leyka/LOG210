/**
 * The route for the main page.
 */
Router.route('/', {
    name: 'home',
    action: function () {
        this.render('home');
        SEO.set({title: 'Home - ' + TAPi18n.__("AppName")});
    }
});

/**
 * The route for the edit account page.
 */
Router.route('/editAccount', {
    name: 'editAccount',
    action: function () {
        this.render('editAccount');
        SEO.set({title: 'Edit Account - ' + TAPi18n.__("AppName")});
    }
});
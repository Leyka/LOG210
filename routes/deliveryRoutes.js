Router.route('/deliverys', {
    name: 'deliverys',
    waitOn: function () {
        return [Meteor.subscribe("restaurateurs"), Meteor.subscribe("restaurants")];
    },
    action: function () {
        this.render('deliverys'); // Template name
        SEO.set({title: "Livraisons"});
    }
});

Router.route('/deliveryReadyCommandList', {
    name: 'deliveryReadyCommandList',
    waitOn: function () {
        return [Meteor.subscribe("readyCommands"), Meteor.subscribe("restaurants"), Meteor.subscribe("deliveries")];
    },
    action: function () {
        this.render('deliveryReadyCommandList'); // Template name
        SEO.set({title: "Livraisons"});
    }
});
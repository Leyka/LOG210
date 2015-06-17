Template.menus.helpers({
    menus: function(){
        return Menus.find();
    },
    isEmpty: function() {
        return Menus.find().count() == 0;
    }

});

Template.menus.events({
    "click .removeMenu": function () {
        var id = this._id;
        Meteor.call("removeMenu", id);
        alert(TAPi18n.__("MenuDeletedMessage"));
    }
});
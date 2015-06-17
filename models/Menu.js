Menus = new Mongo.Collection('menus');

Menus.attachSchema(
    new SimpleSchema({
        name: {
            type: String,
            label: function() {
                return TAPi18n.__("MenuNameLabel");
            }
        }
    })
);

// Allow Menus to CRUD in client
Menus.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});
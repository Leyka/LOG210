Template.commands.helpers({
    commands: function () {
        return Commands.find();
    },
    isEmpty: function () {
        return Commands.find().count() == 0;
    }
});

Template.commands.events({});
Template.commands.helpers({
    commands: function () {
        return Commands.find();
    },
    isEmpty: function () {
        return Commands.find().count() == 0;
    }
});

Template.commands.events({
    "click .prepare": function () {
        (this._id).status.allowedValues[1];

        },
    "click .cancel": function () {
        (this._id).status.allowedValues[0];
    },
    "click .ready": function () {
        (this._id).status.allowedValues[2];
    }
});
Template.commands.helpers({
    commands: function () {
        return Commands.find();
    },
    isEmpty: function () {
        return Commands.find().count() == 0;
    }
});

Template.commands.events({
    "click [data-action=PrepareCommand]": function () {
        this.status = "In Process";
        Meteor.call("changeCommandStatus", this);
        var client = Meteor.users.findOne({_id: this.client});
        Meteor.call("sendSMS", client.profile.phoneNumber, "Votre commande est en cours de préparation");
    },
    "click [data-action=FinishCommand]": function () {
        this.status = "Ready";
        Meteor.call("changeCommandStatus", this);
        var client = Meteor.users.findOne({_id: this.client});
        Meteor.call("sendSMS", client.profile.phoneNumber, "Votre commande est prête à être livrée");
    }
});
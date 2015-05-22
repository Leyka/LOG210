Template.editAccount.helpers({
    user: function () {
        return Meteor.user();
    }
});

Template.editAccount.events({
    "click [data-action=EditAccount]": function () {
        var doc = AutoForm.getFormValues('editAccountForm').insertDoc;
        Meteor.call('editAccount', doc);
        alert('Modification éffectuées!\n' +
            'Addresse: ' + doc.profile.address + '\n' +
            'Numéro de téléphone: ' + doc.profile.phoneNumber);
    }
});


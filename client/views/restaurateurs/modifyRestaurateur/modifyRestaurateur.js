Template.modifyRestaurateur.helpers({
    restaurants: function () {
        return Restaurants.find();
    },
    birthday: function () {
        var date = this.profile.birthday;
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (day < 10) {
            day = "0" + day;
        }

        if (month < 10) {
            month = "0" + month;
        }

        return year + "-" + month + "-" + day;
    },
    assignedRestaurant: function (restaurant) {
        if (restaurant == Template.parentData().profile.restaurant)
            return "selected";
    }
});

Template.modifyRestaurateur.events({
    "submit #modifyRestaurateur": function (event) {
        var restaurateur = {};
        restaurateur._id = event.target._id.value;
        restaurateur.email = event.target.email.value;
        restaurateur.password = event.target.password.value;

        restaurateur.profile = {};
        restaurateur.profile.fullName = event.target.fullName.value;
        restaurateur.profile.birthday = event.target.birthday.value;
        restaurateur.profile.address = event.target.address.value;
        restaurateur.profile.phoneNumber = event.target.phoneNumber.value;

        var restaurantId = event.target.restaurant.selectedOptions[0].id;

        if (restaurantId == "none") {
            alert(TAPi18n.__("NoRestaurantAssignedText"))
        }
        else {
            restaurateur.profile.restaurant = restaurantId;
        }

        Meteor.call("editRestaurateur", restaurateur);
    }
});
Meteor.methods({
        addCommand: function (doc) {
            check(doc, Match.Any);
            var id = Commands.insert({
                _id: doc._id,
                client: doc.client,
                dateTime: doc.dateTime,
                deliveryAddress: doc.deliveryAddress,
                meals: doc.meals,
                restaurant: doc.restaurant,
                paypalConfirmationNb: doc.paypalConfirmationNb,
                total: doc.total
            });
            var mealString = "";
            doc.meals.forEach(function (e) {
                mealString += "Repas: " + e.meal.name + " - Quantite: " + e.quantity + "\n";
            });
            Email.send({
                from: "i.love.log210@gmail.com",
                to: Meteor.user().emails[0].address,
                subject: "Confirmation de commande - " + doc._id,
                text: "Date: " + doc.dateTime + "\nAdresse: " + doc.deliveryAddress + "\n" + mealString
            });
            return id;
        },
        changeCommandStatus: function (command) {
            check(command, Match.Any);
            Commands.update({_id: command._id},
                {
                    $set: {
                        status: command.status
                    }
                })
        }
    }
);
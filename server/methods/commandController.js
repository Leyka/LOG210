Meteor.methods({
        addCommand: function (doc) {
            check(doc, Match.Any);
            var id = Commands.insert({
                _id: doc._id,
                client: doc.client,
                dateTime: doc.dateTime,
                deliveryAddress: doc.deliveryAddress,
                meals: doc.meals
            });
            var mealString = "";
            doc.meals.forEach(function (e) {
                mealString += "Repas: " + e.meal.name + " - Quantite: " + e.quantity + "\n";
            });
            Email.send({
                from: "cilaf.93@gmail.com",
                to: "cilaf.93@gmail.com",
                subject: "Confirmation de commande - " + doc._id,
                text: "Date: " + doc.dateTime + "\nAdresse: " + doc.deliveryAddress + "\n" + mealString
            });
            return id;
        }
    }
);
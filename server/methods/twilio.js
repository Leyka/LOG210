Meteor.methods({
        sendSMS: function (phoneNumber, message) {
            check(phoneNumber, Match.Any);
            check(message, Match.Any);
            var twilio = Twilio("ACc17f2614eb0733210ca6f1153562f5f5", "624dd2c51cb78783812f5f83193f5640");
            twilio.sendSms({
                to: '+1' + phoneNumber,
                from: '+15146123696',
                body: message
            }, function (err, responseData) {
                if (!err) {
                    console.log(responseData.from);
                    console.log(responseData.body);
                }
            });
        }
    }
);

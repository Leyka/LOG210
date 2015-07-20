Deliveries = new Mongo.Collection('deliveries');

Deliveries.attachSchema(
    new SimpleSchema({
        deliveryman: {
            type: String
        },
        command: {
            type: String
        },
        createdAt: {
            type: Date,
            autoValue: function () {
                if (this.isInsert) {
                    return new Date;
                } else if (this.isUpsert) {
                    return {$setOnInsert: new Date};
                } else {
                    this.unset();
                }
            }
        }
    })
);

// Allow Commands to CRUD in client
Deliveries.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});
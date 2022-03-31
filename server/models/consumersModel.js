const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consumerSchema = new Schema(
    {
        username: { type: String, maxLength: 30 },
        email: { type: String, required: true, maxLength: 100, unique: true },
        password: { type: String, required: true, maxLength: 100 },
        reservations: [
            {
                numberOfPeople: { type: Number, maxLength: 10, required: true },
                bookingDate: { type: String, maxLength: 100, required: true },
                bookingTime: { type: String, maxLength: 100, required: true },
                restaurantPlaceID: { type: String, maxLength: 100, required: true },
                restaurantName: { type: String, maxLength: 100, required: true },
                speicalRequests: { type: String, maxLength: 100, required: true },
                extraNotes: { type: String, maxLength: 2000, default: '' }
            }
        ]
    },
    { versionKey: false }
);

consumerSchema.statics.isEmailInUse = async function (email) {
    if (!email) {
        throw new Error('Invalid Email. No user exists!');
    }
    try {
        const user = await this.findOne({ email });
        return user ? false : true;
    } catch (error) {
        console.log('Error inside isEmailInUse Method!', error.message);
        return false;
    }
};

const consumersModel = mongoose.model('Consumer', consumerSchema);

module.exports = consumersModel;

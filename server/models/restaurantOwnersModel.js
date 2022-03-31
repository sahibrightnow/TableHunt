// This will be the model used upon creation of a new user
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantOwnersSchema = new Schema({
    username: { type: String, maxLength: 30 },
    email: { type: String, required: true, maxLength: 100, unique: true },
    password: { type: String, required: true, maxLength: 100 },
    photos: [
        { type: String, maxLength: 10000, default: '' }
    ],
    bookingReservations: [
        {
            numberOfPeople: { type: Number, maxLength: 10, required: true },
            bookingDate: { type: String, maxLength: 100, required: true },
            bookingTime: { type: String, maxLength: 100, required: true },
            restaurantPlaceID: { type: String, maxLength: 100, required: true },
            restaurantName: { type: String, maxLength: 100, required: true },
            speicalRequests: { type: String, maxLength: 100, default: '' },
            extraNotes: { type: String, maxLength: 2000, default: '' }
        }
    ]
});

const restaurantOwnersModel = mongoose.model('RestaurantOwner', restaurantOwnersSchema);

module.exports = restaurantOwnersModel;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
    {
        name: { type: String, maxLength: 30 },
        vicinity: { type: String, maxLength: 100 },
        rating: { type: Number, maxLength: 10 },
        place_id: { type: String, maxLength: 100, unique: true, required: true },
        lat: { type: String, maxLength: 100 },
        lng: { type: String, maxLength: 100 }
    },
    { versionKey: false });

const restaurantModel = mongoose.model('Restaurant', restaurantSchema);

module.exports = restaurantModel;

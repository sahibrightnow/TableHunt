const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consumerSchema = new Schema(
    {
        username: { type: String, maxLength: 100, required: true },
        email: { type: String, required: true, maxLength: 100, unique: true },
        image: { type: String }
    },
    { versionKey: false }
);

const consumersModel = mongoose.model('Consumer', consumerSchema);

module.exports = consumersModel;

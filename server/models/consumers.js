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

// consumerSchema.statics.isEmailInUse = async function (email) {
//     if (!email) {
//         throw new Error('Invalid Email. No user exists!');
//     }
//     try {
//         const user = await this.findOne({ email });
//         return user ? false : true;
//     } catch (error) {
//         console.log('Error inside isEmailInUse Method!', error.message);
//         return false;
//     }
// };

const consumersModel = mongoose.model('Consumer', consumerSchema);

module.exports = consumersModel;

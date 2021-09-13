const { Schema, model } = require('mongoose');

const citySchema = new Schema({
    city_name: {
        type: String,
        maxLength: 50,
        required: true
    },
    countryId: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    }
}, {
    collection: 'cities'
});

const City = model('City', citySchema);
module.exports = City;
const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
    country_name: {
        type: String,
        maxLength: 50,
        required: true
    },
}, {
    collection: 'countries'
});

const Country = model('Country', countrySchema);
module.exports = Country;
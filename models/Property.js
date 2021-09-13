const { Schema, model } = require('mongoose');

const propertySchema = new Schema({
    property_name: {
        type: String,
        required: true
    },
    zoneId: {
        type: Schema.Types.ObjectId,
        ref: 'Zone'
    }
}, {
    collection: 'properties'
});

const Property = model('Property', propertySchema);
module.exports = Property;
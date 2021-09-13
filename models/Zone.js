const { Schema, model } = require('mongoose');

const zoneSchema = new Schema({
    code: {
        type: String,
        maxLength: 20,
        required: true
    },
    description: {
        type: String,
        maxLength: 50,
        required: true
    },
    from_property: {
        type: Number,
        maxLength: 20,
        required: true
    },
    to_property: {
        type: Number,
        maxLength: 20,
        required: true
    },
    cityId: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    }
}, {
    collection: 'zones'
});

const Zone = model('Zone', zoneSchema);
module.exports = Zone;
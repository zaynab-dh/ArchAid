const { Schema, model } = require('mongoose');

const conditionSchema = new Schema({
    condition_name: {
        type: String,
        maxLength: 50,
        required: true
    },
    note: {
        type: String,
        maxLength: 50,
        required: true
    },
    options: {
        type: String,
        maxLength: 50,
        required: true
    },
    allowed_values: {
        type: Number,
        maxLength: 50,
        required: true
    },
    zoneRuleId: {
        type: Schema.Types.ObjectId,
        ref: 'Zone_rule'
    }
}, {
    collection: 'conditions'
});

const Condition = model('Condition', conditionSchema);
module.exports = Condition;
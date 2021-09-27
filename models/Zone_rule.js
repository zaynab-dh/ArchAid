const { Schema, model } = require('mongoose');

const zoneruleSchema = new Schema({
    value: {
        type: Number,
        maxLength: 20,
        required: true
    },
    zoneId: {
        type: Schema.Types.ObjectId,
        ref: 'Zone'
    },
    ruleId: {
        type: Schema.Types.ObjectId,
        ref: 'Rule'
    },
    rulevariantId: {
        type: Schema.Types.ObjectId,
        ref: 'Rules_Variants'
    },
    condition: String,
}, {
    collection: 'zone_rules'
});

const Zone_rule = model('Zone_rule', zoneruleSchema);
module.exports = Zone_rule;
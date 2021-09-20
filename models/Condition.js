const { Schema, model } = require('mongoose');

const conditionSchema = new Schema({
    condition_name: {
        type: String,
        maxLength: 50,
        required: true
    },
    note: {
        type: String,
        maxLength: 200
    },
    options: [String],
    actions: {
        type: Map,
        of: {
            type:new Schema({
            range: [Number],
            operation: String
            }) 
        }
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
const { Schema, model } = require('mongoose');

const ruleSchema = new Schema({
    rule_name: {
        type: String,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    collection: 'rules'
});

const Rule = model('Rule', ruleSchema);
module.exports = Rule;
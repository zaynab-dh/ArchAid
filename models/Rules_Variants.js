const { Schema, model } = require('mongoose');

const rulesvariantsSchema = new Schema({
    rules_variants_name: {
        type: String,
        maxLength: 50,
        required: true
    },
}, {
    collection: 'rulesvariants'
});

const Rules_Variants = model('Rules_Variants', rulesvariantsSchema);
module.exports = Rules_Variants;
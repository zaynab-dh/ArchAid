const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    category_name: {
        type: String,
        maxLength: 50,
        required: true
    },
}, {
    collection: 'categories'
});

const Category = model('Category', categorySchema);
module.exports = Category;
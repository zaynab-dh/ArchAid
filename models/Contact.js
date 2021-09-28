const { Schema, model } = require('mongoose');
const contactSchema = new Schema({

    email: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 50,
        required: true
    },
    name: String,
    message: String,
  
}, {
    collection: 'contacts'
});

const Contact = model('Contact', contactSchema);
module.exports = Contact;
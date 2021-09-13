const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    },
}, {
    collection: 'projects'
});

const Project = model('Project', projectSchema);
module.exports = Project;
const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    zoneId: {
        type: Schema.Types.ObjectId,
        ref: 'Zone'
    },
}, {
    collection: 'projects'
});

const Project = model('Project', projectSchema);
module.exports = Project;
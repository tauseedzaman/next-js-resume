const mongoose = require('mongoose');

const PorjectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    keywords: {
        type: array,
        required: true
    }
});

const Project = mongoose.models.Project || mongoose.model('Project', PorjectsSchema);

module.exports = Project;
const mongoose = require('mongoose');

const TestimonailSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    auther: {
        type: String,
        required: true
    }
});

const Testimonail = mongoose.models.Testimonail || mongoose.model('Testimonail', TestimonailSchema);

module.exports = Testimonail;
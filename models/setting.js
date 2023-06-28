const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const Setting = mongoose.models.Setting || mongoose.model('Contact', SettingSchema);

module.exports = Setting;
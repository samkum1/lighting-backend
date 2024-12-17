const mongoose = require('mongoose');

const bandwidthSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    bandwidthLeft: {
        type: Number,
        required: true,
        default: 0,
    },
    all_buy: {
        type: Number,
        required: true,
        default: 0,
    },
    used: {
        type: Number,
        required: true,
        default: 0,
    },
}, { timestamps: true });

const Bandwidth = mongoose.model('Bandwidth', bandwidthSchema);

module.exports = Bandwidth;

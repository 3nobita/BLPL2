// module/Client.js
const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name:String,
    number:String,
    massage:String,
});

module.exports = mongoose.model('Client', ClientSchema);

const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  userId: String,
  lat: Number,
  lng: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Interaction', interactionSchema);
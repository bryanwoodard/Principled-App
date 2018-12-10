var mongoose = require('mongoose');

var TrackSchema = new mongoose.Schema({
  trackName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  principle: {
    type: Array,
    required: true,
    trim: true,
  },
  startTime: {
    type: Number,
    required: true,
    trim: true
  },
  interval: {
    type: Number,
    required: true
  }
});

var Track = mongoose.model('track', TrackSchema);
module.exports = Track;
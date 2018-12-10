var mongoose = require('mongoose');

var PrincipleSchema = new mongoose.Schema({
  trackName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  principle: {
    type: String,
    required: true,
    trim: true,
  }
});

var Principle = mongoose.model('track', PrincipleSchema);
module.exports = Principle;
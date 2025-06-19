const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['blog', 'video', 'social'],
    required: true
  },
  keywords: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['draft', 'scheduled', 'published'],
    default: 'draft'
  },
  scheduledDate: {
    type: Date
  }
}, {
  timestamps: true
});

const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;

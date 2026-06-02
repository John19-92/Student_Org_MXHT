const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['news', 'story', 'guide', 'culture', 'academic'],
    default: 'news'
  },
  language: {
    type: String,
    enum: ['french', 'creole', 'spanish', 'english'],
    default: 'french'
  },
  image: {
    type: String
  },
  published: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Blog', BlogSchema);

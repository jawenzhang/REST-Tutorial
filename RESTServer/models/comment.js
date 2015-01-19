var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	author: { type: mongoose.Schema.ObjectId, ref: 'Author' },
  post: { type: mongoose.Schema.ObjectId, ref: 'Post' },
  date: Date,
  content: String
});

module.exports = mongoose.model('Comment', CommentSchema);
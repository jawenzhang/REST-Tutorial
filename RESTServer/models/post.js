var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	name: String,
	date: Date,
	author: { type: mongoose.Schema.ObjectId, ref: 'Author' },
	comments: [{ type: mongoose.Schema.ObjectId, ref: 'Comment' }],
	content: String
});

module.exports = mongoose.model('Post', PostSchema);
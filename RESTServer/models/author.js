var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
	name: String,
	registerDate: Date,
	posts: [{ type: mongoose.Schema.ObjectId, ref: 'Post' }],
	comments: [{ type: mongoose.Schema.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Author', AuthorSchema);
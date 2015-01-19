var mongoose = require('mongoose');
var Author = require('../../models/author');

module.exports.addAuthor = function(req, res) {
	var author = new Author(req.body.author);
	author.save(function(err) {
		if (err) {
			res.send(err);
		}
		res.json({author: author});
	});
};

module.exports.getAllAuthors = function(req, res) {
	Author.find(function(err, authors) {
		if (err) {
			res.send(err);
		}
		res.json({authors: authors});
	});
};

module.exports.getSingleAuthor = function(req, res, id) {
	Author.findById(id, function(err, author) {
		if (err) {
			res.send(err);
		}
		res.json({author: author});
	});
};

module.exports.updateAuthor = function(req, res, id) {
	Author.findByIdAndUpdate(id, {$set: req.body.author}, function(err, author) {
		if (err) {
			res.send(err);
		}
		res.json({author: author});
	});
};

module.exports.deleteAuthor = function(req, res, id) {
	Author.findByIdAndRemove(id, function(err) {
		if (err) {
			res.send(err);
		}
		res.sendStatus(200);
	});
};
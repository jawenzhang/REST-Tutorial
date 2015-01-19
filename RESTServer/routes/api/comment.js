var mongoose = require('mongoose');
var Comment = require('../../models/comment');

module.exports.addComment = function(req, res) {
	var comment = new Comment(req.body.comment);
	comment.save(function(err) {
		if (err) {
			res.send(err);
		}
		res.json({comment: comment});
	});
};

module.exports.getAllComments = function(req, res) {
	Comment.find(function(err, comments) {
		if (err) {
			res.send(err);
		}
		res.json({comments: comments});
	});
};

module.exports.getSingleComment = function(req, res, id) {
	Comment.findById(id, function(err, comment) {
		if (err) {
			res.send(err);
		}
		res.json({comment: comment});
	});
};

module.exports.updateComment = function(req, res, id) {
	Comment.findByIdAndUpdate(id, {$set: req.body.comment}, function(err, comment) {
		if (err) {
			res.send(err);
		}
		res.json({comment: comment});
	});
};

module.exports.deleteComment = function(req, res, id) {
	Comment.findByIdAndRemove(id, function(err) {
		if (err) {
			res.send(err);
		}
		res.sendStatus(200);
	});
};
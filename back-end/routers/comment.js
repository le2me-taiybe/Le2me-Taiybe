var express = require('express');
var commentsRouter = express.Router(); 
var comments = require('../models/comments');

commentsRouter.route("/comment")
    .get(function (req, res) {

        comments.find(function (err, allStories) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(allStories);
            }

        })
    })
    .post(function (req, res) {
//        console.log(req.body);
        var newcomments = new comments(req.body);
        newcomments.save(function (err, newOnecomments) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newOnecomments);
            }
        })

    })

commentsRouter.route("/comment/:id")
    .get(function (req, res) {
        comments.findById(req.params.id, function (err, getOnecomments) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(getOnecomments);
            }
        });
    })

.delete(function (req, res) {
    var commentsId = req.params.id;
    comments.findOneAndRemove({
        _id: commentsId
    }, function (err, deletedcomments) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(deletedcomments);
        }

    })

})

.put(function (req, res) {
    comments.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, updatedcomments) {
         console.log(updatedcomments);
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(updatedcomments);
//            console.log(updatedcomments);
        }
    });

});







module.exports = commentsRouter;
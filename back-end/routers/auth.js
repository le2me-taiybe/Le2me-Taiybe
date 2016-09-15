var express = require('express');
var authRouter = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

authRouter.post("/login", function (req, res) {

    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) {
            res.status(500).send(err);

        } else if (!user) {
            res.status(404).send({
                message: "that email doesn't exist in our database",
                success: false
            });
        } else if (user) {
            if (user.password !== req.body.password) {

                res.status(401).send({
                    message: "incorrect password, try again"
                })
            } else {
                var token = jwt.sign(user.toObject(), config.secret);

                res.send({
                    token: token,
                    user: user.toObject(),
                    message: "Login Successfult",
                    success: true
                });
            }
        }
    })
})
authRouter.get("/login", function (req, res) {

    User.find(function (err, allStories) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(allStories);
        }

    })
})
authRouter.delete("/:id", function (req, res) {
    var storeId = req.params.id;
    User.findOneAndRemove({
        _id: storeId
    }, function (err, deletedStore) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(deletedStore);
        }

    })

})

authRouter.post("/signup", function (req, res) {
    User.find({
        email: req.body.email
    }, function (err, existingUser) {
        if (err) {
            res.status(500).send(err);

        } else {
            if (existingUser.length) {
                res.send({
                    message: "This email is already exist in our database. try signing in",
                    success: false
                });

            } else {
                var newUser = new User(req.body);

                newUser.save(function (err) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.send({
                            message: "successfuly created a new account",
                            success: true,
                            user: newUser
                        });
                    }
                });

            }
        }
    })

});


module.exports = authRouter;
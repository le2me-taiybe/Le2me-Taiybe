var express = require('express');
var storeRouter = express.Router();
var Store = require('../models/stores');
var comments = require('../models/comments');

storeRouter.route("/stores")
    .get(function (req, res) {
        var query = req.query;
        console.log("query"+ req.query);
        if (req.query.restName) {
            console.log("restName: " + req.query.restName)

            Store.find(req.query, function (err, allStories) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    var restSearch = req.query.restName;
                    for (store in allStories) {
                        console.log(allStories[store].restoName + " " + req.query.restName);
                        var comp = allStories[store].restoName;
                        if (comp == restSearch)
                            res.send(allStories[store]);
                    }

                }
            });
        } else {
            Store.find(function (err, allStories) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(allStories);
                }

            })
        }
    })
    .post(function (req, res) {
        //        console.log(req.body);
        var newStore = new Store(req.body);
        newStore.save(function (err, newOneStore) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newOneStore);
            }
        })

    })

storeRouter.route("/:id")
    .get(function (req, res) {
        Store.findById(req.params.id, function (err, getOneStore) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(getOneStore);
            }
        });
    })

.delete(function (req, res) {
    var storeId = req.params.id;
    Store.findOneAndRemove({
        _id: storeId
    }, function (err, deletedStore) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(deletedStore);
        }

    })

})

.put(function (req, res) {
    Store.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, updatedStore) {
        console.log(updatedStore);
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(updatedStore);
            //            console.log(updatedStore);
        }
    });

});







module.exports = storeRouter;
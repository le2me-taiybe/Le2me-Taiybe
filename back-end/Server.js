var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8000;
var propertyRouter = require('./routers/routers');
var expressJwt = require('express-jwt');
var config = require('./config');



var app = express();
app.use(bodyParser.json());
app.use(express.static("../public"));
//app.use("/api",expressJwt({secret:config.secret}));
app.use('/api', require("./routers/routers"));
app.use('/api', require("./routers/comment"));
app.use("/auth",require("./routers/auth"));
app.use("/api", expressJwt({secret: config.secret}).unless({path: ["/api/stores"]}));


mongoose.connect(config.database, function () {
    console.log("Server is successfuly connected to the DataBase");
});







app.listen(port, function () {
    console.log("My server is running")
});
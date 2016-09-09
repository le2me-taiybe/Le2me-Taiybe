var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    
    storeName : String,
    title : String,
    comments : [String],
    img : [String],
    replies : [String]
});



module.exports = mongoose.model("comment", CommentSchema);
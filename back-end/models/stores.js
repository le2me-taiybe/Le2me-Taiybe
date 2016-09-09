var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({
    
    storeName : {
        type : String,
//        required : true
    },
    storeType : {
        type: String,
//        enum : ["Supermarket","Restaurant"]
        enum : ["Restaurant"]
//        required : true
    },
    imgOfTheStore : [String],

    items: [
        {
            name: [String],
            img: [String],
            price: [String],
            description : String
        },
    ],
    helpCenter : {
        name: String,
        telephoneNumber : String
    },
})


module.exports = mongoose.model("Store", StoreSchema);
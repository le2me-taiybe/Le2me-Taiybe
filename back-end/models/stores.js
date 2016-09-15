var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StoreSchema = new Schema({
    restoName: {
        type: String, //        required : true
    }, //    storeType : {
    //        type: String,
    ////        enum : ["Supermarket","Restaurant"]
    //        enum : ["Restaurant"]
    ////        required : true
    //    },
    storeImg: String
    , cuisines: String
    , email: String
    , URL: String
    , tele: String
    , cost: String
    , latAdd: String
    , lonAdd: String
    , address: String
    , thumbImg: String
    , coverImg: String
    , menuImg: String
    , since: Date
    , openHr: String
    , closeHr: String
})
module.exports = mongoose.model("Store", StoreSchema);
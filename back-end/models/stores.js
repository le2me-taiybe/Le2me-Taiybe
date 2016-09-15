var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoreSchema = new Schema({

    restoName: {
        type: String,
        //        required : true
    },
    //    storeType : {
    //        type: String,
    ////        enum : ["Supermarket","Restaurant"]
    //        enum : ["Restaurant"]
    ////        required : true
    //    },
    storeImg: [String],
    cuisines: [String],
    //    cuisines: [
    //        {
    //            name: [String],
    //            img: [String],
    //            price: [String],
    //            desc : String
    //        },
    //    ],
    email: String,
    URL: String,
    tele: String,
    cost: String,
    latAdd: Number,
    lonAdd: Number,
    menuImg: [String],
    since: Date,
    openHr: Number,
    closeHr: Number
})


module.exports = mongoose.model("Store", StoreSchema);
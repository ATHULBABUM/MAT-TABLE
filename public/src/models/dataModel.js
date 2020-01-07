const mongoose=require('mongoose');
const Schema=mongoose.Schema;
var detailsSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    address:String
})

var detailsModel=mongoose.model('customDetails',detailsSchema);
module.exports={ detailsModel };
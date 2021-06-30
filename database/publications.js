const mongoose=require("mongoose")l
const PublicationSchema=mongoose.Schema({
    id:Number,
    name:String,
    books:[String],
});
const PublicationModel=mongoose.model(PublicationSchema);
module.exports=PublicationModel;
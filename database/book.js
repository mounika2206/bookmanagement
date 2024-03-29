const mongoose= require("mongoose");
const BookSchema=mongoose.Schema({
    ISBN: String,
      title:String,
      pubDate: String,
      language: String,
      numPage: Number,
      author: [Number],
      publications: Number,
      category:String,
});
const BookModel=mongoose.model(BookSchema);
module.exports=BookModel;
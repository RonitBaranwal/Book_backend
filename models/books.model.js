const mongoose=require('mongoose');
const bookSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:[true,'The name of publisher has to be mentioned']
    },
    price:{
        type:Number,
    }

})
const Book=mongoose.model('Book',bookSchema);
module.exports=Book;
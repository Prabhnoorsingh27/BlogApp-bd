// import mongoose
const mongoose = require("mongoose");


// route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //This is a referrence to the postModel
    },
    user:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema) //yaha humne commentSchema ko "Comment" ke naam se export krdiya
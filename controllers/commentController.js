//import model
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

//business logic
exports.createComment = async(req,res) =>{
    try{
        //fetch data from req body
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment ({
            post,user,body
        });

        //save the new Comment into the database
        const savedComment = await comment.save();

        //push used to update/add pull used to delete {new:true} is used to get the updated document
        //find the post by ID, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new:true} ) 
                    .populate("comments") //populates the comments array with comment documents
                    .exec();
        // agr bina populate kiya krta toh sirf ID aati comments me
        res.status(200).json({
            post: updatedPost,
        });
    }
    catch(error) {
        return res.status(500).json({
            error: "Error while Creating comment"
        });
    }
};
// https://documenter.getpostman.com/view/24441701/2s93RUvs44

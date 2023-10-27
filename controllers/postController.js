const Post = require("../models/postModel")

exports.createPost = async(req,res)=>{
    try{
        const {title, body} = req.body;
        const post = new Post({
            title,body
        })
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        })
    }
    catch(error) {
        return res.status(500).json({
            error:"Error while creating post",
        })

    }
}

exports.getAllPosts = async(req,res)=>{
    try{
        // find() is used to fetch all the data from the database and give likes and comments ID's
        const posts = await Post.find().populate("likes").populate("comments").exec();

        res.json({
            posts,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while fetching posts"
        })
    }
}
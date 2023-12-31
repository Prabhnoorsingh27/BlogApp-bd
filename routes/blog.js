const express = require("express");
const router = express.Router();

// FOR PRACTICE
// const {dummy} = require("../controllers/dummyController")
// router.get("/dummy", dummy)

//Import the controllers 
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController");
const {likePost, unlikePost} = require("../controllers/likeController");

//Mapping create
router.post("/comments/create", createComment)
router.post("/posts/create", createPost)
router.get("/posts", getAllPosts)
router.post("/likes/like", likePost)
router.post("/likes/unlike", unlikePost)

//Export
module.exports = router;

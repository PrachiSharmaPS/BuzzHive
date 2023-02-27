const express =  require("express")
const { login } =require("../controllers/auth.js")
const {getUser,getUserFriends,addRemoveFriend} =require("../controllers/users.js")
const { getFeedPosts, getUserPosts, likePost } =require( "../controllers/posts.js")
const { verifyToken } =require( "../middleware/auth.js")
const router = express.Router();


router.post("/auth/login", login);

/* READ */
router.get("/posts/", verifyToken, getFeedPosts);
router.get("/posts/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/posts/:id/like", verifyToken, likePost);


/* READ */
router.get("/users/:id", verifyToken, getUser);
router.get("/users/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/users/:id/:friendId", verifyToken, addRemoveFriend);

module.exports = router



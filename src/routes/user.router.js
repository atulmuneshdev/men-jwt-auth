const express = require("express")
const { registerUser, LoginUser } = require("../controllers/user.auth")
const { UserPost } = require("../controllers/post.controller")
const { authMiddlewares } = require("../middlewares/auth.middlewares")

const router = express.Router()

router.post('/register', registerUser)
router.get('/login',LoginUser)

// post

router.post('/post',authMiddlewares,UserPost)

module.exports = router
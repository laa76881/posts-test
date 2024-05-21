const express = require("express")
const router = express.Router()

const {
    getPosts,
    getPostById
} = require("../controllers/api-post-controller")

router.get('/api/posts', getPosts)
router.get('/api/post/:id', getPostById)

module.exports = router
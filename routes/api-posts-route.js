const express = require("express")
const router = express.Router()

const {
    getPosts
} = require("../controllers/api-post-controller")

router.get('/api/posts', getPosts)

module.exports = router
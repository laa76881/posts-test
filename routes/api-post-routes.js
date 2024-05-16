
const express = require('express')
const router = express.Router()

const {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
} = require('../controllers/api-post-controller')

router.get('/api/posts', getPosts)
router.get('/api/post/:id', getPost)
router.post('/api/post', createPost)
router.delete('/api/post/:id', deletePost)
router.put('/api/post/:id', updatePost)
router.patch('/api/post/:id', updatePost)

module.exports = router
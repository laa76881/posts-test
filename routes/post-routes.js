const express = require('express')
const router = express.Router()

const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/post-controller')

router.get('/posts', getPosts)
router.get('/posts/:id', (req, res) => getPost(req, res, 'post'))
router.get('/edit-post/:id', (req, res) => getPost(req, res, 'edit-post'))
router.delete('/posts/:id', deletePost)
router.post('/add-post', createPost)
router.put('/edit-post/:id', updatePost)

module.exports = router
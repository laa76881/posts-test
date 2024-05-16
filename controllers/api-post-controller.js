const Post = require('../models/post')

const handleError = ((res, error) => {
    console.log(error)
    res.status(500).send(error.message)
})

const getPosts = ((req, res) => {
    Post
        .find()
        .sort({ createdAd: -1 })
        .then((posts) => res.status(200).json(posts))
        .catch((error) => handleError(res, error))
})

const getPost = ((req, res) => {
    Post
        .findById(req.params.id)
        .then((post) => res.status(200).json(post))
        .catch((error) => handleError(res, error))
})

const createPost = ((req, res) => {
    const { title, author, text } = req.body
    const post = new Post({ title, author, text })
    post
        .save({ title, author, text })
        .then((post) => res.status(200).json(post))
        .catch((error) => handleError(res, error))
})

const deletePost = ((req, res) => {
    const id = req.params.id
    Post
        .findByIdAndDelete(id)
        .then(() => res.status(200).json(req.params.id))
        .catch((error) => handleError(res, error))
})

const updatePost = ((req, res) => {
    const id = req.params.id
    const { title, author, text } = req.body
    Post
        .findByIdAndUpdate(id, { title, author, text }, { new: true }) // as default - return old value
        .then((post) => res.status(200).json(post))
        .catch((error) => handleError(res, error))
})

module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
}
const Post = require("../models/post")

const handleError = ((res, error) => {
    console.log(error)
    res.status(500).send(error.message)
})

const getPosts = ((req, res) => {
    Post
        .find()
        .sort({ createdAt: -1 })
        .then((posts) => res.status(200).json(posts))
        .catch((error) => handleError(res, error))
})

const getPostById = ((req, res) => {
    Post
        .findById(req.params.id)
        .then((post) => res.status(200).json(post))
        .catch((error) => handleError(res, error))
})

module.exports = {
    getPosts,
    getPostById
}
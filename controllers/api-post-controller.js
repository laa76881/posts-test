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

module.exports = {
    getPosts
}
const Post = require('../models/post')
const createPath = require('../helpers/create-path')

const handleError = (res, error) => {
    console.log(error)
    res
        .status(500)
        .render(createPath('404'))
}

const getPosts = (req, res) => {
    Post
        .find()
        .sort({ createdAt: -1 })
        .then((posts) => res.render(createPath('posts'), { posts }))
        .catch((error) => handleError(res, error))
}

const getPost = (req, res, templateName) => {
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath(templateName), { post }))
        .catch((error) => handleError(res, error))
}

const createPost = (req, res) => {
    const { title, author, text } = req.body
    const post = new Post({ title, author, text })
    post
        .save()
        .then((result) => {
            res.redirect(`/posts/${result._id}`)
        })
        .catch((error) => handleError(res, error))
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(result => {
            res.sendStatus(200)
        })
        .catch((error) => handleError(res, error))
}

const updatePost = (req, res) => {
    const { title, author, text } = req.body
    const { id } = req.params
    Post
        .findByIdAndUpdate(id, { title, author, text })
        .then(post => {
            res.redirect('/posts')
        })
        .catch((error) => handleError(res, error))
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}
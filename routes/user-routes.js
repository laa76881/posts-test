const express = require('express')
const router = express.Router()

const User = require('../models/user')
const createPath = require('../helpers/create-path')

router.get('/users', (req, res) => {
    const title = 'Users'
    User
        .find()
        .then((users) => res.render(createPath('users'), { users, title }))
        .catch((error) => {
            console.log(error)
            res
                .status(500)
                .render(createPath('404'))
        })
})

router.get('/users/:id', (req, res) => {
    User
        .findById(req.params.id)
        .then((user) => {
            let title = 'User ' + user.name
            res.render(createPath('user'), { user, title })
        })
        .catch((error) => {
            console.log(error)
            res
                .status(500)
                .render(createPath('404'))
        })
})

module.exports = router
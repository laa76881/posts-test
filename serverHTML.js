const express = require('express')
const path = require('path')
const app = express()

const PORT = 3000
const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

app.listen(PORT, (error) => {
    error ? error : console.log(`listening port ${PORT}`)
})

// middleware - after listen server - before routes
app.use((req, res, next) => {
    console.log('Test middleware', req.url, req.method)
    next()
})

app.use(express.static('styles'))

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

app.get('/user', (req, res) => {
    res.sendFile(createPath('user'))
})

app.get('/about', (req, res) => {
    res.redirect('/user')
})

// middleware for another routes
app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('404'))
})
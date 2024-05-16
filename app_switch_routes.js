const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000
const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

const server = http.createServer((req, res) => {
    console.log('Server request')
    const url = req.url
    console.log('req url', url)
    res.setHeader('Content-Type', 'text/html')

    let baseUrl = ''
    switch (url) {
        case '/home':
        case '/index.html':
        case '/':
            baseUrl = createPath('index')
            res.statusCode = 200
            break
        case '/about': // redirection from old routes 
            res.statusCode = 301
            res.setHeader('Location', '/user')
            res.end()
            break
        case '/user':
            baseUrl = createPath('user')
            res.statusCode = 200
            break
        default:
            baseUrl = createPath('404')
            res.statusCode = 404
            break
    }
    fs.readFile(baseUrl, (error, data) => {
        if (error) {
            console.log('error read', error)
            res.statusCode = 500
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})
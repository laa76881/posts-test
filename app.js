const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log('Server request')
    console.log('Test server OK')
    console.log('req', req.url)
    res.setHeader('Content-Type', 'text/html')
    res.write('hello')
    res.end()
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})
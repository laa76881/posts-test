
const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
    console.log('Server request')
    console.log('req', req.url, req.method)
    res.setHeader('Content-Type', 'application/json')
    // res.write('<head><link rel="stylesheet" href="./style.css"><style>h1 { color: green }</style></head>')
    // res.write('<body class="my-body"><span>hi</span></body>')
    // res.write('<h1>hello www</h1>')
    // res.write('<p>Madrid</p>')
    const data = JSON.stringify([
        { name: 'one', id: 1 },
        { name: 'two', id: 2 }
    ])
    res.end(data)
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})
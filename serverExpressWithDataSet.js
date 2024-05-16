
const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`)

app.listen(PORT, (error) => {
    error ? error : console.log(`listening port ${PORT}`)
})

app.use(express.static('styles'))
app.use(express.urlencoded({ extended: false })) // ?

app.get('/', (req, res) => {
    const title = 'Home page'
    res.render(createPath('index'), { title })
})

app.get('/users', (req, res) => {
    const title = 'Users'
    const users = [
        {
            link: 'one',
            name: 'User 1'
        },
        {
            link: 'two',
            name: 'User 2'
        }
    ]
    res.render(createPath('users'), { users, title })
})

app.get('/user/:id', (req, res) => {
    const user = {
        link: "one",
        name: "User 1"
    }
    res.render(createPath('user'), { user })
})

app.post('/add-user', (req, res) => {
    const user = {...req.body}
    
    // res.send(req.body)
    res.render(createPath('user'), { user })
})

app.use((req, res) => {
    res.status(404).render(createPath('404'))
})
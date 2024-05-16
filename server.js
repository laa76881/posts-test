
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const app = express()

const postRoutes = require('./routes/post-routes')
const userRoutes = require('./routes/user-routes')
const createPath = require('./helpers/create-path')
const apiPostRoutes = require('./routes/api-post-routes')

require('dotenv').config()
console.log(process.env) 

const db = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}`
const PORT = process.env.PORT

// console styles
// const errorMsg = chalk.bgKeyword('white').redBright;

mongoose
    .connect(db)
    .then((res) => console.log('Connected'))
    .catch((error) => console.log(error))

app.listen(PORT, (error) => {
    error ? error : console.log(`listening port ${PORT}`)
})

app.use(express.static('styles'))
app.use(express.urlencoded({ extended: false })) // ?
app.use(methodOverride('_method')) // for method PUT

app.get('/', (req, res) => {
    const title = 'Home page'
    res.render(createPath('index'), { title })
})

app.use(postRoutes)
app.use(userRoutes)
app.use(apiPostRoutes)

app.use((req, res) => {
    res.status(404).render(createPath('404'))
})

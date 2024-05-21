const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()

const PORT = process.env.PORT
const db = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}`

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(methodOverride('_method'))

const apiPostRoutes = require('./routes/api-posts-route')

mongoose
    .connect(db)
    .then((res) => console.log('Connected'))
    .catch((error) => console.log(error))

app.use(apiPostRoutes)

app.get('/*', (req, res) => {
    // console.log('req', req.url)
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, (error) => {
    error ? error : console.log(`listening port ${PORT}`)
})


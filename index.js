const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const PORT = 4000

const noteRoutes = require('./notes/routes')
const userRoutes = require('./users/routes')

mongoose.connect('mongodb+srv://admin:Claretjug1@notetaking2.7q2bv.mongodb.net/notetaking2?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/notes', noteRoutes)
app.use('/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`The app is running on http://localhost:${PORT}`)
})
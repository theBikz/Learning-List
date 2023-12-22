const express = require('express')
const mongoose = require('mongoose')
// const { verify } = require('jsonwebtoken')

const url = 'mongodb://mongo_db:27017/learninglist'

const auth = require('./authentication/auth');

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log("MongoDB is connected.")
})

const learningList = require('./routes/list')

const app = express()
app.use(express.json())
// app.use(bodyParser.json)

//app.use(auth);
app.use('/', learningList)

app.listen(5000, () => {
    console.log("Server Started")
})
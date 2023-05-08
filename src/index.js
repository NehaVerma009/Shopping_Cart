const express = require('express')
const route = require('./route/route.js')
const mongoose = require('mongoose')
const app = express()
const multer = require('multer')

app.use(multer().any());


app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://bakeroo:bakeroo1210@cluster0.eop92uq.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(()=> console.log("MongoDB is connected"))
.catch(err => console.log(err))

app.use('/', route)
app.use(function(req, res){
    return res.status(400).send({status: false, message: "Path Not Found"})
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on Port " + (process.env.PORT || 3000))
})
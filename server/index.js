const express = require('express')
const serve   = express.Router()

serve.route('/login').get((req, res)=>{
    res.sendFile(__dirname + '/view/index.html')
})
serve.route('/signup').get((req, res)=>{
    res.sendFile(__dirname + '/view/signup.html')
})
serve.route('/app').get((req, res)=>{
    res.sendFile(__dirname + '/view/app.html')
})

module.exports = serve
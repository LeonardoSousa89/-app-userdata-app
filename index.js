const _PORT   = 8080

const server  = require('./server/index')

const log     = require('morgan')
const express = require('express')

const app     = express()

app.use(log('dev'))

app.use('/', server)

app.listen(process.env.PORT || _PORT,()=>{
    console.log(`Online into Port: ${_PORT}`)
})
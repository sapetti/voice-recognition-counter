const fs = require('fs')
const https = require('https')
const express = require('express')

const PORT = process.env.PORT || 3000

// Init app
const app = express()

// Middleware
app.use(express.static(__dirname + '/public'))

// Routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

// Read key and certificate
const key = fs.readFileSync('privatekey.localhost.pem').toString()
const cert = fs.readFileSync('certrequest.localhost.pem').toString()
const httpOptions = { key, cert }

// Start server
https.createServer(httpOptions, app).listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
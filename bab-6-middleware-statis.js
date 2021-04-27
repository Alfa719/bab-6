const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'));

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
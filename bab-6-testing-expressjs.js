const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// contoh route path
app.get('/' , (req , res)=>{
  res.send('hello from simple server :)')
})
app.get('/path1/ab*cd' , (req , res)=>{
  res.send('ab*cd')
})
app.get('/path2/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
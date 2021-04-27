const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next)=>{
  console.log('Waktu : ', Date.now())
  next();
})

app.use('/user/:userId',(req, res, next)=>{
  console.log('Tipe Request : ', req.method)
  next();
})

app.get('/' , (req , res)=>{
  console.log('Express JS')
  res.send('Express JS')
})

app.get('/user/:userId' , (req , res)=>{
  console.log('Tampil User ID')
  res.send('Tampil User ID')
})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
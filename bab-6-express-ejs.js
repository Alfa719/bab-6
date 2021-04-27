var express = require('express')
var app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');

app.get('/' , (req , res)=>{
  // Render nama file ejs
  res.render('bab-6-home', {
    // pharsing nilai sesuai dengan view
    judul:"Judul ditulis dengan EJS",
    pesan:"Pesan juga dari EJS"
  });
})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
const express = require("express");

const app = express()

var dbConnection = require('./db')
var productsRoute = require('./routes/productsRoute')

app.use('/api/products/', productsRoute)

app.get("/", (req, res) => {
  res.send('THis is from backend')
})

const port= 8000

app.listen(port, () => console.log('Nodejs server started'))
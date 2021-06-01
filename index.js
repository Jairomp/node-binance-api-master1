const express = require('express')
const app = express()
const Binance = require('./examples/example.js');
const web = require('./')

app.get('/', function (req, res) {
  res.send('Hola Jayro, un saludoS')
})
 
app.listen(3000)
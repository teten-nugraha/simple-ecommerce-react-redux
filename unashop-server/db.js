const mongoose = require('mongoose');

var mongoURL = 'mongodb://localhost/unashop';

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var dbConnect = mongoose.connection

dbConnect.on('error', () => {
  console.log(`MongoDB Connection Failed`)
})

dbConnect.on('connected', () => {
  console.log(`Mongo DB Connection Successfull`)
})

module.exports = mongoose
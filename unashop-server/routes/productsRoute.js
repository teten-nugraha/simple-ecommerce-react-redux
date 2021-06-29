const express = require('express')
const router = express.Router()
const Product = require('../models/productModel')

router.get("/getAllProducts",(req, res) => {
  Product.find({}, (err,docs) => {
    if(!err) {
      return res.json({docs});
    }else{
      return res.status(400).json({
        'message':'something went wrong'
      });
    }
  })
})

module.exports = router
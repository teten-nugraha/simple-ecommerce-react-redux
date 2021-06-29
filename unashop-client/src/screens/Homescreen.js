import React from 'react'
import Product from '../components/Product'
import products from '../products'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Homescreen() {

  const [products, setProducts]  =useState([])

  useEffect(() => {
    axios.get('/api/products/getAllProducts').then(res=> {
      console.log(res)
      setProducts(res.data.docs)
    }).catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div>
      <div className="row justify-content-center">
        {products.length && (products.map(product => {
          return 
          <div key={product.id}>
          <Product product={product} />
          </div>
        }))}
      </div>
    </div>
  )
}

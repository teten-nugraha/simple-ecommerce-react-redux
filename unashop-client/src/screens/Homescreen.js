import React from 'react'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productActions'

export default function Homescreen() {

  const getAllProductState = useSelector(state=> state.getAllProductReducer)
  const { loading, products, error} = getAllProductState

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getAllProducts())

  },[])

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading ...</h1>
        ):error ? (
          <h1>Something went wrong</h1>
        ):(
          products.map(product => {
            return <div className='col-md-3 m-2 p-2'>
              <Product product={product} />
            </div>
          })
        )}
      </div>
    </div>
  )
}

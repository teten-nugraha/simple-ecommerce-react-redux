import axios from 'axios'

export const getAllProducts = () => dispatch => {

  dispatch({ type: 'GET_PRODUCTS_REQUEST' })

  axios.get('/api/products/getAllProducts').then(res => {
    console.log(res.data.docs)
    dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data.docs })
  }).catch(err => {
    console.log(err)
    dispatch({ type: 'GET_PRODUCTS_FAILED', payload: err })
  })
}
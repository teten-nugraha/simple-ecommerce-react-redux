export const getAllProductReducer=(state={products:[]}, action) => {
  switch(action.type) {
    case 'GET_PRODUCTS_REQUEST' : return {
      loading: true
    }
    case 'GET_PRODUCTS_SUCCESS' : return {
      products: action.payload,
      loading: false
    }
    case 'GET_PRODUCTS_FAILED' : return {
      loading: false,
      error: action.payload
    }
    default:return state
  }
}
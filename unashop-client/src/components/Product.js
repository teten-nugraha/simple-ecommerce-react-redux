import React from 'react'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

export default function Product({ product }) {
  return (
    <div className="text-left" key={product._id}>
      <div> 
        <Link to={`product/${product._id}`}>
        <Rating
          style={{color:'orange'}}
          initialRating={product.rating}
          emptySymbol="fa fa-star-o fa-1x"
          fullSymbol="fa fa-star fa-1x"
        />
        <img src={product.image} className='img-fluid' />
        <h1>{product.name}</h1>
        
        <h1>Price : {product.price}</h1>
        </Link>
      </div>
    </div>
  )
}

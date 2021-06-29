import React from 'react'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-5 card p-2 text-left" key={product.id}>
      <div>
        <Link to={`product/${product.id}`}>
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

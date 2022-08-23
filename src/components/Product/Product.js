import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {name ,img,price,quantity,ratings,stock} =props.product;
    return (
        <div className='product-info'>
           <img src={img} alt="" /> 

        <div className="products-details">
        <h3>{name}</h3>
           <p>Price: $ {price}</p>
           <p>Quantity : {quantity}</p>
           <p> Ratings: {ratings} star</p>
        </div>
          <button className='btn-cart'>
            <p>Add To curt</p>
          </button>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    } ,[])
    return (
        <div className='products'>
          <div className="products-cart">
           {
            products.map(product => <Product
                 key={product.id}
                 product={product}
                 ></Product>)
           }
          </div>
          <div className="products-summary">
          <h1>products-summary</h1>
          </div>
        </div>
    );
};

export default Shop;
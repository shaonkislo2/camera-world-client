import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name, img, price, description} = product;
    return (
        <div className="product  p-3">
        <h1 className="fs-3 my-3">{name} </h1>
         <img className="w-100" src={img} alt="" />
         <p>{description}</p>
         <h3 className="px-3 mt-3">{price}</h3>

        <button className="btn-style">Order </button>
  
        </div>
    );
};

export default Product;





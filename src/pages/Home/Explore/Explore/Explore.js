import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css'

const Explore = ({explore}) => {
    const {name, img, price} = explore;
    return (
        <div className="explore  p-3">
            <h1 className="fs-3 my-3">{name} </h1>
         <img className="w-100" src={img} alt="" />
         <h3 className="px-3 mt-3">{price}</h3>

         <Link to="/orderreview">
         <button className="btn-style">Order {name} </button>
            </Link>
            
        </div>
    );
};

export default Explore;
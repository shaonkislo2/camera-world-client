import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
             <img style={{width:'100%'}} src="https://image.freepik.com/free-vector/hand-drawn-404-error_23-2147736515.jpg" alt="" />
           
           <Link to="/"> <button className="btn btn-warning">Go BAck</button></Link>
        </div>
    );
};

export default NotFound;
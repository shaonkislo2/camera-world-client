import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        const url = ``
        fetch(url)
    },[])
    return (
        <div>
            <h2>Orders</h2>
        </div>
    );
};

export default Orders;
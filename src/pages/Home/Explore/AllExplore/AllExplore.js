import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import './AllExplore.css'

const AllExplore = () => {
    const [allExplore, setAllExplore] = useState([]);

    useEffect(() =>{
        fetch('https://aqueous-peak-41185.herokuapp.com/explore')
        .then(res => res.json())
        .then(data => setAllExplore(data))
    },[])
    return (
        <div>
            <h1 className="my-5">Our Explore Products : {allExplore.length}</h1>

<div className="allexplore-container">
    {
        allExplore.map (explore => <Explore
        key={explore.id}
        explore={explore}
        ></Explore>)
    }
</div>
            
        </div>
    );
};

export default AllExplore;
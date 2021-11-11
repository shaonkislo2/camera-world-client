import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import Typography from '@mui/material/Typography';



const AllExplore = () => {
    const [allExplore, setAllExplore] = useState([]);

    useEffect(() =>{
        fetch('https://aqueous-peak-41185.herokuapp.com/explore')
        .then(res => res.json())
        .then(data => setAllExplore(data))
    },[])
    return (
        <Container>
            <Typography sx={{ color: 'info.main', fontWeight: 600, m:5 }} variant="h3">Our Explore Products : {allExplore.length}</Typography>

            <Grid container spacing={2}>
              {
                 allExplore.map(explore =><Explore
                 key = {explore.id}
                 explore= {explore}
                 ></Explore>) 
              }
            </Grid>
            
        </Container>
    );
};

export default AllExplore;
import { Alert, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import Typography from '@mui/material/Typography';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';



const AllExplore = () => {
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [allExplore, setAllExplore] = useState([]);

    useEffect(() =>{
        fetch('https://aqueous-peak-41185.herokuapp.com/explore')
        .then(res => res.json())
        .then(data => setAllExplore(data))
    },[])
    return (
        <> 
        <Header></Header>
        <Container>
            
            <Typography sx={{ color: 'info.main', fontWeight: 600, m:5 }} variant="h3">Our Explore Products : {allExplore.length}</Typography>
            {orderSuccess && <Alert severity="success">Order Successfully !</Alert> }

            <Grid container spacing={2}>
              {
                 allExplore.map(explore =><Explore
                 key = {explore.id}
                 explore= {explore}
                 setOrderSuccess={setOrderSuccess}
                 ></Explore>) 
              }
            </Grid>
            
        </Container>
        <Footer></Footer>
        </>
    );
};

export default AllExplore;
import React from 'react';
import {  Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExploreModal from '../ExploreModal/ExploreModal';

const Explore = ({explore, setOrderSuccess}) => {
    const {name, img, price, description} = explore;
    const [openExplore, setOpenExplore] = React.useState(false);
    const handleExploreOpen = () => setOpenExplore(true);
    const handleExploreClose = () => setOpenExplore(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
             <Paper elevation={3} sx={{py:5}}> 
             <Typography sx={{ color: 'info.main', fontWeight: 500 }} variant="h4" gutterBottom component="div">
              {name}
             </Typography>
             <img style={{width: '75%'}} src={img} alt="" />
             <Typography variant="caption" display="block" gutterBottom>
              {description}
               </Typography>
             <Typography variant="h6" gutterBottom component="div">
              {price}
             </Typography>
             <Button onClick={handleExploreOpen} variant="contained">Order</Button>
             </Paper>
      </Grid>

      <ExploreModal
      explore={explore}
      openExplore={openExplore}
      handleExploreClose={handleExploreClose}
      setOrderSuccess={setOrderSuccess}
      ></ExploreModal>

      </>

      
    );
};

export default Explore;
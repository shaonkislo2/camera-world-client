import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ExploreModal = ({openExplore, handleExploreClose, explore, setOrderSuccess}) => {
    const {name, price, img} = explore;
    const {user} = useAuth();

    const initialInfo = {customerName: user.displayName, email: user.email, phone: ''}

    const [exploreInfo, setExploreInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...exploreInfo};
        newInfo[field] = value;
        setExploreInfo(newInfo);
    }

    const handleExploreSubmit = e => {
    // collect data

    const exploreOrder = {
      ...exploreInfo,
      productName: name, 
      price,
    }
    
      // send to the server
      fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(exploreOrder)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setOrderSuccess(true);           
          handleExploreClose();
        }
      })

        
        
        e.preventDefault();
    } 
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openExplore}
        onClose={handleExploreClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}   
      >
        <Fade in={openExplore}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             Price: {price}
            </Typography>
           
            
           <form onSubmit={handleExploreSubmit}>
           
            <TextField
            sx={{width:'90%', m:1}}
          id="filled-size-small"
          defaultValue={user.displayName}
          name="customerName"
          onBlur={handleOnBlur}
          variant="filled"
          size="small"
        />
            <TextField
            sx={{width:'90%', m:1}}
          id="filled-size-small"
          name="email"
          onBlur={handleOnBlur}
          defaultValue={user.email}         
          variant="filled"
          size="small"
        />
            <TextField
            sx={{width:'90%', m:1}}
          id="filled-size-small"
          name="phone"
          onBlur={handleOnBlur}
          defaultValue="Phone Number"
          variant="filled"
          size="small"
        />
          <Button type="submit" variant="contained">Submit</Button>
           </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default ExploreModal;
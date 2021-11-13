import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        <Carousel>
 <Carousel.Item>
   <img
     className="d-block w-100 "
     
     src="https://petapixel.com/assets/uploads/2018/06/xserieshead-800x534.jpg
     "
     alt="First slide"
   />
   <Carousel.Caption>
     
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100 "
     
     src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
     alt="Second slide"
   />

   <Carousel.Caption>
     
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100 "
     
     src="https://www.cnet.com/a/img/XvlwJaC3ammE2raBdnRwzdF0u8o=/1200x630/2020/07/08/041f717a-58c9-4099-a050-5da8dd374136/product-1-image-3.jpg"
     alt="Third slide"
   />

   <Carousel.Caption>
     
   </Carousel.Caption>
 </Carousel.Item>
</Carousel>   
       </>
    );
};

export default Banner;
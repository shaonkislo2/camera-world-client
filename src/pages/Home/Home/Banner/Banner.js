import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        <Carousel>
 <Carousel.Item>
   <img
     className="d-block w-100 "
     
     src="https://i1.adis.ws/i/canon/powerful-and-fast-wildlife-photos-with-the-canon-eos-90d-2x_273939457475348?w=1146&qlt=70
     "
     alt="First slide"
   />
   <Carousel.Caption>
     
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100 "
     
     src="https://i1.adis.ws/i/canon/canon_EOS_800D_hero?w=1920"
     alt="Second slide"
   />

   <Carousel.Caption>
     
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100 "
     
     src="https://images.squarespace-cdn.com/content/v1/5deeb1c2bc54b27a0e0c75a2/1597313936383-3ZA33AR4TG0B45WDFZTF/IMG_1265.JPG?format=1000w"
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
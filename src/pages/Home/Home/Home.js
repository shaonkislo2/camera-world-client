import React from 'react';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';
import AllReview from '../Review/AllReview/AllReview';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Banner></Banner>
           <Products></Products>
           <AllReview></AllReview>
           <Gallery></Gallery>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;
import React from 'react';
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
           <Footer></Footer>
           
        </div>
    );
};

export default Home;
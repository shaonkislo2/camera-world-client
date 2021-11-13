import React from 'react';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Banner></Banner>
           <Products></Products>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;
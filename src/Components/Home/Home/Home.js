import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductsCatagories from '../ProductsCatagories/ProductsCatagories';
import ProvideServices from '../ProvideServices/ProvideServices';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProductsCatagories />
            <ProvideServices></ProvideServices>
            <ClientsFeedback></ClientsFeedback>
            <Subscribe />
            <Footer></Footer>
        </div>
    );
};

export default Home;

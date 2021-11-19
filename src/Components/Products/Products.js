import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import NavMenu from '../Home/NavMenu/NavMenu';
import ServicesDetails from '../Home/ServicesDetails/ServicesDetails';

const Products = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-basin-54466.herokuapp.com/loadProducts')
            .then(response => response.json())
            .then(result => {
                setAllServices(result);
            });
    }, []);
    return (
        <div>
            <div>
                <NavMenu />
            </div>
            <div className="col-xs-12 pb-3">
                <img src="https://icetoday.net/wp-content/uploads/2017/11/6C7A7385-Edit-copy.jpg" alt="" className="img-fluid" style={{ width: '100%', height: 450 }} />
            </div>

            <section className="container mt-5 ">
                <h2 className="text-center">
                    <span style={{ color: '#903A81' }}>Products</span>
                </h2>
                <div className="mt-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 ">
                        {allServices.map(service => (
                            <ServicesDetails service={service} key={service._id}></ServicesDetails>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Products;

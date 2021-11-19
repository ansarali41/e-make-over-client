import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const ProvideServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-basin-54466.herokuapp.com/loadProducts')
            .then(response => response.json())
            .then(result => {
                const newResult = result.slice(0, 6);
                setAllServices(newResult);
            });
    }, []);

    return (
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

            <div className="my-3 d-flex justify-content-center">
                <Link to="/productsList" className="service-link">
                    <button className="Buy-now">See More Products</button>
                </Link>
            </div>
        </section>
    );
};

export default ProvideServices;

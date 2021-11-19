import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDetails.css';

const ServicesDetails = ({ service }) => {
    const { title, description, price, _id } = service;

    return (
        <div className="col">
            <div className="card border-0 shadow-lg h-100 p-3">
                <div className="text-center">
                    <img className="w-75 p-2" src={`data:image/png;base64,${service.image.img}`} alt="" />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <h4>${price}</h4>
                <div className="my-3">
                    <Link to={`/dashboard/${_id}`} className="service-link">
                        <button className="Buy-now">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;

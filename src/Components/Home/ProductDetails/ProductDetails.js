import React from 'react';
import { Card } from 'react-bootstrap';
import './ProductDetails.css';

const ProductDetails = ({ service }) => {
    const { title, description, price, image } = service;

    return (
        <Card style={{ width: '20rem', marginTop: 20 }}>
            <div className="d-flex justify-content-center">
                <Card.Img variant="top" src={`data:image/png;base64,${image.img}`} alt="" />
            </div>

            <Card.Body className="text-left">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text className="font-weight-bold"> Cost: ${price}</Card.Text>
                <Card.Text>20% discount</Card.Text>
                <Card.Text>VIP Service</Card.Text>
                <Card.Text>Free wifi</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductDetails;

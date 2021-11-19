import React, { useEffect, useState } from 'react';
import ClientsFeedbackCard from '../ClientsFeedbackCard/ClientsFeedbackCard';

const ClientsFeedback = () => {
    let [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-tundra-06496.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => {
                setFeedbacks(data);
            });
    }, []);

    if (feedbacks.length > 5) {
        feedbacks = feedbacks.slice(0, 6);
    }

    return (
        <div className="container my-5">
            <h3 className="py-5 text-center text-light-green">Reviews</h3>
            <div className="m-2">
                <div className="row">
                    {feedbacks.map((feedback, i) => (
                        <ClientsFeedbackCard feedback={feedback} key={i}></ClientsFeedbackCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientsFeedback;

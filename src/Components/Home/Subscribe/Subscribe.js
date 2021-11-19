import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <section
            style={{ height: 300 }}
            className="
      container
      d-flex
      justify-content-center
      align-items-center
      rounded-3
      slider-bg
    "
            id="Subscriber"
        >
            <div>
                <h1>LET'S STAY IN TOUCH</h1>
                <p>Get updates on sales, specials and more</p>
                <input className="form-control" type="text" placeholder="Your Email" />
                <br />
                <button className="Buy-now">SUBMIT</button>
            </div>
        </section>
    );
};

export default Subscribe;

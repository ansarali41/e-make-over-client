import React from 'react';
import Footer from '../Home/Footer/Footer';
import NavMenu from '../Home/NavMenu/NavMenu';
import './About.css';

const About = () => {
    return (
        <div className="aboutus-area">
            <div>
                <NavMenu />
            </div>
            <div className="col-xs-12 pb-3">
                <img src="https://images6.alphacoders.com/347/thumb-1920-347504.jpg" alt="" className="img-fluid" style={{ width: '100%', height: 450 }} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="aboutus-content ">
                                <div className="text-center">
                                    <h1>
                                        About <span>Us</span>
                                    </h1>
                                    <br />
                                    <h4>What we Have!</h4>
                                </div>
                                <p>
                                    A makeover is a radical change in appearance. When the word is used to describe a change in human physical appearance, it may imply a change in
                                    clothing, haircut, or cosmetics. A personal makeover might also include plastic surgery, dental veneers, or contact lenses. Sometimes a makeover
                                    is used to refer to non-physical things, such as a makeover of character, personality or attitude. It can also refer to a dramatic change in
                                    construction, such as when a building is renovated or is refurbished. Makeovers are usually referred to in a positive manner, as a way to start
                                    fresh or improve your life.
                                </p>

                                <div className="counter ">
                                    <div className="single-counter text-center">
                                        <h2 className="counter">1500+</h2>
                                        <p>Clients</p>
                                    </div>

                                    <div className="single-counter text-center">
                                        <h2 className="counter">10</h2>
                                        <p>International awards</p>
                                    </div>

                                    <div className="single-counter text-center">
                                        <h2 className="counter">100+</h2>
                                        <p>Services</p>
                                    </div>

                                    <div className="single-counter text-center">
                                        <h2 className="counter">2</h2>
                                        <p>VIP Rooms Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;

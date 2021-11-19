import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './HeaderMain.css';

const HeaderMain = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <main style={{ height: '400px', margin: '0' }} className="mb-5">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="d-flex align-items-center slider-bg px-5">
                        <div>
                            <h1>Base MakeOver Foundation</h1>
                            <p>Apply long-wear and colour-true MAC makeup foundations for flawless skin.Base MakeOver Foundation.</p>
                            <h1>$920</h1>
                            <button className="Buy-now">Buy Now</button>
                        </div>
                        <div>
                            <img className="d-block w-100" style={{ height: 400 }} src="https:i.ibb.co/SrbVm1D/FA-130.png" alt="First slide" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center slider-bg px-5">
                        <div>
                            <h1>Base MakeOver Foundation</h1>
                            <p>Apply long-wear and colour-true MAC makeup foundations for flawless skin.Base MakeOver Foundation.</p>
                            <h1>$920</h1>
                            <button className="Buy-now">Buy Now</button>
                        </div>
                        <div>
                            <img className="d-block w-100" style={{ height: 400 }} src="https:i.ibb.co/pbkvt0V/red-lipstick.png" alt="Second slide" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center slider-bg px-5">
                        <div>
                            <h1>Base MakeOver Foundation</h1>
                            <p>Apply long-wear and colour-true MAC makeup foundations for flawless skin.Base MakeOver Foundation.</p>
                            <h1>$920</h1>
                            <button className="Buy-now">Buy Now</button>
                        </div>
                        <div>
                            <img className="d-block w-100" style={{ height: 400 }} src="https:i.ibb.co/9svYcqR/shadow.png" alt="Third slide" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </main>
    );
};

export default HeaderMain;

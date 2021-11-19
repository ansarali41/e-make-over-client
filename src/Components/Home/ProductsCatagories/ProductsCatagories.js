import React from 'react';

const ProductsCatagories = () => {
    return (
        <section className="container">
            <div className="row gy-5 my-3">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="p-3 border rounded-3 categories-bg d-flex align-items-center justify-content-between">
                        <h1 className="text-white">Foundation</h1>
                        <img width="100px" src="https://i.ibb.co/RhPxLWP/Cosmetics-Contour-Foundation-Palette-in-Light.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className=" p-3 border rounded-3 categories-bg d-flex align-items-center justify-content-between">
                        <h1 className="text-white">EyeShadow</h1>
                        <img width="100px" src="https://i.ibb.co/mzDXvgZ/EYPL-16-XSHIM01-main.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className=" p-3 border rounded-3 categories-bg d-flex align-items-center justify-content-between">
                        <h1 className="text-white">Lipstick</h1>
                        <img width="100px" src="https://i.ibb.co/bLBdyD4/lipstick.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsCatagories;

import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const Payment = () => {
    return (
        <div>
            <div className="container">
                <DashboardHeader></DashboardHeader>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 dashboard-bg">
                    <div className="col-md-6">
                        <h4>payment system is coming soon</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;

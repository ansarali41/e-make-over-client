import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminSidebar from '../../Admin/AdminSidebar/AdminSidebar';
import ServiceListAdmin from '../../Admin/ServiceListAdmin/ServiceListAdmin';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [user, setUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/isAdmin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setIsAdmin(data);
                }
            });
    }, [user.email]);

    return (
        <section>
            <div className="container">
                <DashboardHeader></DashboardHeader>
            </div>

            <div className="row">
                <div className="col-md-2" style={{ background: '#FDECEC' }}>
                    {isAdmin ? <AdminSidebar></AdminSidebar> : <Sidebar></Sidebar>}
                </div>
                <div className="col-md-10 p-4  dashboard-bg">{isAdmin ? <ServiceListAdmin dashboard={'dashboard'} /> : <Order dashboard={'dashboard'} />}</div>
            </div>
        </section>
    );
};

export default Dashboard;

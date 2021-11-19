import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import AdminProductsDetails from '../AdminProductsDetails/AdminProductsDetails';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminProductsList = ({ dashboard }) => {
    const [allServiceList, setAllServiceList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/loadProducts')
            .then(response => response.json())
            .then(data => {
                setAllServiceList(data);
            });
    }, [allServiceList]);

    let container = 'container';
    let p = 'p-4';
    if (dashboard) {
        container = '';
        p = '';
    }

    return (
        <section>
            <div className={`${container}`}>{dashboard ? <div></div> : <DashboardHeader></DashboardHeader>}</div>

            <div className="row">
                {dashboard ? (
                    <div></div>
                ) : (
                    <div className="col-md-2">
                        <AdminSidebar></AdminSidebar>
                    </div>
                )}
                <div className={`col-md-10 ${p} dashboard-bg`}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allServiceList.map(serviceList => (
                                <AdminProductsDetails serviceList={serviceList} key={serviceList._id}></AdminProductsDetails>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AdminProductsList;

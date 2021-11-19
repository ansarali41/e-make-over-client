import { faBox, faPlus, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between p-4" style={{ height: '100vh', backgroundColor: '#FDECEC' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/serviceListAdmin" className="text-dark">
                        <FontAwesomeIcon icon={faBox} /> <span>Products list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Products</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageProducts" className="text-dark">
                        <FontAwesomeIcon icon={faTasks} /> <span>Manage Products</span>
                    </Link>
                </li>

                <li>
                    <Link to="/makeAdmin" className="text-dark">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make new Admin</span>
                    </Link>
                </li>
            </ul>
            <div></div>
        </div>
    );
};

export default AdminSidebar;

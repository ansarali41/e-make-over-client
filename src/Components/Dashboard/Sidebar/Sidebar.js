import { faBox, faCartPlus, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between p-4" style={{ height: '100vh', backgroundColor: '#FDECEC' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/order" className="text-dark">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList" className="text-dark">
                        <FontAwesomeIcon icon={faBox} /> <span>Service list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Review" className="text-dark">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </ul>

            <div></div>
        </div>
    );
};

export default Sidebar;

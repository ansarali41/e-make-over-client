import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import NavMenu from '../../Home/NavMenu/NavMenu';

const DashboardHeader = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            <NavMenu />
        </div>
        // <div className="row p-3">
        //     <div className="col-md-4">
        //         <Link to="/">
        //             <img src="https://i.ibb.co/yNTN06t/logoo.png" alt="" />
        //             <img src="https://i.ibb.co/HN88pr7/logo-01.png" alt="" width="150" />
        //         </Link>
        //     </div>
        //     <div className="col-md-4">
        //         <h6>Dashboard</h6>
        //     </div>
        //     <div className="col-md-4 text-right">
        //         <h6>{user.displayName}</h6>
        //     </div>
        // </div>
    );
};

export default DashboardHeader;

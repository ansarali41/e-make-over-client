import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { logOutHandler } from '../../Login/LoginManager';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavMenu.css';

const NavMenu = () => {
    const [user, setUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch(`https://sleepy-basin-54466.herokuapp.com/isAdmin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setIsAdmin(data);
                }
            });
    }, [user.email]);
    const userLogOut = () => {
        logOutHandler().then(res => {
            if (sessionStorage.getItem('token')) {
                sessionStorage.removeItem('token');
            }
            setUser(res);
        });
    };

    return (
        <Navbar bg="light-" expand="lg" className="container nav-menu-container">
            <Navbar.Brand>
                <Link className="navbar-brand" to="/">
                    <img src="https://i.ibb.co/yNTN06t/logoo.png" alt="" />
                    <img src="https://i.ibb.co/HN88pr7/logo-01.png" alt="" width="200" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link font-weight-bold mr-2" to="/">
                        Home
                    </Link>
                    <Link className="nav-link font-weight-bold mr-2" to="/productsList">
                        Products
                    </Link>
                    <Link className="nav-link font-weight-bold mr-2" to="/aboutUs">
                        About Us
                    </Link>
                    {user.email ? (
                        <NavDropdown title={`${user.displayName}`} id="collasible-nav-dropdown">
                            <div className="nav-dropdown-container pl-3">
                                <Link className="dropdown-link" to="/serviceList">
                                    Dashboard
                                </Link>
                                <br />
                                {isAdmin && (
                                    <div>
                                        <Link className="dropdown-link" to="/serviceListAdmin">
                                            Admin
                                        </Link>
                                        <br />
                                    </div>
                                )}

                                <Link className="dropdown-link" to="/" onClick={userLogOut}>
                                    LogOut
                                </Link>
                                <br />
                            </div>
                        </NavDropdown>
                    ) : (
                        <Link to="/login">
                            <button type="button" className="btn btn-dark">
                                Login
                            </button>
                        </Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;

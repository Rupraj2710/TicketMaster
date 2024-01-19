import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <div className='container-fluid p-0'>
                <div className='row'>
                    <div className='col-12'>
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <a class="navbar-brand" href="#">Ticketmaster</a>
                            <div className="container-fluid">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Departments">Departments</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Employee">Employee</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Ticket">Ticket</Link>

                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
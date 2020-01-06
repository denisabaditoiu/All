import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="container">
                <Link to="/">
                <div>Home</div>
                </Link>
                <Link to="/about">
                <div>About</div>
                </Link>
                <Link to="/about">
                <div>Contact</div>
                </Link>
                <Link to="/dashboard">
                <div>Dashboard</div>
                </Link>
            </div>
        );
    }
}

export default NavBar;
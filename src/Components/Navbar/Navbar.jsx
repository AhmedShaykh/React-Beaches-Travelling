import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h2>
                    BEACHES.
                </h2>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Destinations</li>
                <li>Book</li>
                <li>View</li>
            </ul>
        </div>
    );
}

export default Navbar;
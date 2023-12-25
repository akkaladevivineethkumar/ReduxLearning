// Navbar.js
import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { userName } = useSelector((state) => state.user);
    return (
        <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
            <a href="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
                Home
            </a>
            <p>{userName}</p>
        </nav>
    );
};

export default Navbar;

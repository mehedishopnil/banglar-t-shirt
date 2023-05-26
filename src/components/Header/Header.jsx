import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <Link to ='/'>Home</Link>
            <Link to ='/orderReview'>Review</Link>
            <Link to ='/grandpa'>GrandPa</Link>
            <Link to ='/cart'>Cart</Link>
        </nav>
    );
};

export default Header;
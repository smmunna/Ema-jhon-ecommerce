/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar flex justify-between px-24'>
            <div>
                <a href="/home">
                    <img src={Logo} alt="EmaJhon" />
                </a>
            </div>
            <div className='nav-item text-base-100'>
                <a href="/order">Oder</a>
                <a href="order-review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
}

export default Header;

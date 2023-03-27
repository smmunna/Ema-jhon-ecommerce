/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar flex flex-col lg:flex-row justify-between px-5 lg:px-24'>
            <div>
                <a href="/home">
                    <img src={Logo} alt="EmaJhon" />
                </a>
            </div>
            <div className='nav-item text-base-100'>
                <a href="/shop">Shop</a>
                <a href="order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
}

export default Header;

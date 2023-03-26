/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar flex justify-between px-5 lg:px-24'>
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
            <div className='menubar text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    );
}

export default Header;

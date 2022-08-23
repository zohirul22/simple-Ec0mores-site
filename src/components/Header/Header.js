import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='navber'>
           <img src={logo} alt="" />

          <div className="link">
          <a href="/order">Order</a>
           <a href="/orderreview">OrderReview</a>
           <a href="/inventory">Inventory</a>
           <a href="login">Login</a>
          </div>
        </nav>
    );
};

export default Header;
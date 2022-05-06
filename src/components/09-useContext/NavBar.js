import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='navBar'>
            <Link className='navLink' to={'/'}>useContext</Link>

            <div className='linkContainer'>
                <Link className='navLink' to={'/'}>Home</Link>
                <Link className='navLink' to={'/about'}>About</Link>
                <Link className='navLink' to={'/login'}>Login</Link>
            </div>
        </nav>
    )
}

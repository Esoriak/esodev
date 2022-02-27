import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
            <div className="Nav-Bar" >
                <Link to="/Home" className='link-screen'>Welcome</Link>
                <Link to="/History" className='link-screen'>Qui suis-je</Link>
                <Link to="/Contact" className='link-screen'>Me contacter</Link>
                <Link to="/Portfolio" className='link-screen'>Mes projets</Link>
                <Outlet />
            </div>
    )
}


export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="Nav-box">
            <nav
            className="Nav-Bar"
            >
                <Link to="/History" className='link-screen'>Qui suis-je</Link>
                <Link to="/Contact" className='link-screen'>Me contacter</Link>
                <Link to="/Portfolio" className='link-screen'>Mes projets</Link>
            </nav>
        </div>
    )
}


export default Navbar;
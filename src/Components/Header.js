import { div } from 'prelude-ls';
import React from 'react';
import { Link } from 'react-router-dom';
import Esodevlogo from '../Utils/Assets/EsodevlogoFinale2.png'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={Esodevlogo} className="App-logo" alt="logo" />
            </div>
        </div>
    )
}


export default Header;
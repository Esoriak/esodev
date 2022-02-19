import React from 'react';
import { NavLink } from 'react-router-dom';
import Esodevlogo from '../Utils/Assets/Esodevlogo.png'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <img src={Esodevlogo} className="App-logo" alt="logo" />
            <div className="main-nav-container">
            <ul className="Main-nav">
              <li><NavLink onClick={this.props.gunSound} exact to="/"> Accueil</NavLink></li>
              <li><NavLink onClick={this.props.gunSound} exact to="/History"> Qui suis-je ? </NavLink></li>
              <li><NavLink onClick={this.props.gunSound} exact to="/Portfolio"> Mes projets </NavLink></li>
              <li><NavLink onClick={this.props.gunSound} exact to="/Contact"> Me contacter </NavLink></li>
            
            </ul>
          </div>
        </div>
    )
}


export default Header;
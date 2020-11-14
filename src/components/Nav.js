import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import "../assets/styles/navbar.css"
import logo from "../assets/icons/web-logo.png"
class Nav extends React.Component {
  render() {    
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-custom">
            <a className="navbar-brand" href="#">
            <img src={logo} width="auto" height="30" className="d-inline-block align-top" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">About</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="nav-link dropdown-item" href="/about">Team</a>
                        <a className="nav-link dropdown-item" href="#">Blog</a>
                        <a className="nav-link dropdown-item" href="#">FAQ</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Services</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="nav-link dropdown-item" href="#">Telecom Audit and Optimization</a>
                        <a className="nav-link dropdown-item" href="#">Mobile and Wireless Service</a>
                        <a className="nav-link dropdown-item" href="#">Telecom Tax Audit</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Case Studies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Career</a>
                </li>
                <li className="nav-item">
                    <button className="btn my-2 my-sm-0 get-started-button">Get Started</button>
                </li>
                </ul>
            </div>
      </nav>
    );
  }
}
export default Nav;
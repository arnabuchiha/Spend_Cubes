import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import "../assets/styles/navbar.css"
class Nav extends React.Component {
  render() {    
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
            <a class="navbar-brand" href="#">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
            Bootstrap
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">About</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/about">Team</a>
                        <a class="dropdown-item" href="#">Blog</a>
                        <a class="dropdown-item" href="#">FAQ</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Services</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Telecom Audit and Optimization</a>
                        <a class="dropdown-item" href="#">Mobile and Wireless Service</a>
                        <a class="dropdown-item" href="#">Telecom Tax Audit</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Case Studies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Career</a>
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
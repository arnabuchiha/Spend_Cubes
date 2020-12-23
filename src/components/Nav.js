import React from 'react';
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';
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
                    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">About</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="/about" className="nav-link dropdown-item" activeClassName="active" >Team</NavLink>
                        <NavLink to="/blog" className="nav-link dropdown-item" activeClassName="active">Blog</NavLink>
                        <NavLink to="/faq" className="nav-link dropdown-item" activeClassName="active">FAQ</NavLink>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Services</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink to="/service" className="nav-link dropdown-item" activeClassName="active">Audit Solutions</NavLink>
                    <NavLink to="/telecomAuditOptimization" className="nav-link dropdown-item" activeClassName="active">Telecom Audit and Optimization</NavLink>
                    <NavLink to="/mobileWirelessAudit" className="nav-link dropdown-item" activeClassName="active">Mobile and Wireless Audit</NavLink>
                    <NavLink to="/telecomRefundAudit" className="nav-link dropdown-item" activeClassName="active">Telecom Refund Audit</NavLink>
                    <NavLink to="/telecomTaxAudit" className="nav-link dropdown-item" activeClassName="active">Telecom Tax Audit</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link dropdown-item" activeClassName="active">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/career" className="nav-link dropdown-item" activeClassName="active">Career</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" style={{textDecoration:"none", color:"white"}} className="btn my-2 my-sm-0 get-started-button">Get Started</NavLink>
                </li>
                </ul>
            </div>
      </nav>
    );
  }
}
export default Nav;
import React from 'react';
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';
import "../assets/styles/navbar.css"
import logo from "../assets/icons/web-logo.png"

class Nav extends React.Component {
  render() {    
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-custom">
            <a className="navbar-brand" href="/">
            <img src={logo} width="auto" height="30" className="d-inline-block align-top" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink exact={true} to="/" data-toggle="collapse" data-target=".navbar-collapse.show" className={`nav-link`}  activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">About</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="/about" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link dropdown-item" activeClassName="active" >Team</NavLink>
                        <NavLink to="/faq" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link dropdown-item" activeClassName="active">FAQ</NavLink>
                        <NavLink to="/blog" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link dropdown-item" activeClassName="active">Blogs & Case Studies</NavLink>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Services</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink to="/service" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link dropdown-item" activeClassName="active">Audit Solutions</NavLink>
                    <NavLink to="/telecomAuditOptimization" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link dropdown-item" activeClassName="active">Telecom Audit and Optimization</NavLink>
                    <NavLink to="/mobileWirelessAudit" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link dropdown-item" activeClassName="active">Mobile and Wireless Audit</NavLink>
                    <NavLink to="/telecomRefundAudit" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link dropdown-item" activeClassName="active">Telecom Refund Audit</NavLink>
                    <NavLink to="/telecomTaxAudit" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link dropdown-item" activeClassName="active">Telecom Tax Audit</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" data-toggle="collapse" data-target=".navbar-collapse.show" className={`nav-link`} activeClassName="active">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/career" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" activeClassName="active">Career</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" activeClassName="active">Log In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" data-toggle="collapse" data-target=".navbar-collapse.show" style={{textDecoration:"none", color:"white"}} className="btn my-2 my-sm-0 get-started-button">Get Started</NavLink>
                </li>
                </ul>
            </div>
      </nav>
    );
  }
}
export default Nav;
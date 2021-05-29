import React from 'react';
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';
import "../assets/styles/navbar.css"
import logo from "../assets/icons/web-logo.png"
import firebase from "firebase/app";
import "firebase/analytics";

class Nav extends React.Component {
    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyDtADVPXlfSTY0nYjPmk_3rgA_1fLLn8jM",
            authDomain: "spendcubes-de222.firebaseapp.com",
            databaseURL: "https://spendcubes-de222-default-rtdb.firebaseio.com",
            projectId: "spendcubes-de222",
            storageBucket: "spendcubes-de222.appspot.com",
            messagingSenderId: "408384910607",
            appId: "1:408384910607:web:7022c0f750fe30965aba7a",
            measurementId: "G-HRDBVXS3J6"
          };
          
        // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();

          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              document.getElementById("loginButton").style.display="none";
              document.getElementById("logoutButton").style.display="block";
            } else {
              // No user is signed in.
              document.getElementById("loginButton").style.display="block";
              document.getElementById("logoutButton").style.display="none";
            }
          });
    }
    logout=()=>{
        firebase.auth().signOut().then(() => {
            document.getElementById("loginButton").style.display="block";
            document.getElementById("logoutButton").style.display="none";
        }).catch((error) => {
            console.log(error)
        });
    }
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
                {/* <li className="nav-item">
                    <NavLink to="/login" id="loginButton" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" activeClassName="active">Log In</NavLink>
                    
                </li> */}
                {/* <li className="nav-item">
                    <NavLink to="/" onClick={this.logout} id="logoutButton" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" activeClassName="active">Log Out</NavLink>
                </li> */}
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
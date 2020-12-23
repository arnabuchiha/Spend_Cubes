import { Component } from 'react';
import './App.css';
import React from "react"
import Nav from './components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AboutUs from './components/AboutUs/aboutus';
import Home from './components/Home';
import blog from "./components/AboutUs/blog"
import Service from "./components/Services/Service"
import TelecomAuditOptimization from "./components/Services/TelecomAuditOptimization";
import MobileWirelessAudit from "./components/Services/MobileWirelessAudit";
import TelecomRefundAudit from "./components/Services/TelecomRefundAudit";
import TelecomTaxAudit from "./components/Services/TelecomTaxAudit";
import faq from './components/AboutUs/faq';
import Career from "./components/Career";
import Contact from './components/contactus';
import Footer from './components/Footer';
import Login from "./components/GetStarted/Login";
import Signup from "./components/GetStarted/Signup";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
        <Nav/>
        
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={AboutUs}/>
            <Route path="/blog" component={blog}/>
            <Route path="/service" component={Service}/>
            <Route path="/faq" component={faq}/>
            <Route path="/telecomAuditOptimization" component={TelecomAuditOptimization}/>
            <Route path="/mobileWirelessAudit" component={MobileWirelessAudit}/>
            <Route path="/telecomRefundAudit" component={TelecomRefundAudit}/>
            <Route path="/telecomTaxAudit" component={TelecomTaxAudit}/>
            <Route path="/career" component={Career}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
          </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
    )
  }
}

export default App;

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
import Career from "./components/career/Career";
import Contact from './components/contactus';
import Footer from './components/Footer';
import Login from "./components/GetStarted/Login";
import Signup from "./components/GetStarted/Signup";
import JobDesc from './components/career/JobDesc';
import Blog1 from "./components/AboutUs/Blogs/blog1";
import Blog2 from "./components/AboutUs/Blogs/blog2";
import Blog3 from "./components/AboutUs/Blogs/blog3";
import Blog4 from "./components/AboutUs/Blogs/blog4";
import Blog5 from "./components/AboutUs/Blogs/blog5";
import Blog6 from "./components/AboutUs/Blogs/blog6";
import Blog7 from "./components/AboutUs/Blogs/blog7";
import Blog8 from "./components/AboutUs/Blogs/blog8";

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
            <Route path="/analyst-hiring" component={JobDesc}/>
            <Route path="/hospital-telecom-audit" component={Blog1}/>
            <Route path="/telecom-contract" component={Blog2}/>
            <Route path="/key-points-telecom-auditing" component={Blog3}/>
            <Route path="/bank-telecom-services" component={Blog4}/>
            <Route path="/savings-refunds-taxes" component={Blog5}/>
            <Route path="/savings-telecom-services" component={Blog6}/>
            <Route path="/termination-wireless-devices" component={Blog7}/>
            <Route path="/voice-to-data" component={Blog8}/>
          </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
    )
  }
}

export default App;

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
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

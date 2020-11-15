import { Component } from 'react';
import './App.css';
import React from "react"
import Nav from './components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AboutUs from './components/AboutUs/aboutus';
import Home from './components/Home';
import blog from "./components/AboutUs/blog"
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
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

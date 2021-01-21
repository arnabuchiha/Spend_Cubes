import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import firebase from "firebase/app";
import "firebase/auth";
import "../../assets/styles/getStarted.css";

class Login extends React.Component{
    loginFunc=(e)=>{
        e.preventDefault();
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            this.setState({
                loggedIn:true
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
    constructor(){
        super();
        this.state={
            loggedIn:false,
            forgotPass:false
        }
    }
    sendForgot=(e)=>{
        e.preventDefault();
        var emailAddress=document.getElementById("email").value;
        firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
            console.log("Check Email")
          }).catch(function(error) {
            // An error happened.
          });
    }
    render(){
        
        return(
            <div className="getting-started">
            {this.state.loggedIn?<div><h1>Welcome</h1></div>:
                <div className="contain container-fluid">
                    <div className="row">
                        <div className="col-md-4"></div>
                        
                        <div className="col-md-4">
                            <form className="container form-box get-started">
                            <div class="Bar" style={{backgroundColor: "#16df7e4d", height: "10px"}}><div class="Progress" style={{backgroundColor: "rgb(42, 223, 175)", width: "0%"}}></div></div>
                            {
                                this.state.forgotPass?
                            <div>
                                <div className="welcome-msg">Forgot Your Password?</div>
                                <h2>Enter your email address</h2>
                                <div class="input-group form-group">
                                <input type="email" id="email" class="input-field" placeholder="Email" />
                                <span class="bar"></span>
                                </div>
                                <div class="form-group">
						            <button type="submit" onClick={this.sendForgot} value="Proceed"  class="btn btn-primary">Proceed</button>
                                    <button type="submit" style={{marginLeft:"10px"}} onClick={()=>{this.setState({forgotPass:false})}} value="Login"  class="btn btn-primary">Go Back</button>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="welcome-msg">WELCOME BACK</div>
                                <h2>Log in to SpendCubes</h2>
                                <div class="input-group form-group">
                                <input type="email" id="email" class="input-field" placeholder="Email" />
                                <span class="bar"></span>
                                </div>
                                
                                <div class="input-group form-group">
                                <input type="password" id="password" class="input-field" placeholder="Password" />
                                <span class="bar"></span>
                                </div>

                                {/* <div class="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
                                </div> */}
                                <br></br>
                                
                                <div class="form-group">
                                    <button type="submit" value="Login" onClick={this.loginFunc} class="btn btn-primary">Login</button>
                                </div>

                                <div className="form-footer">
                                <div class="d-flex justify-content-center links">
                                    Don't have an account?<a href="/signup" style={{color:"#16df7e",paddingLeft:"5px"}}>Sign Up</a>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <a href="#" onClick={()=>{this.setState({
                                        forgotPass:true
                                    })}}>Forgot your password?</a>
                                </div>
                                </div>
                            </div>
                            }
                            </form>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            }
            </div>
        )
    }
}

export default Login;
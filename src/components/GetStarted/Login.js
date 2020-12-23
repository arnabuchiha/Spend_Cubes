import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import "../../assets/styles/getStarted.css";

class Login extends React.Component{
    render(){
        return(
            <div className="getting-started">
                <div className="contain container-fluid">
                    <div className="row">
                        <div className="col-md-4"></div>
                        
                        <div className="col-md-4">
                            <form className="container form-box get-started">
                            <div class="Bar" style={{backgroundColor: "#16df7e4d", height: "10px"}}><div class="Progress" style={{backgroundColor: "rgb(42, 223, 175)", width: "0%"}}></div></div>
                            <div className="welcome-msg">WELCOME BACK</div>
                            <h2>Log in to SpendCubes</h2>
                            <div class="input-group form-group">
                            <input type="email" class="input-field" placeholder="Email" />
                            <span class="bar"></span>
                            </div>
                            
                            <div class="input-group form-group">
                            <input type="password" class="input-field" placeholder="password" />
                            <span class="bar"></span>
                            </div>

                            <div class="row align-items-center remember">
						        <input type="checkbox" />Remember Me
					        </div>

                            
                            <div class="form-group">
						        <button type="submit" value="Login" class="btn btn-primary">Login</button>
                            </div>

                            <div className="form-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<a href="/signup" style={{color:"#16df7e"}}> Sign Up</a>
                            </div>

                            <div class="d-flex justify-content-center">
					            <a href="#">Forgot your password?</a>
				            </div>
                            </div>
                            </form>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
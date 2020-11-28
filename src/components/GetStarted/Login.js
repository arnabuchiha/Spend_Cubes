import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import "../../assets/styles/getStarted.css";

class Login extends React.Component{
    render(){
        return(
            <div>
                <div className="contain container-fluid">
                    <div className="underlined-subheading">
                        <h2 className="subheading">Log In</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form className="container form-box get-started">
                            <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="email" class="form-control" placeholder="Email" />
                            </div>
                            
                            <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" class="form-control" placeholder="password" />
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
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
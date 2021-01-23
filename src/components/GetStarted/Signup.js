import React from "react";

class Signup extends React.Component{
    render(){
        return(
            <div className="getting-started">
                <div className="contain container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <form className="container form-box get-started">
                            <div class="Bar" style={{backgroundColor: "#16df7e4d", height: "10px"}}><div class="Progress" style={{backgroundColor: "rgb(42, 223, 175)", width: "0%"}}></div></div>
                            <div className="welcome-msg">CREATE AN ACCOUNT</div>
                            <h2>Sign up to lower your bills and never wait on hold again.</h2>
                            <div className="form-group">
                                    <input type="text" className="input-field" placeholder="Name"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="Email" className="input-field" placeholder="Email Address"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="input-field" placeholder="Password"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="input-field" placeholder="Confirm Password"/>
                                    <span class="bar"></span>
                                </div> 
                                
                                <div className="form-group">
                                    <input type="tel" className="input-field" placeholder="Phone Number"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="input-field" placeholder="Organization"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="input-field" placeholder="Job Title"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="input-field" placeholder="Company Website"/>
                                    <span class="bar"></span>   
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form><br/><br/>
                        </div>
                        <div className="col-md-5">
                            <h3>Documents Required for Getting Started</h3><br/>
                            <ul className="fa-ul sign-up">
                                <li><i class="fas fa-arrow-circle-right sm"></i>Billing of 2 months or online login for service provider portals for all locations</li>
                                <li><i class="fas fa-arrow-circle-right"></i>Contracts Signed with Service Providers</li>
                                <li><i class="fas fa-arrow-circle-right"></i>Letter of Agency (LOA); We will send out LOA format for review and signature</li>
                                <li><i class="fas fa-arrow-circle-right"></i>Directory of all active locations</li>
                                <li><i class="fas fa-arrow-circle-right"></i>Service Provider Contacts (if available)</li>
                            </ul>
                            <p style={{textAlign:"left"}}><strong>NOTE: </strong>Don’t wait for all the materials, we can get started with as much or as little information available.</p>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
import React from "react";

class Signup extends React.Component{
    render(){
        return(
            <div>
                <div className="contain container-fluid">
                    <div className="underlined-subheading">
                        <h2 className="subheading">Connect With Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <form className="container form-box get-started">
                                <div>
                                    <h3>Sign Up</h3>
                                </div>
                            <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="Email" className="form-control" placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Create Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Organization"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Job Title"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Company Website"/>
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
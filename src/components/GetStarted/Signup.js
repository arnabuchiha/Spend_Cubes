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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
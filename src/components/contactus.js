import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <div>
            <div className="container-fluid">
            <div class="contactus-bg"><h1 class="centered" style={{color: "white", fontSize: "4.2em", fontWeight: "bold"}}>Contact Us</h1></div>
            </div>
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <form className="container form-box form-box-contactus">
                            <h2>Get in Touch</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="Email" className="form-control" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <input type="Tel" className="form-control" placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Organization"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Current Project"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-outline-success">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 contactus pa-auto">
                        <div className="centered">
                            <div><i class="fas fa-phone-alt"></i> <a href="tel: +1-732-384-4428">+1-732-384-4428</a></div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            </div>
        )
    }
}
export default Contact;
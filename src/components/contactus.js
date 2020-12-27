import React from "react";
import "../assets/styles/contactus.css";
class Contact extends React.Component{
    render(){
        return(
            <div className="contactus-main">
            
            <div className="jumbotron">
            <div className="section-title">
            <h2 className="subheading">Contact Us</h2>
            {/* <div class="contactus-bg"><h1 class="centered" style={{color: "white", fontSize: "4.2em", fontWeight: "bold"}}>Contact Us</h1></div> */}
            </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <form className="container form-box form-box-contactus">
                            <h2 className="subheading">Get in Touch</h2>
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
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 d-flex contactus pa-auto">
                        <div className="col-lg-6 m-auto align-self-center">
                            <div className="d-flex contactus-par-ele">
                                <i class="fas fa-map-marker-alt"></i>
                                <div className="d-flex contactus-ele">
                                    <span>Address (US)</span>
                                    <a href="http://maps.google.com/?q=707 48th St. San Diego,CA 92102, USA">707 48th St. San Diego, CA 92102, USA</a>
                                </div>
                            </div>
                            <div className="d-flex contactus-par-ele">
                                <i class="fas fa-map-marker-alt"></i>
                                <div className="d-flex contactus-ele">
                                    <span>Address (India)</span>
                                    <a href="http://maps.google.com/?q=11/437, Lalita Park, Laxmi Nagar,Delhi- 110092">11/437, Lalita Park, Laxmi Nagar, Delhi- 110092</a>
                                </div>
                            </div>
                            <div className="d-flex contactus-par-ele">
                                <i class="fas fa-phone-alt"></i>
                                <div className="d-flex contactus-ele">
                                    <span>Lets Talk</span>
                                    <a href="tel: +1-732-384-4428">+1-732-384-4428</a>
                                </div>
                            </div>
                            <div className="d-flex contactus-par-ele">
                                <i class="far fa-clock"></i>
                                <div className="d-flex contactus-ele">
                                    <span>Hours</span>
                                    <a href="">Mon–Fri: 9am–5pm EST</a>
                                </div>
                            </div>
                            
                            <div className="d-flex contactus-par-ele email-ele">
                                <i class="far fa-envelope"></i>
                                <div className="d-flex contactus-ele">
                                    <span>Email Us</span>
                                    <a href="mailto: business@spendcubes.com">business@spendcubes.com</a>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="d-flex contactus-par-ele">
                                
                                <div class="social-footer-icons">
                                    <ul class="d-inline">
                                    <li><a href="https://www.facebook.com/SpendCubes/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/spendcubes/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
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
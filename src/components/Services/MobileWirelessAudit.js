import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/mwa.css";


class MobileWirelessAudit extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="shadow-title">
                        <h2>Mobile & Wireless Audit</h2>
                    </div>
                </div>

                {/*paragraph*/}
                <div class="container">

                    <div class="row">
                    <div class="col-lg-6">
                        <img src="https://images.pond5.com/businessman-talking-business-phone-holding-footage-088258445_prevstill.jpeg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                        <p style={{textAlign:"left"}}>Dynamic nature of wireless services and personnel and role changes make it a complex service to manage every month. 
                            Spend Cubes wireless audit services provide analytically-driven wireless expense control, complete with a contractually
                             guaranteed ROI.</p>
                             <Link class="btn btn-primary" to="/contact">Get in Touch</Link>
                    </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="contain container-fluid">
                    <div className="underlined-subheading">
                            <h2 className="subheading">We Identify</h2>
                        </div>
                    <ul className="fa-ul ul-margin">
                        <div className="row" >
                            <div className="col-lg-6">
                            <li><i className="fa fa-check-circle"></i>Incorrect and missing discounts</li>
                            <li><i className="fa fa-check-circle"></i>Line Usage analysis (data & voice)</li>
                            <li><i className="fa fa-check-circle"></i>Rate Plans Optimization RPO (Data Pooling or Voice Pooling)</li>
                            <li><i className="fa fa-check-circle"></i>Optimum International Plans for Data</li>
                            <li><i className="fa fa-check-circle"></i>Voice & Messaging- Discounts and contract renegotiations.</li>
                            <li><i className="fa fa-check-circle"></i>Annual credits on telecom spend & MARC</li>
                            <li><i className="fa fa-check-circle"></i>Feature Usage analysis</li>
                            <li><i className="fa fa-check-circle"></i>Unused Lines</li>
                            <li><i className="fa fa-check-circle"></i>Fraudulent purchases or devices</li>
                            </div>
                            <div className="col-lg-6">
                            <li><i className="fa fa-check-circle"></i>3rd party plans or usages like game purchases, music downloaded</li>
                            <li><i className="fa fa-check-circle"></i>Optimum Plans for Paging, MiFi Devices, Laptops, iPad etc.</li>
                            <li><i className="fa fa-check-circle"></i>Equipment purchases monitoring</li>
                            <li><i className="fa fa-check-circle"></i>Grandfathered / Outdated plans</li>
                            <li><i className="fa fa-check-circle"></i>Best rates</li>
                            <li><i className="fa fa-check-circle"></i>SAVINGS 10% – 25%</li>
                            <li><i className="fa fa-check-circle"></i>No Downtime</li>
                            <li><i className="fa fa-check-circle"></i>No Change in Providers</li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }

}

export default MobileWirelessAudit;
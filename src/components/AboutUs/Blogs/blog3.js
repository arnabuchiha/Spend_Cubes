import React from "react";
import Comment from "../Comment";

class blog3 extends React.Component{
    render(){
        return(
            <div className="blog3" style={{textAlign:"left"}}>
                <div className="container pt-5">
                    <h2 className="blogHeading">Key Points to Consider While Selecting a Telecom Auditing Company</h2>
                </div>

                <div className="container pt-5 pb-5">
                    <p>Telecom savings audit is one of the best way to save money and get recoveries for businesses across the 
                        globe. It is important for business managers and functional heads to understand evaluation criteria for
                         selecting a vendor.</p>
                    <ul className="fa-ul">
                    <li><i className="fa fa-check-circle"></i>Ability to produce highest historical refunds and credits.</li>
                    <li><i className="fa fa-check-circle"></i>Ability to recommend future savings on all telecom services</li>
                    <li><i className="fa fa-check-circle"></i>Requirement of your time and efforts in entire engagement.</li>
                    <li><i className="fa fa-check-circle"></i>Accuracy of effective implementation</li>
                    <li><i className="fa fa-check-circle"></i>Pricing and value delivered</li>
                    <li><i className="fa fa-check-circle"></i>Reports</li>
                    <li><i className="fa fa-check-circle"></i>Ongoing Support</li>
                    <li><i className="fa fa-check-circle"></i>Vendor should not be affiliated or biased towards any carrier.</li>
                    <li><i className="fa fa-check-circle"></i>Vendors fulfilling aforesaid criteria can be compared by conducting trial audit on 4-5 telecom bills.</li>
                    </ul>

                    <p>If you have any questions or would like our assistance on telecom audit or telecom expense management</p>
                </div>

                <div className="pb-5">
                    <Comment/>
                </div>
            </div>
        )
    }
}

export default blog3;
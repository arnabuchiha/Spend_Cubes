import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/tra.css";


class TelecomRefundAudit extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div>
                {/*heading with background*/}
                <div className="container-fluid">
                    <div className="shadow-title">
                        <h2>Telecom Refund Audit</h2>
                    </div>
                </div>

                {/*paragraph*/}
                <div class="container">

                    <div class="row">
                    <div class="col-lg-6">
                        <img src="https://ak.picdn.net/shutterstock/videos/1630318/thumb/1.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                        <p style={{textAlign:"left"}}>Looking for a refunds only solution that will recover historical billing errors? 
                        Look no further, our refunds and recovery audit solution is next gen, best in class & risk free.
                        Refund audits are completed in 2 phases:<br/>
                        <strong>Phase 1:</strong> To identify all the quick refund & recovery. This way, initial refunds start appearing within 1-2 billing 
                        cycles of the start of the audit.<br/>
                        <strong>Phase 2:</strong> To carry out detailed analysis of all the bills to identify in-depth billing errors identifying all 
                        billing errors.<br/>
                        Our audit specialists are able to create an USOC (Universal Service Ordering Code) level inventory, deciphering
                         invoices, extracting CSRs (Customer Service Records), compiling line by line, circuit by circuit inventory with
                          detailed addresses for all nodes or points of termination & origin.</p>
                    </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="contain container-fluid">
                    <div className="underlined-subheading">
                        <h2 className="subheading">We Identify Billing errors like</h2>
                    </div><br/>

                        <ul className="fa-ul ul-margin">
                        <div className="row">
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <li><i className="fa fa-check-circle"></i>Non-Compliances Research
                                <ul>
                                    <li><i>Contract Non-Compliance identification</i></li>
                                    <li><i>Regulatory & Tax Non Compliance</i></li>
                                </ul>
                            </li>
                            <li><i className="fa fa-check-circle"></i>Over-Charges Investigation
                                <ul>
                                    <li><i>Pricing Errors</i></li>
                                    <li><i>Discount Errors</i></li>
                                    <li><i>Tariff Violations</i></li>
                                    <li><i>Obsolete Services identification</i></li>
                                    <li><i>Historical Incorrect Orders</i></li>
                                </ul>
                            </li>
                            <li><i className="fa fa-check-circle"></i>Fraudulent Charges
                                <ul>
                                    <li><i>Identification of fraudulent charges on bills like ghost calls, slamming, cramming.</i></li>
                                </ul>
                            </li>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <li><i className="fa fa-check-circle"></i>Closed Location Identification</li>
                            <li><i className="fa fa-check-circle"></i>Un-Claimed Refunds</li>
                            <li><i className="fa fa-check-circle"></i>Tax, Surcharge & Regulatory Refunds</li>
                            <li><i className="fa fa-check-circle"></i>Implementation of Recommendations
                                <ul>
                                    <li><i>Get refunds and recovery from service providers on overbilling</i></li>
                                    <li><i>Check billing ensuring correct implementation of refunds</i></li>
                                </ul>
                            </li>
                            </div>
                            </div>
                        </ul>
                </div>
            </div>
        )
    }

}

export default TelecomRefundAudit;
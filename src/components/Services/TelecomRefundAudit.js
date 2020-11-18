import React from "react";
import "../../assets/styles/tra.css";


class TelecomRefundAudit extends React.Component{
    render(){
        return(
            <div>
                {/*heading with background*/}
                <div className="container-fluid">
                    <div className="bg3 img-fluid">
                        <h3 className="centered serv3-heading">Telecom Refund<br/>Audit</h3>
                    </div>
                </div>

                {/*paragraph*/}
                <div className="jumbotron">
                    <p className="container-fluid">
                    Looking for a refunds only solution that will recover historical billing errors? Look no further,<br/>
                    our refunds and recovery audit solution is next gen, best in class & risk free.<br/><br/>
                    Refund audits are completed in <strong>2 phases:</strong><br/>
                    <strong>Phase 1:</strong> To identify all the quick refund & recovery. This way, initial refunds start appearing within 1-2 billing cycles of the start of the audit.<br/>
                    <strong>Phase 2:</strong> To carry out detailed analysis of all the bills to identify in-depth billing errors identifying all billing errors.<br/><br/>
                    Our audit specialists are able to create an USOC (Universal Service Ordering Code) level inventory,<br/>
                    deciphering invoices, extracting CSRs (Customer Service Records), compiling line by line,<br/>
                    circuit by circuit inventory with detailed addresses for all nodes or points of termination & origin.</p>
                </div>
                <br/><br/><br/>
                <div>
                    <h4 className="jumbotron" style={{color: "white", backgroundColor:"#2b3152", paddingBottom:"10px", paddingTop:"10px"}}>We <strong>Identify</strong> Billing Errors Like</h4>
                    <ul className="container list-tra-desc">
                        <li>Non-Compliances Research
                            <ul>
                                <li><i>Contract Non-Compliance identification</i></li>
                                <li><i>Regulatory & Tax Non Compliance</i></li>
                            </ul>
                        </li>
                        <li>Over-Charges Investigation
                            <ul>
                                <li><i>Pricing Errors</i></li>
                                <li><i>Discount Errors</i></li>
                                <li><i>Tariff Violations</i></li>
                                <li><i>Obsolete Services identification</i></li>
                                <li><i>Historical Incorrect Orders</i></li>
                            </ul>
                        </li>
                        <li>Fraudulent Charges
                            <ul>
                                <li><i>Identification of fraudulent charges on bills like ghost calls, slamming, cramming.</i></li>
                            </ul>
                        </li>
                        <li>Closed Location Identification</li>
                        <li>Un-Claimed Refunds</li>
                        <li>Tax, Surcharge & Regulatory Refunds</li>
                        <li>Implementation of Recommendations
                            <ul>
                                <li><i>Get refunds and recovery from service providers on overbilling</i></li>
                                <li><i>Check billing ensuring correct implementation of refunds</i></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default TelecomRefundAudit;
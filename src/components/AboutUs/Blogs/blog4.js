import React from "react";
import Bank from "../../../assets/images/bank-blog4.png"
class blog4 extends React.Component{
    render(){
        return(
            <div className="blog4" style={{textAlign:"left"}}>

                <div className="container pt-5">
                    <h2 className="blogHeading">Case Study: Top 50 Bank in North America saved 500K on Telecommunication Invoices</h2>
                    <span className="authorDetails">by Kunal Bhatia | Dec 12, 2019 | Case Study</span><br/><br/>
                    <img src={Bank} className="img-fluid" alt="/" />
                </div>

                <div className="container pt-5">
                    <h5 className="blogSubHeading">The Client</h5>
                    <p>The bank focuses on lending to technology companies, providing multiple services to venture capital,
                         revenue-based financing and private equity firms that invest in technology and biotechnology, and also
                          on private banking services for high-net-worth individuals, In addition to taking deposits and making
                           loans, the bank operates venture capital and private equity divisions that sometimes invest in the 
                           firm’s commercial banking clients.</p>
                        <p>The bank operates from 29 offices in the United States. Bank manages over 51 billion in assets and 4
                             billion in equity.</p>
                </div>

                <div className="container pt-3">
                    <h5 className="blogSubHeading">The Challenge</h5>
                    <p>Telecommunications services included large data pipes, sonnet rings, MPLS, Voice over IP, etc. Telecom 
                        invoices were riddled with errors and no available service inventory. This resulted in duplicate services,
                         overcharges and redundant lines or services billing on telecommunication invoices. The network was 
                         intricate and our analysts had to ensure there was no outage due to service changes/cancellations.</p>
                </div>

                <div className="container pt-3">
                    <h5 className="blogSubHeading">The Solution</h5>
                    <p>We analyzed telecommunication billing, created a detailed telecommunication inventory. Verified every site,
                         usage and understood the functionality of each service. Ensuring only redundant and services were 
                         identified for cancellation. Our analysis also identified</p>

                    <ul className="fa-ul">
                        <li><i className="fa fa-check-circle"></i>Contract Non-Compliance</li>
                        <li><i className="fa fa-check-circle"></i>Regulatory and taxes billing was corrected</li>
                        <li><i className="fa fa-check-circle"></i>Pricing Errors, Discount Errors, Tariff Violations, Obsolete, Services identification, Historical Incorrect Orders</li>
                        <li><i className="fa fa-check-circle"></i>Long Distance Errors: Stuck Calls, TFN Calls, Blocked calls corrected</li>
                        <li><i className="fa fa-check-circle"></i>Closed locations and other unclaimed refunds disputed</li>
                        <li><i className="fa fa-check-circle"></i>Line by line site Evaluation</li>
                        <li><i className="fa fa-check-circle"></i>Unused Service analysis</li>
                        <li><i className="fa fa-check-circle"></i>Third-Party Charge Evaluation</li>
                    </ul>
                </div>

                <div className="container pt-3 pb-5">
                    <h5 className="blogSubHeading">The Results</h5>
                    <ul className="fa-ul">
                        <li><i className="fa fa-check-circle"></i>Completed Forward Savings are approx. $319,867</li>
                        <li><i className="fa fa-check-circle"></i>Completed Refunds is $126,957 across all services</li>
                        <li><i className="fa fa-check-circle"></i>Combined annual savings $446,825</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default blog4;
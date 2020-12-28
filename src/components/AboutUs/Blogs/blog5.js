import React from "react";
import Location from "../../../assets/images/location-blog5.png"
import Blog5 from "../../../assets/images/blog5.png"

class blog5 extends React.Component{
    render(){
        return(
            <div className="blog5" style={{textAlign:"left"}}>

                <div className="container pt-5">
                    <h2 className="blogHeading">Case Study: How We Got $2.85 M in Savings and Refunds in Taxes for Largest Insurance Company in the US</h2>
                    <span className="authorDetails">by Adarsh Maheshwari | Dec 12, 2019 | Case Study | 0 comments</span><br/><br/>
                    <img src={Blog5} className="img-fluid" alt="/" />
                </div>
                
                <div className="container pt-5">
                    <h5 className="blogSubHeading">The Client</h5>
                    <p>Group of large U.S. insurance and financial services companies based in OH. The company also operates 
                        regional headquarters in IA, TX, FL, NC & CA.  The company currently has approximately 34,000 employees,
                        and is ranked in top 100 in the 2019 Fortune 500 list. The company is also ranked in “100 Best companies
                        to work for”</p>
                        <p>The company started over 10 decades ago as a automobile insurance company, now manages over $200 Billion\
                            in assets and over $40 billion in revenues.</p>
                </div>

                <div className="container pt-3">
                    <h5 className="blogSubHeading">The Challenge</h5>
                    <p>Customer was paying over $1.9 million in annual telecommunication taxes on all telecommunication service 
                        providers. Customer had qualified for and was exempted on various state and local telecommunication taxes.
                         Additionally, addresses to exempted locations were spread across 3500 invoices and various complexities
                          line IP Sec, AVPN, MPLS, Sonnet Ring, PRI, BRI, Centrex and some legacy technologies.</p>
                </div>
                <div className="container pt-3">
                    <img src={Location} className="img-fluid" alt="/"/>
                </div>

                <div className="container pt-3">
                    <h5 className="blogSubHeading">The Solution</h5>
                    <p>Despite exemption certificate filing work completed by one of the largest audit company in the world. 
                        Our analysts quickly determined the exemptions were misapplied and all exempted address were billing 
                        state and local taxes in some way. In addition we identified misapplied surcharges on services in an 
                        error by service provider’s billing system. Our specialists compiled the errors and presented the 
                        findings to customer, they were promptly approved:</p>

                    <ul className="fa-ul">
                        <li><i className="fa fa-check-circle"></i>Orders to correct billing addresses were placed with service provider.</li>
                        <li><i className="fa fa-check-circle"></i>Tax correction requests placed with tax departments of Verizon, AT&T & XO</li>
                        <li><i className="fa fa-check-circle"></i>After tax corrections were completed credit, requests for upto 48 months were placed with all service providers</li>
                        <li><i className="fa fa-check-circle"></i>Refunds not issued by service providers, were requested from State Tax departments.</li>
                    </ul>
                </div>

                <div className="container pt-3 pb-5">
                    <h5 className="blogSubHeading">The Results</h5>
                    <ul className="fa-ul">
                        <li><i className="fa fa-check-circle"></i>Completed Forward Savings are approx. $0.55 million</li>
                        <li><i className="fa fa-check-circle"></i>Completed Refunds is $2.30 million across all services</li>
                        <li><i className="fa fa-check-circle"></i>Combined annual savings $2.85 million</li>
                    </ul>
                </div>
            </div>
        )
    }
}

 export default blog5;
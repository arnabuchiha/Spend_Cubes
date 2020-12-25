import React from "react";

class blog6 extends React.Component{
    render(){
        return(
            <div className="blog6" style={{textAlign:"left"}}>
                <div className="container">
                    <h2 className="blogHeading">Case Study: How Big Box Retailer Secured $1.3 M in Savings on Telecommunication Taxes</h2>
                </div>

                <div className="container pt-5">
                    <h5 className="blogSubHeading">The Client</h5>
                    <p>Our customer is a top retailer and fortune 500 company in North America. Over a 100 year old retailer and revenues exceeding $13 Billion. The company is the nation’s largest provider of home services, with more than 14 million service and installation calls made annually.</p>
                </div>

                <div className="container pt-3">
                    <h5 className="blogSubHeading">The Challenge</h5>
                    <p>We were tasked with reviewing telecommunication taxes & surcharges billing by all service providers on all telecommunication services. The services were spread across over 3000 telecom bills and several thousand locations across North America.</p>
                </div>

                <div className="container pt-3">
                    <h5 className="blogSubHeading">The Solution</h5>
                    <p>Our tax specialists consolidated all telecommunication taxes and related service descriptions and service addresses to tax billed. We investigated federal, state, local taxes and surcharges including 911, Federal universal service fee (FUSF) and other surcharges. We identified tax overbillings and requested the errors be fixed and requested refunds.</p>
                </div>

                <div className="container pt-3 pb-5">
                    <h5 className="blogSubHeading">The Results</h5>
                    <ul className="fa-ul">
                        <li><i className="fa fa-check-circle"></i>$967,148 Refunds Applied</li>
                        <li><i className="fa fa-check-circle"></i>$348,000 Annual Forward Savings</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default blog6;
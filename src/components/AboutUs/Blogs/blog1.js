import React from "react";
import Comment from "../Comment";

class blog1 extends React.Component{
    render(){
        return(
            <div className="blog1" style={{textAlign:"left"}}>
                <div className="container pt-5">
                    <h2 className="blogHeading">Every Hospital should consider a Telecom Audit!</h2>
                    <span className="authorDetails">by Adarsh Maheshwari | Jul 18, 2020 | Telecom Expense Management | 0 Comments</span>
                </div>

                <div className="container pt-5" >
                    <p>Frost & Sullivan’s recent prediction in Post-Pandemic Global Healthcare Market Outlook, 2020 will be an
                         unforgiving but transformational year for the healthcare industry. As the world grapples with a global
                          emergency caused by the COVID-19 pandemic, the healthcare industry is expected to witness a drop in 
                          growth from 5.3% to 0.6% in 2020, with revenues remaining below the $2 trillion mark.</p>
                    <p>Elective procedures being on hold and delayed or prolonged procurement of capital equipment will have a
                         negative impact on revenue, from $413.9 billion to $377.1 billion for medical devices and from $31.5 
                         billion to $18.1 billion for imaging equipment.</p>
                    <p>While pharma companies may have little or no impact on revenues, hospitals, urgent care facilities, 
                        medical equipment manufacturers, imaging equipment manufacturers will bear the bulk of revenue drop.</p>
                    <p>During these times, it is essential to control all leakages. Every dollar saved can help in keeping 
                        necessary jobs, innovate to keep ahead of the competition.</p>
                </div>

                <div className=" container  pt-3">
                    <h6 className="subBlogHeading">Consider this time as an opportunity</h6>
                </div>

                <div className="container pt-3">
                    <p>Every Hospital pays approx. 8%-12% on telecommunication billing in error or avoidable costs. Conducting
                         telecom audit and optimization activity on your telecommunication invoices can reduce telecommunication
                          expenses and capture historical refunds.</p>
                    <p>We, at Spend Cubes, are able to deliver 15%-25% of combined annualized savings on your telecom billing.
                        Our specialists prepare a site-by-site analysis, create detailed inventory, identify obsolete services
                        and overbilled services.</p>
                    <p>Essentially, our audit specialists are able to clean up your telecom bills of any errors, benchmark costs,
                         optimize plans and bring in savings to your organization.</p>
                </div>
                <div className=" container pt-3">
                    <h6 className="subBlogHeading">Return on Investment</h6>
                </div>

                <div className="container pt-3 pb-5">
                    <p>Spend Cubes provides our services on a contingency model which is truly risk-free. Our service requires
                        an investment of few hours in setting us up with the following:</p>

                    <ul className="fa-ul">
                        <li><i className="fa fa-check-circle"></i>Telecom Invoices</li>
                        <li><i className="fa fa-check-circle"></i>Contracts</li>
                        <li><i className="fa fa-check-circle"></i>A letter of Agency</li>
                    </ul>

                    <p>By spending less than 5 hours in getting us the start-up data, we are able to bring in thousands to 
                        hundreds thousands of $$ in realized savings and refunds.</p>
                    <p>ROI <strong>Extremely High</strong></p>
                    <p>Risk <strong>Low</strong></p>
                    <p>Upfront Investment <strong>NONE</strong></p>
                    <p>To know more on how to get started, write to us at <a href="#">business@spendcubes.com</a> or click the link below.</p>
                    <p>We provide no-cost- assessment of your telecom billing!</p>
                </div>
                <div className="pb-5">
                    <Comment/>
                </div>
            </div> 
        )
    }
}

export default blog1;
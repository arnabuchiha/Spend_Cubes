import React from "react";
import Comment from "../Comment";

class blog2 extends React.Component{
    render(){
        return(
        <div className="blog2" style={{textAlign:"left"}}>
            <div className="container pt-5">
                <h2 className="blogHeading">Be very alarmed when you see this on your telecom contract!</h2>
                <span className="authorDetails">by Adarsh Maheshwari | Feb 29, 2020 | Telecom Expense Management | 0 Comments</span>
            </div>

            <div className="container pt-5 pb-5">
                <p>Contracts are boring to read & often have terms that are purposely misleading, from iTunes contracts, 
                    google terms to telecommunication services.<br/>The purpose of the contract is to establish the agreement
                     that the parties have made and to fix their rights and duties in accordance with that agreement. While
                      drafting purpose of telecommunication contract is no different than of any other service or product, 
                      inherent complications and multitude of telecom technologies make it impossible to develop a subject 
                      matter expertise of your legal teams to fully understand the implications of this.</p>
                <p>Do you think that sounds absurd? Let’s do an experiment, ask your legal team this question:<br/>
                What is the implication if “All Transport Services Ordered will be treated as interstate for regulatory
                 Purposes” on your telecom invoices?<br/>If the answer is not 21.2% over-billing, then I stand vindicated.</p>
                 <p><strong>IMPLICATION:</strong><br/>If over 90% of telecom utilization is intrastate, then you should never 
                 have been billed Federal Universal Service Fee (FUSF) and associated surcharges that include property tax, 
                 administrative fee etc.</p>
                 <p>We at Spend Cubes understand how your telecommunication contracts need that extra attention. Our tax 
                     specialists understand telecom tax laws, telecom contracts & network architecture.</p>
                <p>To know more on how to save this 21.2% of Federal Universal Service Fee and associated surcharges, 
                    write to me at <a href="#">business@spendcubes.com</a></p>
                <p>We provide no-cost- assessment of your telecom billing!</p>
            </div>

            <div className="pb-5">
                <Comment/>
            </div>
        </div>
        )
    }
}

export default blog2;
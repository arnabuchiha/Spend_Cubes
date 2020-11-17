import React from "react";
import "../../assets/styles/tra.css";


class TelecomRefundAudit extends React.Component{
    render(){
        return(
            <div>
                {/*heading with background*/}
                <div className="container-fluid">
                    <div className="bg img-fluid">
                        <h3 className="centered">Telecom Refund<br/>Audit</h3>
                    </div>
                </div>

                {/*paragraph*/}
                <div className="jumbotron">
                    <p className="container-fluid">
                    Looking for a refunds only solution that will recover historical billing errors? Look no further, our refunds and recovery audit solution is next gen, best in class & risk free.
                    Refund audits are completed in 2 phases:
                    Phase 1: To identify all the quick refund & recovery. This way, initial refunds start appearing within 1-2 billing cycles of the start of the audit.
                    Phase 2: To carry out detailed analysis of all the bills to identify in-depth billing errors identifying all billing errors.
                    Our audit specialists are able to create an USOC (Universal Service Ordering Code) level inventory, deciphering invoices, extracting CSRs (Customer Service Records),
                     compiling line by line, circuit by circuit inventory with detailed addresses for all nodes or points of termination & origin.</p>
                </div>
                <br/><br/><br/>
                <div>
                    <h4 className="jumbotron" style={{color: "white", backgroundColor:"#2b3152", paddingBottom:"10px", paddingTop:"10px"}}>We <strong>Identify</strong> Billing Errors Like</h4>
                    
                </div>
            </div>
        )
    }

}

export default TelecomRefundAudit;
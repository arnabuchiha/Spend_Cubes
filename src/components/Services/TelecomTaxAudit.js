import React from "react";
import "../../assets/styles/tta.css";


class TelecomTaxAudit extends React.Component{
    render(){
        return(
            <div>
                {/*heading with background*/}
                <div className="container-fluid">
                    <div className="bg4 img-fluid">
                        <h3 className="centered serv4-heading">Telecom Tax<br/>Audit</h3>
                        <span style={{color:"#FF4500"}}><strong>Telecommunication is the most heavily taxed service!</strong></span>
                    </div>
                </div>

                {/*paragraph*/}
                <div className="jumbotron">
                    <p className="container-fluid">
                    Telecommunication taxes account for average of 17.05% on wireless services and over 25% on wire-line services.<br/>
                    Taxes usually comprise of Federal, State, Local (city, county and municipality) & surcharges like Federal<br/>
                    Universal Service Fee (FUSF), Property Tax Allotment (PTA), administrative expense fee, Federal regulatory fee etc.<br/><br/>
                    These taxes differ by state, city or telecom service you are using. Thus, creating thousands of combinations <br/>
                    of taxes and surcharges.<br/><br/>
                    To top that, most service providers leave it to their customers to decide on tax jurisdictions, like<br/>
                    interstate or intrastate billing, the highest taxes in the bracket.<br/><br/>
                    Our tax specialists are equipped and updated with the latest tax databases to identify tax saving<br/>
                    and refund opportunities for your company.</p>
                </div>
                <br/><br/><br/>
                <div>
                    <h4 className="jumbotron" style={{color: "white", backgroundColor:"#2b3152", paddingBottom:"10px", paddingTop:"10px"}}><strong>We Identify</strong></h4>
                    
                </div>
            </div>
        )
    }

}

export default TelecomTaxAudit;
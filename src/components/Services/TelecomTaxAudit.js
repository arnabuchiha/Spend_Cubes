import React from "react";
import "../../assets/styles/tta.css";
import organization from "../../assets/images/tta-image.png"


class TelecomTaxAudit extends React.Component{
    render(){
        return(
            <div>
               <div className="container-fluid">
                    <div className="shadow-title">
                        <h2>Telecom Tax Audit</h2>
                    </div>
                </div>

                {/*paragraph*/}
               <div class="container">
                    <div class="row">
                    <div class="col-lg-6">
                        <img src="https://ak.picdn.net/shutterstock/videos/1630318/thumb/1.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                        <p style={{textAlign:"left"}}>Telecommunication taxes account for average of 17.05% on wireless services
                         and over 25% on wire-line services.<br/>
                        Taxes usually comprise of Federal, State, Local (city, county and municipality) & surcharges like Federal
                         Universal Service Fee (FUSF), Property Tax Allotment (PTA), administrative expense fee, Federal regulatory
                        fee etc.
                        These taxes differ by state, city or telecom service you are using. Thus, creating thousands of combinations
                         of taxes and surcharges.<br/>
                        To top that, most service providers leave it to their customers to decide on tax jurisdictions, like 
                        interstate or intrastate billing, the highest taxes in the bracket. 
                        Our tax specialists are equipped and updated with the latest tax databases to identify tax saving and 
                        refund opportunities for your company.
                        </p>
                    </div>
                    </div>
                </div><br/><br/>
                <div className="contain container-fluid">
                    <div className="underlined-subheading">
                        <h2 className="subheading">List of Taxes and Industries</h2>
                    </div><br/>
                    <div className="container">                    
                        <div className="row">
                            <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <div className="icon-box">
                                <h4 style={{textAlign:"left"}}>Federal, State & Local Taxes</h4>
                                <p  style={{textAlign:"left"}}>Call Centers, Data Centers, Non-Profit organizations, Federal, 
                                State and Local Government Bodies, Schools, Hospitals, Credit Unions, other exempted organizations</p>
                            </div>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <div className="icon-box">
                                <h4 style={{textAlign:"left"}}>FUSF Tax Research</h4>
                                <p  style={{textAlign:"left"}}>Telecom Service Resellers, VOIP providers, Companies with majority 
                                intrastate offices.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contain container-fluid">
                    <div className="underlined-subheading">
                        <h2 className="subheading">Who should use Telecom Tax Audit</h2>
                    </div><br/><br/>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6">  
                            <img src={organization} class="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <ul className="fa-ul">
                            <li><i className="fa fa-check-circle"></i>Local, State Government</li>
                            <li><i className="fa fa-check-circle"></i>Federal Credit Unions</li>
                            <li><i className="fa fa-check-circle"></i>Non-Profit Organizations</li>
                            <li><i className="fa fa-check-circle"></i>Telecom spend over $500,000 annually</li>
                            <li><i className="fa fa-check-circle"></i>Call Centers</li>
                            <li><i className="fa fa-check-circle"></i>Companies in opportunity/enterprise zones</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TelecomTaxAudit;
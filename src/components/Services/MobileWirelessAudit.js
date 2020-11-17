import React from "react";
import "../../assets/styles/mwa.css";


class MobileWirelessAudit extends React.Component{
    render(){
        return(
            <div>
                {/*heading with background*/}
                <div className="container-fluid">
                    <div className="bg2 img-fluid">
                        <h3 className="centered" style={{fontSize:"50px"}}>Mobile & Wireless<br/>Audit</h3>
                        <span style={{color:"#FF4500"}}><strong>Wireless category is the fastest growing spend category in IT services portfolio</strong></span>
                    </div>
                </div>

                {/*paragraph*/}
                <div className="jumbotron">
                    <p className="container-fluid">
                    Dynamic nature of wireless services and personnel and role changes make <br/>
                    it a complex service to manage every month.<br/>
                    Spend Cubes wireless audit services provide analytically-driven wireless<br/>
                    expense control, complete with a contractually guaranteed ROI.<br/>
                    Challenges:Frequent rate plan changes are further increasing inefficiencies in telecom billing. 
                    Customers are being pushed to change to the latest plans without conducting a 6-month usage analysis is causing leakages ranging 10% – 25%. 
                    We Deliver Savings & Maintain! A trained team of analysts using a combination of machine analytics and manual research complete a periodical rate plan analysis.</p>
                </div>
                <br/><br/><br/>
                <div>
                    <h4 className="jumbotron" style={{color: "white", backgroundColor:"#2b3152", paddingBottom:"10px", paddingTop:"10px"}}><strong>We Identify</strong></h4>
                    
                </div>
            </div>
        )
    }

}

export default MobileWirelessAudit;
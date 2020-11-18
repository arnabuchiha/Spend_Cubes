import React from "react";
import "../../assets/styles/mwa.css";


class MobileWirelessAudit extends React.Component{
    render(){
        return(
            <div>
                {/*heading with background*/}
                <div className="container-fluid">
                    <div className="bg2 img-fluid">
                        <h3 className="centered serv2-heading" >Mobile & Wireless<br/>Audit</h3>
                        <span style={{color:"#FF4500"}}><strong>Wireless category is the fastest growing spend category in IT services portfolio</strong></span>
                    </div>
                </div>

                {/*paragraph*/}
                <div className="jumbotron">
                    <p className="container-fluid">
                    Dynamic nature of wireless services and personnel and role changes make <br/>
                    it a complex service to manage every month.<br/>
                    Spend Cubes wireless audit services provide analytically-driven wireless<br/>
                    expense control, complete with a contractually guaranteed ROI.<br/><br/>
                    <strong style={{color:"#EF692b"}}>Challenges:</strong><br/>
                    <div>Frequent rate plan changes are further increasing inefficiencies in telecom billing.<br/>
                    Customers are being pushed to change to the latest plans without conducting a 6-month usage analysis is causing leakages ranging 10% – 25%.<br/>
                    We Deliver Savings & Maintain! A trained team of analysts using a combination of machine analytics and manual research complete a periodical rate plan analysis.</div></p>
                </div>
                <br/><br/><br/>
                <div>
                    <h3 className="jumbotron" style={{color: "white", backgroundColor:"#2b3152", paddingBottom:"10px", paddingTop:"10px"}}><strong>We Identify</strong></h3>
                    <ul className="container list-mwa-desc">
                        <li>Incorrect discounts</li>
                        <li>Line Usage analysis (data & voice)</li>
                        <li>Rate Plans Optimization RPO (Data Pooling or Voice Pooling)</li>
                        <li>Optimum International Plans for Data</li>
                        <li>Voice & Messaging- Discounts and contract renegotiations.</li>
                        <li>Annual credits on telecom spend & MARC</li>
                        <li>Feature Usage analysis</li>
                        <li>Unused Lines</li>
                        <li>Fraudulent purchases or devices</li>
                        <li>3rd party plans or usages like game purchases, music downloaded</li>
                        <li>Optimum Plans for Paging, MiFi Devices, Laptops, iPad etc.</li>
                        <li>Equipment purchases monitoring</li>
                        <li>Updated plans</li>
                        <li>Best rates</li>
                        <li>SAVINGS 10% – 25%</li>
                        <li>No Downtime</li>
                        <li>No Change in Providers</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default MobileWirelessAudit;
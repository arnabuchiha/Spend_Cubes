import React from "react"
import "../../assets/styles/aboutus.css"
import Aboutusbg from "../../assets/icons/aboutus_bg.jpg"

class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <div className="container-fluid" >
                        <div className="aboutus-H">
                        {/* <img className="img-fluid" src={Aboutusbg}></img> */}
                            <h1 className="centered" style={{color:"white",fontSize:"80px",fontWeight:"bold"}}>About Us</h1>
                            
                            {/* <p>Spend Cubes is a leading Telecom Auditing, Telecom Expense Management (TEM) & Mobile Expense Management Company. We specialize in saving money for small, medium and large companies in North American markets.</p> */}
                        </div>
                    </div>
                    <div className="container-fluid">
                        <h1 className="subheading">Who We Are</h1>
                        <p style={{fontSize:"21px"}}>
                        Spend Cubes is a leading Telecom Auditing, Telecom Expense Management (TEM) & Mobile Expense Management Company. We specialize in saving money for small, medium and large companies in North American markets.
                        </p>
                    </div>
                    <div className="container-fluid">
                        <h1 className="subheading">About Our Company</h1>
                        <p style={{fontSize:"21px"}}>
                        We started this Spend Cubes in 2017 with the sole objective of providing our customers with no frills cost reductions in there telecom invoices that is truly risk free.<br></br><br></br>

As a leading Telecom Expense Management company, Spend Cubes believes in a “Partnership Approach” with its clients who are some of the world’s best brands. Through our global delivery network and  comprehensive outsourcing service offerings, we deliver business value to our clients by combining operational excellence.<br></br><br></br>

We bring our deep domain - industry and functional knowledge combined with in-house tools to ensure Quality & timely delivery of our solutions.
                        </p>
                    </div>
                    <div className="container-fluid" >
                        <div className="our-team">
                        {/* <img className="img-fluid" src={Aboutusbg}></img> */}
                            <h1 className="centered" style={{color:"white",fontSize:"80px",fontWeight:"bold"}}>Our Team</h1>
                            {/* <p>The work is as important as the pleasure we get from doing it. Such an authentic corporate culture isn’t imposed, and can’t just be invented. It appears spontaneously when people who love creating, learning and growing get together, forming a team with ties that transcend the workplace.</p> */}
                            
                            {/* <p>Spend Cubes is a leading Telecom Auditing, Telecom Expense Management (TEM) & Mobile Expense Management Company. We specialize in saving money for small, medium and large companies in North American markets.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutUs;
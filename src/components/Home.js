import React from "react";
import Book from "../assets/images/books.svg";
import Recommendation from "../assets/images/recommendation.svg";
import Recovery from "../assets/images/recovery.svg";
import Savings from "../assets/images/savings.svg";
import RiskFree from "../assets/images/riskFree.svg"
import Telephone from "../assets/images/telephone.svg";
import Mobile from "../assets/images/mobile.svg";
import Wireless from "../assets/images/router.svg";
import Document from "../assets/images/document.svg";
import "../assets/styles/home.css"
class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="connect-H">
                        <div className="centered home-bg-content">
                        <h2>Connect with Spend Cubes</h2>
                        <p><i>Our analysts will provide a complimentary assessment of savings and refund estimation of your telecommunication services</i></p>
                        <button type="button" className="btn btn-light">Estimate Savings</button>
                        </div>
                    </div>
                </div>
                <div className="jumbotron">
                    <h1 className="subheading"><strong>R</strong>educe & <strong>R</strong>ecover <br/>Lost <strong>R</strong>evenue </h1>
                    <p>Spend Cubes is fresh, agile and focused, with customer-centric approach. 
                        <br/> Professionals at Spend Cubes bring together decades of experience and expertise
                        <br/>in telecom lifecycle management, refunds and recovery.</p>
                    <button type="button" class="btn btn-primary">More About us</button>
                </div>
                <div><br/><br/>
                    {/*services*/}
                    <h2 className="jumbotron" style={{color: "white", backgroundColor:"#2b3152", paddingBottom:"10px", paddingTop:"10px"}}><strong>Services</strong></h2><br/>
                    <div className="container" style={{backgroundColor:"AliceBlue", padding:"40px", borderRadius:"5px"}} >
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={Telephone} style={{height:"100px", width:"100px"}}/><br/><br/>
                                <div className="et_pb_blurb_container">
                                    <h4 className="et_pb_module_header" style={{color:"DarkSlateGray"}}>
                                        <span>TELECOM AUDIT &<br/>OPTIMIZATION</span>
                                    </h4>
                                </div>
                            </div>
                            {/*end of col1*/}
                            <div className="col-sm-3">
                                <img src={Wireless} style={{height:"100px", width:"100px"}}/><br/><br/>
                                <div className="et_pb_blurb_container">
                                    <h4 className="et_pb_module_header" style={{color:"DarkSlateGray"}}>
                                        <span>MOBILE / WIRELESS <br/>AUDITS</span>
                                    </h4>
                                </div>
                            </div>
                            {/*end of col2*/}
                            <div className="col-sm-3">
                                <img src={Mobile} style={{height:"100px", width:"100px"}}/><br/><br/>
                                <div className="et_pb_blurb_container">
                                    <h4 className="et_pb_module_header" style={{color:"DarkSlateGray"}}>
                                        <span>TELECOM REFUND <br/>AUDITS</span>
                                    </h4>
                                </div>
                            </div>
                            {/*end of col3*/}
                            <div className="col-sm-3">
                                <img src={Document} style={{height:"100px", width:"100px"}}/><br/><br/>
                                <div className="et_pb_blurb_container">
                                    <h4 className="et_pb_module_header" style={{color:"DarkSlateGray"}}>
                                        <span>TELECOM TAX <br/>AUDITS</span>
                                    </h4>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <p className="container" style={{width:"70%", color: "white", backgroundColor:"#2b3152", borderRadius:"5px", padding:"10px"}}>
                    We specialize in conducting telecommunication refunds & recovery audits. 
                    <br/>Our telecom audit & optimization services will bring a significant <br/>
                    amount of savings & refunds.
                    </p>
                </div>
                <br/><br/><br/>
                
                {/*Carousel*/}
                <div style={{backgroundColor:"WhiteSmoke"}}>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                    <span className="et_pb_image_wrap">
                                        <img src={Book} style={{width:"60px", height:"60px"}}/>
                                    </span>
                                </div>
                                <div className="et_pb_blurb_container svg-container">
                                    <h4 className="et_pb_module_header">
                                        <span>Exhaustive knowledge base's</span>
                                    </h4>
                                    <div className="et_pb_blurb_description">
                                    Years of research on recurring costs,<br/> plans, services and taxes.<br/> Helps maximize savings
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end of col1*/}

                        <div className="col-sm-4">
                            <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                    <span className="et_pb_image_wrap">
                                        <img src={Recommendation} style={{width:"60px", height:"60px"}}/>
                                    </span>
                                </div>
                                <div className="et_pb_blurb_container svg-container">
                                    <h4 className="et_pb_module_header">
                                        <span>Non-biased Recommendations</span>
                                    </h4>
                                    <div className="et_pb_blurb_description">
                                    We do not have any alliance or get any<br/> commission from service providers <br/>ensuring non-biased recommendations
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end of col2*/}

                        <div className="col-sm-4">
                            <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                    <span className="et_pb_image_wrap">
                                        <img src={Recovery} style={{width:"60px", height:"60px"}}/>
                                    </span>
                                </div>
                                <div className="et_pb_blurb_container svg-container">
                                    <h4 className="et_pb_module_header">
                                        <span>Obtain Maximum Recovery</span>
                                    </h4>
                                    <div className="et_pb_blurb_description">
                                    Our highly skilled dispute resolution team <br/>identifies and processes billing errors and <br/>disputes to obtain the maximum recovery
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/*end of col3*/}
                    <div style={{backgroundColor:"WhiteSmoke"}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                    <span className="et_pb_image_wrap">
                                        <img src={Savings} style={{width:"60px", height:"60px"}}/>
                                    </span>
                                </div>
                                <div className="et_pb_blurb_container svg-container">
                                    <h4 className="et_pb_module_header">
                                        <span>Speed to Savings</span>
                                    </h4>
                                    <div className="et_pb_blurb_description">
                                    First results of refunds and savings start<br/> within the 1’st billing cycle
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end of col4*/}
                        <div className="col-sm-6">
                            <div className="et_pb_blurb_content">
                                <div className="et_pb_main_blurb_image">
                                    <span className="et_pb_image_wrap">
                                        <img src={RiskFree} style={{width:"60px", height:"60px"}}/>
                                    </span>
                                </div>
                                <div className="et_pb_blurb_container svg-container">
                                    <h4 className="et_pb_module_header">
                                        <span>Risk Free & Efficiency to Value</span>
                                    </h4>
                                    <div className="et_pb_blurb_description">
                                    Gain Share model we get paid only once we<br/> recover the money from the service providers<br/> 10-25% average savings for our customers
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                <br/><br/>
                {/*end of col5*/}

                {/*card1*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card" style={{width: "20rem", backgroundColor:"#008d6c"}}>
                                <div className="card-body">
                                    <h3 className="card-title">150 Mn+</h3>
                                    <h5 className="card-subtitle" style={{color:"white"}}>Total Spend Addressed</h5>
                                </div>
                            </div>
                        </div>
                        {/*card2*/}
                        <div className="col-sm-4">
                            <div className="card" style={{width: "20rem" , backgroundColor:"#2b3152"}}>
                                <div className="card-body">
                                    <h3 className="card-title" style={{color:"#008d6c"}}>1200+</h3>
                                    <h5 className="card-subtitle" style={{color:"white"}}>Contracts Reviewed</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                 {/*card3*/}
                 <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card" style={{width: "20rem" , backgroundColor:"#2b3152"}}>
                                <div className="card-body">
                                    <h3 className="card-title" style={{color:"#008d6c"}}>60000+</h3>
                                    <h5 className="card-subtitle" style={{color:"white"}}>Telecoms Bills Reviewed</h5>
                                </div>
                            </div>
                        </div>
                        {/*card4*/}
                        <div className="col-sm-4">
                            <div className="card" style={{width: "20rem", backgroundColor:"#008d6c"}}>
                                <div className="card-body">
                                    <h3 className="card-title">40+</h3>
                                    <h5 className="card-subtitle" style={{color: "white"}}>Customers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>

                {/*get a free consultation*/}
                <div className="jumbotron">
                    <div className="row">
                    <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <h2 className="home-form-head">Get a Free Consultation</h2>
                                <p className="container home-form-content">As a leading Telecom Expense Management company, Spend Cubes believes in a “Partnership Approach” with its clients who are some of the world’s best brands. Through our global delivery network and a comprehensive outsourcing service offerings, we deliver business value to our clients by combining operational excellence and deep domain – industry and functional – knowledge.
                                    <br/>We bring our deep industry knowledge combined with in-house tools to ensure Quality & timely delivery of our solutions.
                                </p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <form className="container form-box">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="Email" className="form-control" placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Organization"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Current Project"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-outline-success">Submit</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
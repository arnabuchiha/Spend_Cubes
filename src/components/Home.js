import React from "react";
import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-3.jpg";
import "../assets/styles/home.css"
import home_rrr from '../assets/images/home-rrr.jpg';
import $ from 'jquery';
import { NavLink } from "react-router-dom";
class Home extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div>
                {/* <div className="container-fluid">
                    <div className="connect-H">
                        <div className="centered home-bg-content">
                        <h2>Connect with Spend Cubes</h2>
                        <p><i>Our analysts will provide a complimentary assessment of savings and refund estimation of your telecommunication services</i></p>
                        <button type="button" className="btn btn-light">Estimate Savings</button>
                        </div>
                    </div>
                </div> */}
                <div className="container-fluid home-slider">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="5000">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={slide1} alt="First slide"/>
                        <div className="carousel-caption">
                            <h2>Connect with <span>Spend Cubes</span></h2>
                            <p>Our Analysts will provide a complimentary assessment of savings and refund estimation of your telecommunication invoices</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={slide2} alt="First slide"/>
                        <div className="carousel-caption">
                            <h2>Helping <span>Business</span></h2>
                            <p>Getting rid of telecom billing inefficiencies and over-charges without changing telecommunication providers</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={slide3} alt="First slide"/>
                        <div className="carousel-caption">
                            <h2>Solutions for <span>TEM Providers</span> & <span>Telecom Auditing Companies</span></h2>
                            <p>White-Labeled services designed to suit business needs of our partners and their customers. Our goal is to provide maximum savings, timely delivery and efficient operations</p>
                        </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span aria-hidden="true">
                        <i className="fas fa-long-arrow-alt-left" aria-hidden="true"></i>
                        </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span aria-hidden="true">
                        <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                        </span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
                <div class="container features-home">

                    <div class="row">
                    <div class="col-lg-3">
                        <div class="icon-box">
                        <i class="fas fa-clipboard"></i>
                        <h3><NavLink to="/telecomAuditOptimization">Telecom Audit & optimization</NavLink></h3>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-phone-alt"></i>
                        <h3><NavLink to="/mobileWirelessAudit">Mobile / Wireless audits</NavLink></h3>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-percentage"></i>
                        <h3><NavLink to="/telecomRefundAudit">telecom refund audits</NavLink></h3>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-calculator"></i>
                        <h3><NavLink to="/telecomTaxAudit">telecom tax audit</NavLink></h3>
                        </div>
                    </div>
                    </div>

                </div>
                <div class="container">

                    <div class="row">
                    <div class="col-lg-6">
                        <img src={home_rrr} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                        <h1 className="subheading"><strong>R</strong>educe & <strong>R</strong>ecover <br/>Lost <strong>R</strong>evenue </h1>
                        <p>Spend Cubes is fresh, agile and focused, with customer-centric approach. 
                        <br/>Professionals at Spend Cubes bring together decades of experience and expertise
                        in telecom lifecycle management, refunds and recovery.</p>
                        <NavLink to="/about" className="btn btn-primary">More About Us</NavLink>
                    </div>
                </div>

                </div>
                <div class="container">

                    <div class="row counters">

                    <div class="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up" data-content="150">$150Mn+</span>
                        <p>Total Spend Addressed</p>
                    </div>

                    <div class="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up" data-content="150">1,200+</span>
                        <p>Contracts reviewed</p>
                    </div>

                    <div class="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up" data-content="150">60,000+</span>
                        <p>Telecoms Bill Reviewed</p>
                    </div>

                    <div class="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up" data-content="150">40+</span>
                        <p>Customers</p>
                    </div>

                    </div>

                </div>
                <div className="jumbotron services-home">
                    <div className="section-title">
                        <h2 className="subheading">Features</h2>
                    </div>
                    <p className="container">
                    We specialize in conducting telecommunication refunds & recovery audits. 
                    <br/>Our telecom audit & optimization services will bring a significant <br/>
                    amount of savings & refunds.
                    </p>
                    <div class="container features-home">

                    <div class="row">
                    <div class="col-lg-4">
                        <div class="icon-box">
                        <i class="fas fa-book"></i>
                        <h3><a href="">Exhaustive knowledge bases</a></h3>
                        <p>Years of research on recurring costs,plans, services and taxes helps maximize savings</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-star-half-alt"></i>
                        <h3><a href="">Non-biased Recommendations</a></h3>
                        <p>We do not have any alliance or get any commission from service providers ensuring non-biased recommendations</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-funnel-dollar"></i>
                        <h3><a href="">Obtain Maximum Recovery</a></h3>
                        <p>Our highly skilled dispute resolution team identifies and processes billing errors and disputes to obtain the maximum recovery</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-4">
                        <div class="icon-box">
                        <i class="fas fa-piggy-bank"></i>
                        <h3><a href="">Speed to Savings</a></h3>
                        <p>First results of refunds and savings start within the 1st billing cycle</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-4">
                        <div class="icon-box">
                        <i class="fas fa-user-shield"></i>
                        <h3><a href="">Risk Free </a></h3>
                        <p>Gain Share model-we get paid only once we recover the money from the service providers</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-4">
                        <div class="icon-box">
                        <i class="fas fa-check-circle"></i>
                        <h3><a href="">Efficiency To Value</a></h3>
                        <p>10-25% average savings for our customers</p>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
                
                
                
                {/*get a free consultation*/}
                <div className="container">
                    <div className="row">
                    <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <h2 className="home-form-head">Get a Free Consultation</h2>
                                <p className="container home-form-content">As a leading Telecom Expense Management company, Spend Cubes believes in a “Partnership Approach” with its clients who are some of the world’s best brands. Through our global delivery network and a comprehensive outsourcing service offerings, we deliver business value to our clients by combining operational excellence and deep domain – industry and functional – knowledge.
                                    <br/>We bring our deep industry knowledge combined with in-house tools to ensure Quality & timely delivery of our solutions. Enter your contact information for a free consultation.
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
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
}
export default Home;
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/tao.css";

class TelecomAuditOptimization extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className="tao">
                {/*heading with background*/}
                <div className="container-fluid">
                    <div className="shadow-title">
                        <h2>Telecom Audit & Optimization</h2>
                    </div>
                    {/* <div className="bg1 img-fluid">
                        <h3 className="centered serv1-heading">Telecom Audit & <br/> Optimization</h3>
                    </div> */}
                </div>
                <div class="container">

                    <div class="row">
                    <div class="col-lg-6">
                        <img src="https://static9.depositphotos.com/1518767/1119/i/950/depositphotos_11195040-stock-photo-businessman-talking-on-the-phone.jpg" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                        <p style={{textAlign:"left"}}>Spend cubes’ Telecom audit and optimization process is tailor-made and perfected over the years.
                            Our methods are proven to identify over 95% of billing errors and leakages.
                            We are detail-oriented and create a robust USOC level inventory of all your locations, services
                            and contracts. These services are analyzed with respect to contracts, industry standard
                            benchmarked tariffs and rates.
                            Experienced team of order and dispute resolution specialists ensure recommendations are
                            implemented correctly and on time.</p>
                            <Link class="btn btn-primary" to="/contact">Get in Touch</Link>
                    </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div>
                    
                    <div className="contain container-fluid">
                        <div className="section-title">
                            <h2 className="subheading">Analysis we conduct to deliver you desired results</h2>
                        </div>
                        <div class="container features-home">

                            <div class="row">
                            <div class="col-lg-4">
                                <div class="icon-box">
                                <i class="fas fa-car"></i>
                                <h3><a href="">Conduct Traffic Studies</a></h3>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4 mt-lg-0">
                                <div class="icon-box">
                                <i class="fas fa-building"></i>
                                <h3><a href="">Site Evaluation</a></h3>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4 mt-lg-0">
                                <div class="icon-box">
                                <i class="fas fa-clipboard"></i>
                                <h3><a href="">Contract and Tariff Study</a></h3>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4">
                                <div class="icon-box">
                                <i class="fas fa-cogs"></i>
                                <h3><a href="">Provisioning and Optimization</a></h3>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4">
                                <div class="icon-box">
                                <i class="fas fa-undo"></i>
                                <h3><a href="">Implementation of Recommendation</a></h3>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4">
                                <div class="icon-box">
                                <i class="fas fa-box-open"></i>
                                <h3><a href="">Detailed Inventory</a></h3>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TelecomAuditOptimization;
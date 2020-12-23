import React from "react";
import slide1 from "../../assets/images/slide-1.jpg";
import slide2 from "../../assets/images/slide-2.jpg";
import slide3 from "../../assets/images/slide-3.jpg";
import "../../assets/styles/service.css"
import home_rrr from '../../assets/images/home-rrr.jpg';

class Service extends React.Component{
    render(){
        return(
            <div>
                {/*start of carousel*/}
                <div className="container-fluid home-slider">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={slide1} alt="First slide"/>
                        <div className="carousel-caption">
                            <h2>No Service <span>Provider Changes</span></h2>
                            <p><i>Usually service provider changes are less 
                            cost effective and lead to increased one-time
                            expenses and service outages due to service
                            migration and equipment costs.</i></p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={slide2} alt="First slide"/>
                        <div className="carousel-caption">
                            <h2>Un<span>biased</span></h2>
                            <p><i>Contractually we guarantee get no commissions 
                            from service providers or encourage provider 
                            migration. We work with your existing providers
                            to get you on best rates available in the industry</i></p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={slide3} alt="First slide"/>
                        <div className="carousel-caption">
                            <h2>ROI <span>Guaranteed</span></h2>
                            <p><i>Spend Cubes will only invoice you upon activated
                            savings and delivered refunds. We contractually also
                            guarantee if our savings fall off due to changes in 
                            the middle of our term, we stop billing.</i></p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={slide1} alt="First slide"/>
                        <div className="carousel-caption">
                            <h2>60 Days <span>or Less</span></h2>
                            <p><i>Savings start appearing on your invoices in
                                60 days or less</i></p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={slide2} alt="First slide"/>
                        <div className="carousel-caption">
                            <h2>No <span>Penalty</span></h2>
                            <p><i>You always have the option to leave us at any time,
                             without penalty.</i></p>
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
                </div><br/><br/>
                {/*end of carousel*/}

                <div style={{backgroundColor:"#f9f9fa"}}>
                <div class="container">

                    <div class="row">
                    <div class="col-lg-6">
                        <img src={home_rrr} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                        <h1 className="subheading"><strong>Audit Solutions</strong></h1>
                        <p>Telecom bills with errors and inefficiencies can cost your company a staggering 12% – 25% per annum. 
                            Billing errors consist of errors ranging from contract non-compliances to simple misunderstood or incorrectly applied taxes.
                        Our telecommunication specializes in obtaining refunds and saving money going forward for our customers located in North America.</p>
                        <button type="button" class="btn btn-primary">Get in Touch</button>
                    </div>
                </div>
                </div>
                </div>
                <br/><br/>

                {/*table of services*/}
                <div className="serv-table">
                <div className="jumbotron" style={{backgroundColor:"#f9f9fa"}}>
                    <h3>We offer several variants of Telecom Auditing Services</h3><br/><br/>
                        <table class="table table-striped container service-table">
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col">Telecom Audit & <br/>Optimization</th>
                                <th scope="col">Mobile/Wireless Audit</th>
                                <th scope="col">Telecom Refund Audit</th>
                                <th scope="col">Telecom Tax Audit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">Services Covered</th>
                                <td>Data, Wireless, Long Distance & Local Services</td>
                                <td>Wireless</td>
                                <td>Data, Wireless, Long Distance & Local Services</td>
                                <td>Data, Wireless, Long Distance & Local Services</td>
                                </tr>
                                <tr>
                                <th scope="row">Savings Offered</th>
                                <td>Future Savings & Refunds</td>
                                <td>Future Savings & Refunds</td>
                                <td>Refunds Only</td>
                                <td>Future Savings & Refunds</td>
                                </tr>
                                <tr>
                                <th scope="row">Savings %</th>
                                <td>10-25%</td>
                                <td>10-25%</td>
                                <td>3-5%</td>
                                <td>1%</td>
                                </tr>
                                <tr>
                                <th scope="row">Eligibilty</th>
                                <td>All Companies with Telecom Spend</td>
                                <td>All Companies with Telecom Spend</td>
                                <td>Companies with Telecom Services under Contracts</td>
                                <td>Tax Exempt Organizations, Statute based tax exempt companies, Pre-Pay Permit holders</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/*industries served*/}
                <div className="jumbotron features-home services-home">
                    <div className="section-title">
                        <h2 className="subheading">Industries Served</h2>
                    </div>
                    <div className="container">
                    <div class="row">
                    <div class="col-lg-3">
                        <div class="icon-box">
                        <i class="fas fa-university"></i>   
                        <h3><a href="">Banking & Financial</a></h3>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-wallet"></i>
                        <h3><a href="">Credit Unions</a></h3>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-balance-scale"></i>
                        <h3><a href="">Legal</a></h3>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-tools"></i>
                        <h3><a href="">Construction</a></h3>
                        </div>
                    </div>
                    </div><br/>
                    {/*end of row1*/}

                    <div class="row">
                    <div class="col-lg-3">
                        <div class="icon-box">
                        <i class="fas fa-graduation-cap"></i>   
                        <h3><a href="">Education</a></h3>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-heartbeat"></i>
                        <h3><a href="">Healthcare</a></h3>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-laptop-code"></i>
                        <h3><a href="">Consulting & IT</a></h3>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-4 mt-lg-0">
                        <div class="icon-box">
                        <i class="fas fa-gas-pump"></i>
                        <h3><a href="">Oil & Gas</a></h3>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;
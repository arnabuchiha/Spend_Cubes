import React from "react";
import Background1 from "../../assets/images/auditBackground1.jpg"
import Background2 from "../../assets/images/auditBackground2.jpg"
import Bank from "../../assets/images/bank.svg"
import Credit from "../../assets/images/money.svg"
import Legal from "../../assets/images/law.svg"
import Construction from "../../assets/images/construction.svg"
import Education from "../../assets/images/education.svg"
import Healthcare from "../../assets/images/healthcare.svg"
import Consulting from "../../assets/images/laptop.svg"
import Oil from "../../assets/images/oil.svg"
import "../../assets/styles/service.css"

class Service extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid"><br/><br/><br/><br/>
                    <div>
                        <h2>Audit Solutions</h2>
                        <span className="container"><i>
                            Telecom bills with errors and inefficiencies can cost your company a staggering 12% – 25% per annum. Billing errors consist of errors ranging from contract non-compliances to simple misunderstood or incorrectly applied taxes.
                            Our telecommunication specializes in obtaining refunds and saving money going forward for our customers located in North America.</i></span>
                    </div>
                </div>
                <br/><br/><br/>

                {/*carousel*/}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={Background1} alt="First slide"/>
                        <div className="carousel-caption">
                            <h3>No Service Provider Changes</h3>
                            <p><i>Usually service provider changes are less 
                            cost effective and lead to increased one-time
                            expenses and service outages due to service <br/>
                            migration and equipment costs.</i></p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Background2} alt="Second slide"/>
                        <div className="carousel-caption">
                            <h3>Unbiased</h3>
                            <p><i>Contractually we guarantee get no commissions 
                            from service providers or encourage provider 
                            migration. We work with your<br/> existing providers
                            to get you on best rates available in the industry</i></p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Background1} alt="Third slide"/>
                        <div className="carousel-caption">
                            <h3>ROI Guaranteed</h3>
                            <p><i>Spend Cubes will only invoice you upon activated
                            savings and delivered refunds. We contractually also
                            guarantee if our savings fall off due to changes in <br/>
                            the middle of our term, we stop billing.</i></p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Background2} alt="Fourth slide"/>
                        <div className="carousel-caption">
                            <h3>60 Days or Less</h3>
                                <p><i>Savings start appearing on your invoices in<br/>
                                60 days or less</i></p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Background1} alt="Fifth slide"/>
                        <div className="carousel-caption">
                            <h3>No Penalty</h3>
                            <p className="container"><i>You always have the option to leave us at any time,<br/>
                             without penalty.</i></p>
                        </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                

                {/*table of services*/}
                <div className="serv-table">
                <br/><br/><br/><br/>
                <div className="jumbotron">
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
                <br/><br/>

                {/*industries served*/}
                <div>
                    <h3 className="container-fluid" style={{color: "white", backgroundColor:"#2b3152", paddingBottom:"10px", paddingTop:"10px"}}>Industries Served</h3>
                    <div className="container-fluid contain">
                        {/*row1*/}
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={Bank} style={{height:"40px", width:"40px"}}/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span>Banking & Financial</span>
                                        </h4>
                                    </div>
                            </div>
                            {/*end of col1*/}
                            <div className="col-sm-3">
                                <img src={Credit} style={{height:"40px", width:"40px"}}/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span>Credit Unions</span>
                                        </h4>
                                    </div>
                            </div>
                            {/*end of col2*/}
                            <div className="col-sm-3">
                                <img src={Legal} style={{height:"40px", width:"40px"}}/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span>Legal</span>
                                        </h4>
                                    </div>
                            </div>
                            {/*end of col3*/}
                            <div className="col-sm-3">
                                <img src={Construction} style={{height:"40px", width:"40px"}}/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span>Construction</span>
                                        </h4>
                                    </div>
                            </div>
                        </div>
                        {/*end of row1*/}

                        <div className="row">
                            <div className="col-sm-3">
                                <img src={Education} style={{height:"40px", width:"40px"}}/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span>Education</span>
                                        </h4>
                                    </div>
                            </div>
                            {/*end of col1*/}
                            <div className="col-sm-3">
                                <img src={Healthcare} style={{height:"40px", width:"40px"}}/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span>Healthcare</span>
                                        </h4>
                                    </div>
                            </div>
                            {/*end of col2*/}
                            <div className="col-sm-3">
                                <img src={Consulting} style={{height:"40px", width:"40px"}}/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span>Consulting & IT</span>
                                        </h4>
                                    </div>
                            </div>
                            {/*end of col3*/}
                            <div className="col-sm-3">
                                <img src={Oil} style={{height:"40px", width:"40px"}}/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span>Oil & Gas</span>
                                        </h4>
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
import React from "react";
import "../../assets/styles/tao.css";
import Cars from "../../assets/images/cars.svg"
import Contract from "../../assets/images/contract.svg"
import Building from "../../assets/images/building.svg"
import Optimization from "../../assets/images/optimization.svg"
import Recovery from "../../assets/images/recovery.svg"

class TelecomAuditOptimization extends React.Component{
    render(){
        return(
            <div>
                {/*heading with background*/}
                <div className="container-fluid">
                    <div className="bg1 img-fluid">
                        <h3 className="centered serv1-heading">Telecom Audit & <br/> Optimization</h3>
                        {/*<span style={{color:"white"}}><strong>80% of telecommunication bills contains errors!</strong></span>*/}
                    </div>
                </div>

                {/*paragraph*/}
                <div className="jumbotron">
                    <p className="container-fluid">
                    Spend cubes’ Telecom audit and optimization process are tailor made and perfected over the years. <br/>
                    Our methods are proven to identify over 95% of billing errors and leakages.<br/><br/>
                    We are detail oriented and create a robust USOC level inventory of all your locations and services <br/>
                    and contracts. These services are analyzed with respect to contracts, industry standard <br/>
                    benchmarked tariffs and rates.<br/><br/>
                    Experience team of order and dispute resolution specialists ensures, recommendations are <br/>
                    implemented correctly and on time.</p>
                </div>
                <br/><br/><br/>
                <div>
                    <h4 className="jumbotron" style={{color: "white", backgroundColor:"#2b3152", paddingBottom:"10px", paddingTop:"10px"}}><strong>Analysis</strong> we conduct to deliver you desired results</h4>
                    <div className="contain container">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Cars} style={{height:"60px", width:"60px"}}/><br/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span><ul>Conduct Traffic Studies</ul></span>
                                        </h4>
                                    </div>
                            </div>
                            <br/><br/>
                            <div className="col-sm-6">
                                <img src={Building} style={{height:"60px", width:"60px"}}/><br/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span><ul>Site Evaluation</ul></span>
                                        </h4>
                                    </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Contract} style={{height:"60px", width:"60px"}}/><br/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span><ul>Contract and Tariff Study</ul></span>
                                        </h4>
                                    </div>
                            </div>
                            <br/><br/>
                            <div className="col-sm-6">
                                <img src={Optimization} style={{height:"60px", width:"60px"}}/><br/><br/>
                                    <div className="et_pb_blurb_container">
                                        <h4 className="et_pb_module_header">
                                            <span><ul>Provisioning and Optimization</ul></span>
                                        </h4>
                                    </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <div className="col-sm-12">
                                <img src={Recovery} style={{height:"60px", width:"60px"}}/><br/><br/>
                                <div className="et_pb_blurb_container">
                                    <h4 className="et_pb_module_header">
                                        <span><ul>Implementation of Recommendation</ul></span>
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

export default TelecomAuditOptimization;
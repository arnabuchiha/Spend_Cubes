import React from "react";
import {Link} from "react-router-dom";
import "../../assets/styles/jobscard.css";

class JobsCard extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div className="container jobscard mb-4 ">
                    <div className="row">
                        <div className="col">
                            <p className="row location">
                                Laxmi Nagar,Delhi
                            </p>
                            <div className="row">
                                <h2>Analyst</h2>
                            </div>
                            <p className="row depart">
                                Telecom Expense Management / KPO
                            </p>
                        </div>
                        <div className="col mt-auto mb-auto text-right">
                            <a href="mailto:careers@spendcubes.com?subject=ANALYST20200901" target="_blank" className="btn btn-primary apply">APPLY</a>
                            <Link className="btn btn-primary" to="/analyst-hiring">MORE INFO</Link>
                        </div>
                        
                    </div>
                    {/* <hr className="row end-line"></hr> */}
                </div>
            </div>
        )
    }
}
export default JobsCard;
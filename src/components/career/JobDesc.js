import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/jobdesc.css";
import logo from "../../assets/icons/web-logo.png";
class JobDesc extends React.Component{
    render(){
        return(
            <div className="jobdesc">
                <div className="container pl-5 pb-3">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="backlink"><Link  to="/career">Job Search</Link></div>
                        <h1 className="heading">Analyst</h1>
                        <div className="small-info">
                            Laxmi Nagar, Delhi | ANALYST20200901
                        </div>
                        <div className="mt-4">
                        <button type="submit" class="btn btn-primary">Apply</button>
                        </div>
                    </div>
                    <div className="col-md-6 text-right mt-auto mb-auto">
                            <img src={logo}></img>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="container desc pl-5 pr-5 mt-2">
                        <h2>Job Description</h2>
                        <ul>
                            <li>
                                <strong>Experience:</strong> 3 years
                            </li>
                                <strong>Educational Qualification:</strong> 10+2 / Graduates – Any Stream
                            <li>
                                <strong>Industry:</strong> Telecom Expense Management / KPO
                            </li>
                            <li>
                                <strong>Functional Area:</strong> Telecom Billing
                            </li>
                            <li>
                                <strong>Role Category:</strong> Analyst
                            </li>
                            <li>
                                <strong>Location:</strong> Laxmi Nagar, Delhi
                            </li>
                            <li>
                                <strong>Shift Timing:</strong> 2:00 PM to 11:00 PM IST
                            </li>
                        </ul>
                        <strong>Job, duties and responsibilities for this position include:</strong>
                        <ul>
                            <li>
                                Downloading bills and reports from the telecom service provider portal
                            </li>
                            <li>Renaming bills and documents as per company methodology</li>
                            <li>Enter & update documents received</li>
                            <li>Capturing billing data in spreadsheet (in case of scanned bills)</li>
                            <li>Validating entered data for accuracy</li>
                            <li>Analyze billing data</li>
                            <li>Finding errors in billing data</li>
                            <li>Inventory Analysis and Service Optimization</li>
                            <li>Review billed Taxes and Surcharges</li>
                            <li>Calling Telecom Service Providers in USA.</li>
                        </ul>
                        <div>
                            <strong>Job Requirements</strong>
                            <ul>
                                <li>Experience for this position: 3 years</li>
                                <li>Experience in International Outbound Calling or</li>
                                <li>Experience in Telecom Billing or</li>
                                <li>Experience in MIS Reporting or</li>
                                <li>Expert in MS Excel / Access</li>
                                <li>Vlookup</li>
                                <li>Formulas</li>
                                <li>Functions</li>
                                <li>Pivot table</li>
                                <li>Data Import/Export</li>
                            </ul>
                        </div>
                        
                        <strong>Preference would be given to:</strong>
                        <ul>
                            <li>Candidates from Domestic Telecom Companies or</li>
                            <li>Candidates having International Outbound Calling experience</li>
                            <li>Looking for candidates residing in and around Laxmi Nagar, Delhi</li>
                        </ul>
                        <strong>Salary:</strong> Rs 20,000 to Rs 25,000 per month
                    </div>
            </div>
        )
    }
}
export default JobDesc;
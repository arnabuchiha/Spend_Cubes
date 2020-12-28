import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/career.css";
import JobsCard from "./JobsCard";

class Career extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className="Career">
                
                <div className="container-fluid">
                    <div className="bg-color img-fluid">
                        <h2 className="centered career-heading">The best people. The best work.</h2>
                    </div>
                </div>
                <div className="contactus-main jumbotron" style={{backgroundColor:"#f9f9fa",minHeight:"65vh"}}>
                    <div className="container jobscard ">
                        <p className="quote">
                            “It is the long history of humankind (and animal kind, too) that those who learned to collaborate and improvise most effectively have prevailed.”
                            <br></br><p className="text-right">-Charles Darwin</p>
                        </p>
                        <hr className="row end-line"></hr>
                    </div>
                    
                <div>
                    <div>
                        {/* <h4 className="container description">Job Description: Analyst</h4><br/> */}
                        <JobsCard/>

                        {/* <div className="container description">
                            <p><strong>Experience:</strong> 3years</p>
                            <p><strong>Educational Qualification:</strong> 10+2 / Graduates - Any stream</p>
                            <p><strong>Industry:</strong> Telecom Expense Management / KPO</p>
                            <p><strong>Functional Area:</strong> Telecom Billing</p>
                            <p><strong>Role Category:</strong> Analyst</p>
                            <p><strong>Location:</strong> Laxmi Nagar, Delhi</p>
                            <p><strong>Shift Timing:</strong> 2:00 PM To 11:00 PM</p><br/>
                            <Link className="btn btn-primary" to="/analyst-hiring">Know More</Link><br/>
                        </div> */}
                    </div>
                </div>
                </div>
            </div>
        )   
    }
}

export default Career;
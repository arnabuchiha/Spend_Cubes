import React from "react";
import "../assets/styles/career.css";

class Career extends React.Component{
    render(){
        return(
            <div>
                
                <div className="container-fluid">
                    <div className="bg-color img-fluid">
                        <h2 className="centered career-heading">We are Hiring</h2>
                    </div>
                </div>
                <div className="contactus-main jumbotron " style={{backgroundColor:"#f9f9fa"}}>
                {/* <div className="services-home">
                    <div className="section-title">
                            <h2 className="subheading">Current Openings</h2>
                    </div>
                </div> */}
                <div>
                    <div>
                        <h4 className="container description">Job Description: Analyst</h4><br/>
                        <div className="container description">
                            <p><strong>Experience:</strong> 3years</p>
                            <p><strong>Educational Qualification:</strong> 10+2 / Graduates - Any stream</p>
                            <p><strong>Industry:</strong> Telecom Expense Management / KPO</p>
                            <p><strong>Functional Area:</strong> Telecom Billing</p>
                            <p><strong>Role Category:</strong> Analyst</p>
                            <p><strong>Location:</strong> Laxmi Nagar, Delhi</p>
                            <p><strong>Shift Timing:</strong> 2:00 PM To 11:00 PM</p>
                            <button type="button" className="btn btn-primary">Know More</button><br/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )   
    }
}

export default Career;
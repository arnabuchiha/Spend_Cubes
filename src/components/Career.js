import React from "react";
import "../assets/styles/career.css";

class Career extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="bg-color img-fluid">
                        <h2 className="centered" style={{fontSize:"50px"}}>We are Hiring</h2>
                    </div>
                </div>
                <br/><br/>
                <div>
                    <h3 className="jumbotron" style={{color: "white", backgroundColor:"#2b3152", paddingBottom:"10px", paddingTop:"10px"}}>Current Openings</h3>
                </div>
                <br/>
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
                            <button type="button" className="btn btn-info">Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Career;
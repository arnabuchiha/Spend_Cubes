import React from "react";
import firebase from "firebase/app";
import validator from 'validator';
import "firebase/database";
class Signup extends React.Component{
    componentDidMount(){
        
    }
    signupFirebase=(e)=>{

        e.preventDefault();

        this.email=document.getElementById('email').value;
        this.password=document.getElementById('password').value;
        this.name=document.getElementById('name').value;
        this.phone=document.getElementById('phoneNumber').value;
        this.organization=document.getElementById('organization').value;
        this.jobTitle=document.getElementById('jobTitle').value;
        this.website=document.getElementById('website').value;
        if(!validator.isEmail(this.email)){
            //dOM MANIPULATION
            return;
        }
        else if(!this.phone.match(/^\d{10}$/)){
            //dOM MANIPULATION
            return;
        }
        // else if(!validator.isURL(this.website)){
        //     //dOM MANIPULATION
        //     return;
        // }
        
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                this.sendEmailVerification()
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }
    sendEmailVerification=()=> {
        // [START auth_send_email_verification]
        firebase.auth().currentUser.sendEmailVerification()
          .then(() => {
            this.saveData()
          });
        // [END auth_send_email_verification]
      }

    saveData=()=>{
        var userId=firebase.auth().currentUser.uid;
        console.log("userID:"+userId)
        firebase.database().ref('users/' + userId).set({
            name:this.name,
            phone:this.phone,
            organization:this.organization,
            jobTitle:this.jobTitle,
            website:this.website

        });
    }  
    render(){
        return(
            <div className="getting-started">
                <div className="contain container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <form className="container form-box get-started">
                            <div class="Bar" style={{backgroundColor: "#16df7e4d", height: "10px"}}><div class="Progress" style={{backgroundColor: "rgb(42, 223, 175)", width: "0%"}}></div></div>
                            <div className="welcome-msg">CREATE AN ACCOUNT</div>
                            <h2>Sign up to lower your bills and never wait on hold again.</h2>
                            <div className="form-group">
                                    <input type="text" id="name" className="input-field" placeholder="Name"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="Email" id="email" className="input-field invalid" placeholder="Email Address"/>
                                    
                                    <span class="bar"></span>
                                    <div class="row">
                                        <small id="passwordHelp" class="text-danger">
                                        Must be 8-20 characters long.
                                        </small>      
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password" id="password" className="input-field" placeholder="Password"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="tel" id="phoneNumber" className="input-field" placeholder="Phone Number"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="organization" className="input-field" placeholder="Organization"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="jobTitle" className="input-field" placeholder="Job Title"/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="website" className="input-field" placeholder="Company Website"/>
                                    <span class="bar"></span>   
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-primary" onClick={this.signupFirebase}>Submit</button>
                                </div>
                            </form><br/><br/>
                        </div>
                        <div className="col-md-5">
                            <h3>Documents Required for Getting Started</h3><br/>
                            <ul className="fa-ul sign-up">
                                <li><i class="fas fa-arrow-circle-right sm"></i>Billing of 2 months or online login for service provider portals for all locations</li>
                                <li><i class="fas fa-arrow-circle-right"></i>Contracts Signed with Service Providers</li>
                                <li><i class="fas fa-arrow-circle-right"></i>Letter of Agency (LOA); We will send out LOA format for review and signature</li>
                                <li><i class="fas fa-arrow-circle-right"></i>Directory of all active locations</li>
                                <li><i class="fas fa-arrow-circle-right"></i>Service Provider Contacts (if available)</li>
                            </ul>
                            <p style={{textAlign:"left"}}><strong>NOTE: </strong>Don’t wait for all the materials, we can get started with as much or as little information available.</p>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
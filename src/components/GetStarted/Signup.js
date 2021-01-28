import React from "react";
import firebase from "firebase/app";
import validator from 'validator';
import "firebase/database";
import Captcha from "react-numeric-captcha";
import "../../assets/styles/captcha.css"

class Signup extends React.Component{
    state = {
        captchaSuccess: false
    };
    componentDidMount(){
        this.emailEle = document.getElementById("emailHelp");
        this.phoneEle = document.getElementById("phoneHelp");
        this.webEle = document.getElementById("webHelp");
        this.passEle = document.getElementById("passHelp");
    }

    
    
    // fieldChanges=(e)=>{
    //     console.log(e.target.id)
    //     switch(e.target.id){
    //         case "email":
    //             if(!validator.isEmail(e.target.value)){
    //                 //dOM MANIPULATION
    //                 this.emailEle.style.display = "block";
    //                 e.target.classList.add("invalid");
                    
    //                 document.getElementById("signupBtn").disabled = true;
    //             }
    //             else{
    //                 this.emailEle.style.display = "none";
    //                 e.target.classList.remove("invalid")
    //                 document.getElementById("signupBtn").disabled = false;
    //             }
    //             break;
    //         case "password":
    //             var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    //             if(!e.target.value.match(passw)){
    //                 this.passEle.style.display = "block";
    //                 document.getElementById("signupBtn").disabled = true;
    //             }
    //             else{
    //                 this.passEle.style.display = "none";
    //                 document.getElementById("signupBtn").disabled = false;
    //             }
    //              break;
    //         case "phoneNumber":
    //             if(!e.target.value.match(/^\d{10}$/)){
    //                 //dOM MANIPULATION
    //                 this.phoneEle.style.display = "block";
    //                 e.target.classList.add("invalid")
    //                 document.getElementById("signupBtn").disabled = true;
    //             }
    //             else{
    //                 this.phoneEle.style.display = "none";
    //                 e.target.classList.remove("invalid")
    //                 document.getElementById("signupBtn").disabled = false;
    //             }
    //             break;
    //         case "website":
    //             if(!validator.isURL(e.target.value)){
    //                 //dOM MANIPULATION
    //                 e.target.classList.add("invalid")
    //                 this.webEle.style.display = "block";
    //                 return;
    //             }
    //             else{
    //                 e.target.classList.remove("invalid")
    //                 this.webEle.style.display = "none";
    //             }
    //             break;
    //         default:
    //             console.log("Noting");
    //             break;
    //     }
    // }
    
    signupFirebase=(e)=>{

        e.preventDefault();
        // grecaptcha.getResponse(
        //     "captcha"
        // )
        this.email=document.getElementById('email').value;
        this.password=document.getElementById('password').value;
        this.name=document.getElementById('name').value;
        this.phone=document.getElementById('phoneNumber').value;
        this.organization=document.getElementById('organization').value;
        this.jobTitle=document.getElementById('jobTitle').value;
        this.website=document.getElementById('website').value;
        
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                this.sendEmailVerification()
                document.getElementById("signUpError").style.display="none";
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                document.getElementById("signUpError").style.display="block";
                document.getElementById("signUpError").innerHTML=errorMessage
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
        const { captchaSuccess } = this.state;
        return(
            <div className="getting-started">
                <div className="contain container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <form className="container form-box get-started" onSubmit={this.signupFirebase}>
                            <div class="Bar" style={{backgroundColor: "#16df7e4d", height: "10px"}}><div class="Progress" style={{backgroundColor: "rgb(42, 223, 175)", width: "0%"}}></div></div>
                            <div className="welcome-msg">CREATE AN ACCOUNT</div>
                            <h2>Sign up to lower your bills and never wait on hold again.</h2>
                            <div className="form-group">
                                    <input type="text" id="name" className="input-field" placeholder="Name" required/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="Email" id="email" className="input-field" placeholder="Email Address" 
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    title="Email is not valid"
                                    />
                                    
                                    <span class="bar"></span>
                                    <div class="row">
                                        <small id="emailHelp" className="text-danger" style={{display:"none"}}>
                                            Please provide a valid email id.
                                        </small>      
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password" id="password" className="input-field" placeholder="Password" 
                                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$"
                                        title="Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
                                    
                                        required
                                    />
                                    <span class="bar"></span> 
                                </div>
                                <div className="form-group">
                                    <input type="tel" id="phoneNumber" className="input-field" placeholder="Phone Number" 
                                        pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                                        title="Mobile Number is incorrect"
                                        required
                                    />

                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="organization" className="input-field" placeholder="Organization" required/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="jobTitle" className="input-field" placeholder="Job Title" required/>
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="website" className="input-field" placeholder="Company Website"
                                        pattern="^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$"
                                        title="Please enter a valid website"
                                        required
                                    />
                                    <span class="bar"></span>
                                </div>
                                <div className="form-group">
                                <Captcha
                                    onChange={status => {document.getElementById("signupBtn").disabled = !status;}}
                                />
                                </div>
                                <div className="form-group">
                                    <small id="signUpError" className="text-danger" style={{display:"none"}}>
                                    </small>
                                </div>
                                <div>
                                    {/* <div class="g-recaptcha" id="captcha" data-sitekey="6Lf3Zz8aAAAAABDpUJpP1hXbPfGzs6rqjKTyFvsG"></div> */}
                                    <input disabled type="submit" id="signupBtn" class="btn btn-primary"/>
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
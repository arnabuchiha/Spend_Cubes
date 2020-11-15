import React from "react"
import "../../assets/styles/aboutus.css"
import Aboutusbg from "../../assets/icons/aboutus_bg.jpg"
import Card from "../Cards/Card";

class AboutUs extends React.Component{
    constructor(){
        super();
        this.state={
            team:[
                {
                    image:"https://www.spendcubes.com/wp-content/uploads/2019/12/adarsh.png",
                    name:"Adarsh Maheshwari",
                    position:"Chief Savings Orchestrator",
                    about:"Founder and Chief Savings Orchestrator in Spend Cubes,Adarsh comes with over 16 years of experience and has worked in TEM space for over 13 years. Over the last 13 years, Adarsh has worked for several Fortune 1000 companies, US local, State & Federal governments, enabled savings & refunds of $60 Mil+",
                    linkedin:"https://www.linkedin.com/in/adarsh-maheshwari-5434a1124/"
                },
                {
                    image:"https://www.spendcubes.com/wp-content/uploads/2019/12/ashok.png",
                    name:"Ashok Pillai",
                    position:"Savings Evangelist",
                    about:"Ashok Pillai is Co-Founder & Director TEM in Spend Cubes comes with over 20 years of experience and has worked in TEM space for over 12 years. Ashok, comes with a rich experience TEM operations & dispute management, revenue assurance, CABS & SECABS.",
                    linkedin:"https://www.linkedin.com/in/ashokpillai75/"
                },
                {
                    image:"https://www.spendcubes.com/wp-content/uploads/2020/01/Kunal-Bhatia.jpg",
                    name:"Kunal Bhatia",
                    position:"Creator of Opportunities",
                    about:"12 years of experience in core areas of Operations, Project Management & Solution consulting & selling functions across MNC’s & Start-ups. Kunal has worked with companies like Huawei, Autoplant, Infosys & AlefEdge.",
                    linkedin:"https://www.linkedin.com/in/kunal-bhatia-a4268215/"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <div className="container-fluid" >
                        <div className="aboutus-H">
                        {/* <img className="img-fluid" src={Aboutusbg}></img> */}
                            <h1 className="centered" style={{color:"white",fontSize:"80px",fontWeight:"bold"}}>About Us</h1>
                            
                            {/* <p>Spend Cubes is a leading Telecom Auditing, Telecom Expense Management (TEM) & Mobile Expense Management Company. We specialize in saving money for small, medium and large companies in North American markets.</p> */}
                        </div>
                    </div>
                    <div className="container-fluid">
                        <h1 className="subheading">Who We Are</h1>
                        <p className="custom-text" style={{fontSize:"21px"}}>
                        Spend Cubes is a leading Telecom Auditing, Telecom Expense Management (TEM) & Mobile Expense Management Company. We specialize in saving money for small, medium and large companies in North American markets.
                        </p>
                    </div>
                    <div className="container-fluid" style={{padding:"20px"}}>
                        <h1 className="subheading">About Our Company</h1>
                        <p className="custom-text" style={{fontSize:"21px"}}>
                        We started this Spend Cubes in 2017 with the sole objective of providing our customers with no frills cost reductions in there telecom invoices that is truly risk free.<br></br><br></br>

As a leading Telecom Expense Management company, Spend Cubes believes in a “Partnership Approach” with its clients who are some of the world’s best brands. Through our global delivery network and  comprehensive outsourcing service offerings, we deliver business value to our clients by combining operational excellence.<br></br><br></br>

We bring our deep domain - industry and functional knowledge combined with in-house tools to ensure Quality & timely delivery of our solutions.
                        </p>
                    </div>
                    <div className="container-fluid" style={{marginTop:"20px"}}>
                        <div className="our-team">
                        {/* <img className="img-fluid" src={Aboutusbg}></img> */}
                            <h1 className="centered" style={{color:"white",fontSize:"80px",fontWeight:"bold"}}>Our Team</h1>
                            {/* <p>The work is as important as the pleasure we get from doing it. Such an authentic corporate culture isn’t imposed, and can’t just be invented. It appears spontaneously when people who love creating, learning and growing get together, forming a team with ties that transcend the workplace.</p> */}
                            
                            {/* <p>Spend Cubes is a leading Telecom Auditing, Telecom Expense Management (TEM) & Mobile Expense Management Company. We specialize in saving money for small, medium and large companies in North American markets.</p> */}
                        </div>
                    </div>
                    <div className="container" style={{marginTop:"20px"}}>
                    <div class="row">
                        {
                            this.state.team.map((ele,i)=>{
                                return <Card key={i} image={ele.image} name={ele.name} position={ele.position} linkedin={ele.linkedin} about={ele.about}/> 
                            })
                        }
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutUs;
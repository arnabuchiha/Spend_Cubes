import React from "react"
import "../../assets/styles/aboutus.css"
import Aboutusbg from "../../assets/icons/aboutus_bg.jpg"
import adarsh from "../../assets/images/team/adarsh.png";
import ashok from "../../assets/images/team/ashok.png";
import avinash from "../../assets/images/team/avinash.png";
import garek from "../../assets/images/team/garek-spendcubes.jpg";
import ketan from "../../assets/images/team/ketan.jpg";
import kunal from "../../assets/images/team/Kunal-Bhatia.jpg";
import naveen from "../../assets/images/team/naveen.png";
import Priyadarshi from "../../assets/images/team/Priyadarshi.jpg";
import priyanshu from "../../assets/images/team/priyanshu.png";
import roshan from "../../assets/images/team/roshan.png";
import seth from "../../assets/images/team/seth.png";

import Card from "../Cards/Card";

class AboutUs extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    constructor(){
        super();
        this.state={
            team:[
                {
                    image: adarsh,
                    name: "Adarsh Maheshwari",
                    position: "Chief Savings Orchestrator",
                    about: "Founder and Chief Savings Orchestrator in Spend Cubes, Adarsh comes with over 16 years of experience and has worked in TEM space for over 13 years. Over the last 13 years, Adarsh has worked for several Fortune 1000 companies, US local, State & Federal governments, enabled savings & refunds of $60 Mil+",
                    linkedin: "https://www.linkedin.com/in/adarsh-maheshwari-5434a1124/"
                },
                {
                    image: ashok,
                    name:"Ashok Pillai",
                    position:"Savings Evangelist",
                    about:"Ashok Pillai is Co-Founder & Director TEM in Spend Cubes. He comes with over 20 years of experience and has worked in TEM space for over 12 years. Ashok comes with a rich experience TEM operations, dispute management, revenue assurance, CABS & SECABS.",
                    linkedin:"https://www.linkedin.com/in/ashokpillai75/"
                },
                {
                    image:Priyadarshi,
                    name:"Priyadarshi",
                    position:"Ambassador of Buzz",
                    about:"Marketing aficionado skilled in building brand from scratch and digital campaigns. MBA graduate and has over 5 years of entrepreneurial experience in almost every niche from the fashion industry to cryptocurrency. Along with this, he runs a successful digital agency, Creative Guns and founder at Swathena Edutech.  He has also been a speaker at various conferences and top B-schools.",
                    linkedin:"https://www.linkedin.com/in/priyadarshey/"
                },
                {
                    image:priyanshu,
                    name:"Pranshu Sharma",
                    position:"Lead Number Cruncher",
                    about:"Over 8 years of experience in Telecom Expense Management (TEM). Pranshu has strong accounting professional skills and deep telecommunication billing domain knowledge",
                    linkedin:"https://www.linkedin.com/in/pranshusharma1/"
                },
                {
                    image:avinash,
                    name:"Avinash K Singh",
                    position:"Number Cruncher",
                    about:"5 years of experience in accounting, finance & telecommunications. Core focus on telecom auditing, forensic analytics & contract management",
                    linkedin:"https://www.linkedin.com/in/avinashsingh91/"
                },
                {
                    image:seth,
                    name:"Seth Panman",
                    position:"VP Sales",
                    about:"Seth Panman, Currently co-founder and Chief Financial Officer of ThreeWay Product. He trained and managed sales reps for The New York Times.  Seth has produced and directed numerous shorts, commercials and music videos, including  “Hillary In The House” music video which was featured on CBS and Tosh.",
                    linkedin:""
                },
                {
                    image:roshan,
                    name:"Roshan Kumar",
                    position:"Sales Manager",
                    about:"Roshan has 5 years of sales experience in B2B sales. He has managed a team of 40 sales representatives and ranked his offices in the top 10% in the industry. He is currently training and managing 4 offices for a multi-billion dollar firm and building a generation z sales team.",
                    linkedin:""
                },
                {
                    image:garek,
                    name:"Garek Touchen",
                    position:"Account Growth Manager",
                    about:"Economics Graduate, Firefighter over 5 years in regional sales and helping sales reps to reach full potential.",
                   linkedin:""
                },
                {
                    image:naveen,
                    name:"Navin Chandra Roy",
                    position:"Reckoner",
                    about:"With 15+ Years of industry experience and has worked in TEM space for over 8 years. Navin is specialized in Analytics & Reporting. He is also a certified expert from Microsoft.",
                    linkedin:"https://www.linkedin.com/in/navin-roy-476a0859/"
                },
                {
                    image:ketan,
                    name:"Ketan Kumar",
                    position:"Board Member and Executive Advisor",
                    about:"Ketan Kumar is a Board Member and Executive Advisor for Spend Cubes with a focus on growth and expansion of Spend Cubes business globally. He has over 20 years experience as a global business leader and held senior positions in Sales, Business Development at Hitachi, CapGemini, HP and Infosys. Ketan is a Computer Engineer and a management graduate from prestigious IIM Lucknow. ",
                    linkedin:""
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
                            Spend Cubes was founded in 2017 with the sole objective of providing our customers with risk free, 
                            no-frills-attached cost reduction in telecom invoices.<br></br><br></br>

As a leading Telecom Expense Management company, Spend Cubes believes in a “Partnership Approach” with its clients who are some of the world’s best brands. Through our global delivery network and comprehensive outsourcing service offerings, we deliver business value to our clients by combining operational excellence.<br></br><br></br>

We bring our deep domain - industry and functional-knowledge combined with in-house tools to ensure Quality & timely delivery of our solutions.
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
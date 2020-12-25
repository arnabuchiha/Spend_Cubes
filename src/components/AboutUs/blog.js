import React from "react";
import "../../assets/styles/blog.css"
import BlogCard from "../Cards/BlogCard";
import Comment from "./Comment";
class blog extends React.Component{
    constructor(){
        super();
        this.state={
            blogs:[
                {
                    title:"Every Hospital should consider a Telecom Audit!",
                    cover:"https://shahreyar46.github.io/Blog/img/slider/slider-1.png",
                    author:"ADARSH MAHESHWARI",
                    date:"JUL 18, 2020",
                    topic:"TELECOM EXPENSE MANAGEMENT",
                    about:"Frost & Sullivan's recent prediction in Post-Pandemic Global Healthcare Market Outlook, 2020 will be an unforgiving but transformational year for the healthcare industry. As the world grapples with a global emergency caused by the COVID-19 pandemic, the..."
                },
                {
                    title:"Every Hospital should consider a Telecom Audit!",
                    cover:"https://www.spendcubes.com/wp-content/uploads/2019/12/retail.png",
                    author:"ADARSH MAHESHWARI",
                    date:"JUL 18, 2020",
                    topic:"TELECOM EXPENSE MANAGEMENT",
                    about:"Frost & Sullivan's recent prediction in Post-Pandemic Global Healthcare Market Outlook, 2020 will be an unforgiving but transformational year for the healthcare industry. As the world grapples with a global emergency caused by the COVID-19 pandemic, the..."
                },
                {
                    title:"Every Hospital should consider a Telecom Audit!",
                    cover:"https://shahreyar46.github.io/Blog/img/slider/slider-1.png",
                    author:"ADARSH MAHESHWARI",
                    date:"JUL 18, 2020",
                    topic:"TELECOM EXPENSE MANAGEMENT",
                    about:"Frost & Sullivan's recent prediction in Post-Pandemic Global Healthcare Market Outlook, 2020 will be an unforgiving but transformational year for the healthcare industry. As the world grapples with a global emergency caused by the COVID-19 pandemic, the..."
                },
                {
                    title:"Every Hospital should consider a Telecom Audit!",
                    cover:"https://shahreyar46.github.io/Blog/img/slider/slider-1.png",
                    author:"ADARSH MAHESHWARI",
                    date:"JUL 18, 2020",
                    topic:"TELECOM EXPENSE MANAGEMENT",
                    about:"Frost & Sullivan's recent prediction in Post-Pandemic Global Healthcare Market Outlook, 2020 will be an unforgiving but transformational year for the healthcare industry. As the world grapples with a global emergency caused by the COVID-19 pandemic, the..."
                }

            ]
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={this.state.blogs[0].cover} alt="First slide"/>
                    <div className="carousel-caption">
                        <h2>{this.state.blogs[0].title}</h2>
                        <div className="caption-footer   justify-content-between">
                            <div class="people">
                                <a href="#">{this.state.blogs[0].topic.toLocaleLowerCase()}</a>
                            </div>
                            <div className="slider">
                                <p>{this.state.blogs[0].date} | <a href="#">{this.state.blogs[0].author}</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={this.state.blogs[1].cover} alt="First slide"/>
                    <div className="carousel-caption">
                        <h2>{this.state.blogs[1].title}</h2>
                        <div className="caption-footer   justify-content-between">
                            <div class="people">
                                <a href="#">{this.state.blogs[1].topic.toLocaleLowerCase()}</a>
                            </div>
                            <div className="slider">
                                <p>{this.state.blogs[1].date} | <a href="#">{this.state.blogs[1].author}</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={this.state.blogs[2].cover} alt="First slide"/>
                    <div className="carousel-caption">
                        <h2>{this.state.blogs[2].title}</h2>
                        <div className="caption-footer    justify-content-between">
                            <div class="people">
                                <a href="#">{this.state.blogs[2].topic.toLocaleLowerCase()}</a>
                            </div>
                            <div className="slider">
                                <p>{this.state.blogs[2].date} | <a href="#">{this.state.blogs[2].author}</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span aria-hidden="true">
                    <i className="fas fa-long-arrow-alt-left" aria-hidden="true"></i>
                    </span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span aria-hidden="true">
                    <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                    </span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
                <div className="container" style={{marginTop:"20px"}}>
                    <div class="row">
                        {
                            this.state.blogs.map((ele,i)=>{
                                return <BlogCard key={i} image={ele.cover} title={ele.title} author={ele.author} date={ele.date} topic={ele.topic}/> 
                            })
                        }
                    </div>
                </div>
                <div>
                    <Comment/>
                </div>
            </div>
        )
    }
}
export default blog;
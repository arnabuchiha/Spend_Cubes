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
                    cover:"https://images.unsplash.com/photo-1485848395967-65dff62dc35b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
                    author:"ADARSH MAHESHWARI",
                    date:"JUL 18, 2020",
                    topic:"TELECOM EXPENSE MANAGEMENT",
                    link:"/blog1"
                },
                {
                    title:"Be very alarmed when you see this on your telecom contract!",
                    cover:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    author:"ADARSH MAHESHWARI",
                    date:"FEB 29, 2020",
                    topic:"TELECOM EXPENSE MANAGEMENT",
                    link:"/blog2"
                },
                {
                    title:"Key Points to Consider While Selecting a Telecom Auditing Company",
                    cover:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    author:"PRIYADARSHI",
                    date:"DEC 12, 2019",
                    topic:"TELECOM EXPENSE MANAGEMENT",
                    link:"/blog3"
                },
                {
                    title:"Top 50 Bank in North America saved 500K on Telecommunication Invoices",
                    cover:"https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    author:"KUNAL BHATIA",
                    date:"DEC 12, 2019",
                    topic:"CASE STUDY",
                    link:"/blog4"
                },
                {
                    title:"How We Got $2.85 M in Savings and Refunds in Taxes for Largest Insurance Company in the US",
                    cover:"https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
                    author:"ADARSH MAHESHWARI",
                    date:"DEC 12, 2019",
                    topic:"CASE STUDY",
                    link:"/blog5"
                },
                {
                    title:"How Big Box Retailer Secured $1.3 M in Savings on Telecommunication Taxes",
                    cover:"https://images.unsplash.com/photo-1500316124030-4cffa46f10f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    author:"KUNAL BHATIA",
                    date:"DEC 11, 2019",
                    topic:"CASE STUDY",
                    link:"/blog6"
                },
                {
                    title:"Think Before Terminating – Wireless Device",
                    cover:"https://images.unsplash.com/photo-1477949331575-2763034b5fb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    author:"PRIYADARSHI",
                    date:"DEC 3, 2019",
                    topic:"TELECOM EXPENSE MANAGEMENT",
                    link:"/blog7"
                },
                {
                    title:"From Voice to Data; Evolve to Save Money!!!",
                    cover:"https://images.unsplash.com/photo-1507246207829-732ed643ea0a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    author:"PRIYADARSHI",
                    date:"OCT 9, 2019",
                    topic:"TELECOM EXPENSE MANAGEMENT",
                    link:"/blog8"
                },

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
                <div className="container pt-5" style={{marginTop:"20px"}}>
                    <div class="row">
                        {
                            this.state.blogs.map((ele,i)=>{
                                return <BlogCard key={i} image={ele.cover} link={ele.link} title={ele.title} author={ele.author} date={ele.date} topic={ele.topic}/> 
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default blog;
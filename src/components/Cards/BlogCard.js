import React from "react";
import {Link} from "react-router-dom"
const BlogCard=({image,title,link,author,date,topic})=>{
    return(
        <div class="col-xl-4">
        <div className="blog-wrapper">
            <div class="blog-img">
                <img src={image} alt=""/>
            </div>
            <div class="blog-content">
                    <h3> <Link to={link}>{title}</Link> </h3>        
            </div>
            <div class="slider-date">
                <p>{date} | <a href="#">{author.toLocaleLowerCase()}</a></p>
            </div>
            <div class="tag-1"> <a href="#">{topic.toLocaleLowerCase()}</a> </div>
        </div>
        </div>
    )
}
export default BlogCard;
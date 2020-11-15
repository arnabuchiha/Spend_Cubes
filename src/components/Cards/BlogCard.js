import React from "react";

const BlogCard=({image,title,author,date,topic})=>{
    return(
        <div class="col-xl-6">
        <div className="latestBlog-wrapper">
            <div class="latest-img">
                <img src={image} alt=""/>
            </div>
            <div class="latest-content">
                    <h3> <a href="#">{title}</a> </h3>        
            </div>
            <div class="slider-date">
                <p>14 septemvber 2016 | <a href="#">John Doe</a></p>
            </div>
            <div class="tag-1"> <a href="#">{topic.toLocaleLowerCase()}</a> </div>
        </div>
        </div>
    )
}
export default BlogCard;
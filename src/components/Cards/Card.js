import React from "react";
import "../../assets/styles/card.css"
const Card=({image,name,position,about,linkedin})=>{
    return(
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div class="image-flip" >
                <div class="mainflip flip-0">
                    <div class="frontside">
                    <div class="card" style = {{width: "18rem"}}>
                    <img class="card-img-top" src={image} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-title">{position}</p>
                        </div>
                    </div>
                </div>
                <div class="backside">
                <div class="card" style={{width: "18rem"}}>
                        <p class="card-text">{about}</p>
                        {
                            linkedin!==""?<a class="social-icon text-xs-center" target="_blank" href={linkedin}>
                            <i class="fa fa-linkedin"></i>
                        </a>:''
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
        // <div class="card" style={{width: "18rem"}}>
        // <img class="card-img-top" src={image} alt="Card image cap"/>
        // <div class="card-body">
        //     <h5 class="card-title">{name}</h5>
        //     <h6 class="card-title">{position}</h6>
        //     <p class="card-text">{about}</p>
        //     <a href="#" class="btn btn-primary">{linkedin}</a>
        // </div>
        // </div>
    )
}
export default Card;
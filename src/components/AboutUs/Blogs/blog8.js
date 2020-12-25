import React from "react";
import Comment from "../Comment";

class blog8 extends React.Component{
    render(){
        return(
            <div className="blog8" style={{textAlign:"left"}}>
                <div className="container pt-5">
                    <h3 className="blogHeading">From VOICE to DATA; Evolve to SAVE MONEY!!!</h3>
                </div>

                <div className="container pt-5 pb-5">
                    <p>Advances in wireless technology and devices have changed the way businesses communicate; with their advertising, with their customer base and with their employees.</p>
                    <p>It wasn’t that long ago when the most important component of your company’s wireless plan, almost the only component really, was how many minutes were included.</p>
                    <p>The way our mobile phone devices have evolved from being just basic phones used for making and receiving voice calls and short text messages to smartphones capable of playing HD games, watching videos on YouTube, video calls to associates on Skype, reading the latest best seller on Kindle App. and much more. As a result our usage patterns have changed from Voice to Data.</p>
                    <p>The good news is that our service providers have acknowledged this fact and are now offering new plans in which consumers are being charged on the basis of their data usage and Voice is FREE. The best part is that you can now club various devices like your plain old mobile phones, smartphones and tablets under the same data plan.</p>
                    <p>By making small changes to your billing plan you can benefit by saving in the range of 20% or more on your existing monthly invoice. As a consumer it is a great time to realize this great savings opportunity.</p>
                </div>

                <div className="pb-5">
                    <Comment/>
                </div>
            </div>
        )
    }
}

export default blog8;
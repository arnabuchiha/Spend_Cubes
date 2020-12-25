import React from 'react';

class Comment extends React.Component{
    render(){
        return(
            <div className="container pt-4 mb-4">
                <h2 className="text-left">Submit a Comment</h2>
                <p className="text-left">Your email address will not be published. Required fields are marked *</p>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Comment" style={{height:"15vh"}}></textarea>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input type="Email" className="form-control" placeholder="Email Address"/>
                    </div>
                    <div className="form-group">
                        <input type="Website" className="form-control" placeholder="Website"/>
                    </div>
                    
                    <div>
                        <button type="submit" class="btn btn-primary float-left">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Comment;
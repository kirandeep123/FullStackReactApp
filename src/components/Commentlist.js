import React from 'react';

export const CommentList = ( {comments}) =>(
    <React.Fragment>
        <h3>comments</h3>
    {comments.map( (comment,key) => (
        <div key={key} className="comment">
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
    </div>))
    }
    </React.Fragment>
)
    

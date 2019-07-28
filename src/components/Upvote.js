import React from 'react';

export const Upvote = ({articleName,upvotes,setArticleInfo}) =>{

    const upvoteArticle = async () =>{
      const result = await fetch(`/api/articles/${articleName}/upvote`,{method:'post'});
        const body =await result.json();
        setArticleInfo(body);
    }
    
    return(<div id ="upvote-section">   
    <button onClick={()=>upvoteArticle()}> Add Upvote</button>
    <p>this post has been upvotes {upvotes}times</p>
</div>
    )}




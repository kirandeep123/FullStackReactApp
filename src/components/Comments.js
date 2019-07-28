import React,{useState} from "react";
import { async } from "q";

export const Comments = ( {articleName,setArticleInfo}) => {


    const [username,setUsername] = useState('');
    const [text,setText] =useState('');
    const addComment = async() =>{
        const result = await fetch(`/api/articles/${articleName}/comment`,{
            method:'post',
            body:JSON.stringify({username,text:text}),
            headers:{
                'Content-Type':'application/json',
            }
            });
        const body = await result.json();
       setArticleInfo(body);
       setUsername('')
       setText('')
    }
    
  
    return (
    <div id ="add-comment-form">
    <label>Username 
    <input type="text" placeholder="username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
    </label>

    <label>Text 
    <textarea rows="4" cols="50" placeholder="text" value={text} onChange={(event)=>setText(event.target.value)}/>
    </label>

      <button onClick={()=>addComment()}>Add Comment</button>
    </div>
  );
}

import React ,{useState,useEffect} from "react";
import articles from './article-content';
import {ArticlesList} from '../components/ArticleList';
import { Notfound } from "./NotFound";
import { async } from "q";

export const ArticlePage = ( {match}) => {  
      
    const name =match.params.name;
    var article = articles.find( article => article.name === name);
    const [articleInfo,setArticleInfo] =useState({upvotes:0,comments:[]})
        // its like component did mount loads when componends loads 
        // empty array means use effect is looking into this array whenever changes 
        // if this is empty , it means it will load only first time 
        // passing name to it means we want it to update wheever url changes
    useEffect( ()=>{
        const fetchData = async ()=> {
                const result = await fetch(`/api/articles/${name}`);
                console.log(await result.json());
                //   const body  = await result.json();
                //  setArticleInfo(body);
        } 
        fetchData();
    },[name]);
    
    const otherArticles = articles.filter( (article,key) => article.name!==name)
    if(!article) return <Notfound/>
        return(
       
        <React.Fragment>
          <h1 key={article.title}> {article.title}</h1>
          <p >this post has been upvotes {articleInfo.upvotes}times</p>
        {article.content.map(item => <p key ={item.title}>{item}</p>)}
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles}/>
        </React.Fragment>
        );
}


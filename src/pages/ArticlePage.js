import React ,{useState,useEffect} from "react";
import articles from './article-content';
import {ArticlesList} from '../components/ArticleList';
import { Notfound } from "./NotFound";
import { async } from "q";
import {CommentList} from '../components/Commentlist'
import {Upvote} from '../components/Upvote';
import  { Comments } from '../components/Comments';
export const ArticlePage = ( {match}) => {  
      
    const name =match.params.name;
    var article = articles.find( article => article.name === name);
    const [articleInfo,setArticleInfo] =useState({upvotes:0,comments:[]})
        // its like component did mount loads when componends loads 
        // empty array means use effect is looking into this array whenever changes 
        // if this is empty , it means it will load only first time 
        // passing name to it means we want it to update wheever url changes
    useEffect( () => {
        const fetchData = async ()=> {
                const result = await fetch(`/api/articles/${name}`);   
                const body  = await result.json();
                 setArticleInfo(body);
        } 
        fetchData();
    },[name]);
    
    const otherArticles = articles.filter( (article,key) => article.name!==name)
    if(!article) return <Notfound/>
        return(
       
        <React.Fragment>
          <h1 key={article.title}> {article.title}</h1>
          <Upvote articleName ={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
        {article.content.map(item => <p key ={item.title}>{item}</p>)}
        <Comments setArticleInfo={setArticleInfo} articleName={name}/>

        <CommentList comments ={articleInfo.comments}/>
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles}/>
        </React.Fragment>
        );
}   


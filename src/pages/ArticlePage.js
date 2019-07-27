import React from "react";
import articles from './article-content';
import {ArticlesList} from '../components/ArticleList';
import { Notfound } from "./NotFound";

export const ArticlePage = ( {match}) => {  
      
    const name =match.params.name;
    var article = articles.find( article => article.name === name);

   
    
    const otherArticles = articles.filter( (article,key) => article.name!==name)
    if(!article) return <Notfound/>
        return(
       
        <React.Fragment>
          <h1> {article.title}</h1>
        {article.content.map(item => <p key ={item.title}>{item}</p>)}
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles}/>
        </React.Fragment>
        );
}


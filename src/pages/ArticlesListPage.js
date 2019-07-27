import React from "react";
import articles from './article-content';
import {ArticlesList} from '../components/ArticleList'

export const ArticlesListPage = () => (

  <React.Fragment>
   
    <h1>Articles </h1>
   <ArticlesList articles ={articles}/>

    </React.Fragment>
    
    );


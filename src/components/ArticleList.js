import React from 'react';
import {Link} from 'react-router-dom';
export const ArticlesList = ( {articles}) =>{
    return (
        <React.Fragment>
    {articles.map(
         (article ,key) =>(

        <Link className="article-list-item" key={article.name} to ={`/article/${article.name}`}>
            <h1>{article.title}</h1>
           <p>{article.content[0].slice(0,150)}...</p>
        </Link>
         ))}
        </React.Fragment>
    )}
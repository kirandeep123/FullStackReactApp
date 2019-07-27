import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticleList } from "./pages/ArticlesList";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/article" component={ArticlePage} />
          <Route path="/article-list" component={ArticleList} />
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <ArticleList posts={blogData.posts} />
      <About about={blogData.about} image={blogData.image} />
    </div>
  );
}

export default App;

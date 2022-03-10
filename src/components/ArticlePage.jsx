// import { Link } from "react-router-dom";
import { getArticleById } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function ArticlePage() {
  const { article_id } = useParams()
  console.log(article_id)
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({})


  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticle(article);        
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>please standby...</p>;

    return (
      <section className="articlePage">
      <article id={article_id} className="ArticlePage">
        <h1>{article.article.title}</h1>
        <p>{article.article.created_at}</p>
        <div className="articlePageInfo">
          <p>Topic: {article.article.topic}</p>
          <p>Author: {article.article.author}</p>
          <p>Votes: {article.article.votes}</p>
          <p>Body: {article.article.body}</p>
          <p>Comments: {article.article.comment_count}</p>
        </div>
      </article>
  </section>
  )
}
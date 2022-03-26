// import { Link } from "react-router-dom";
import { getArticleById } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentDisplay from "./CommentDisplay";
import ArticleVote from "./ArticleVote";


export default function ArticlePage() {
  const { article_id } = useParams()
  console.log(article_id)
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({})
  const [comments, setComments] = useState({})


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
        <p>Votes: {article.article.votes}</p>
        <ArticleVote/>
        <div className="articlePageInfo">
          <p>Topic: {article.article.topic}</p>
          <p>Author: {article.article.author}</p>
          <p>{article.article.body}</p>
          <p>Comments: {article.article.comment_count}</p>
          <div className="commentSection"> 
          <p>
            <CommentDisplay/>
          </p>
          </div>
        </div>
      </article>
  </section>
  )
}
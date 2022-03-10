// import { Link } from "react-router-dom";
import { getArticleById, getComments} from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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
    getComments(article_id).then((comments) => {
      setComments(comments);
    })
  }, [article_id]);

  if (isLoading) return <p>please standby...</p>;

    return (
      <section className="articlePage">
      <article id={article_id} className="ArticlePage">
        <h1>{article.article.title}</h1>
        <p>{article.article.created_at}</p>
        <p>Votes: {article.article.votes}</p>
        <div className="articlePageInfo">
          <p>Topic: {article.article.topic}</p>
          <p>Author: {article.article.author}</p>
          <p>Body: {article.article.body}</p>
          <p>Comments: {article.article.comment_count}</p>
          <div className="commentSection"> 
          <p>
            // comments body, votes, created_at, author HERE
          </p>
          </div>
        </div>
      </article>
  </section>
  )
}
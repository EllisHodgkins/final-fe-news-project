// import { Link } from "react-router-dom";
import { getArticleByQuery } from "../api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleTile from "./ArticleTile";


export default function ArticlePage() {
  let [searchParams, setSearchParams]= useSearchParams()
  const topic = searchParams.get("topic")
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState({})


  useEffect(() => {
    setIsLoading(true);
    getArticleByQuery(topic).then((articles) => {
      setArticles(articles);        
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>please standby...</p>;

    return (
<section className="articlesTiles">
        {articles.articles.map(({ article_id, title, body, topic, author, votes, created_at, comment_count }) => {
          return (
            <ArticleTile
            article_id={article_id}
            title={title}
            body={body}
            topic={topic}
            author={author}
            votes={votes}
            created_at={created_at}
            comment_count={comment_count}
            />
          );
        })}
      </section>
    );
}
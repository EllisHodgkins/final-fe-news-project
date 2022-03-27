// import { Link } from "react-router-dom";
import { getArticleByQuery, getArticleByOrder } from "../api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleTile from "./ArticleTile";


export default function ArticlePage() {
  let [searchParams, setSearchParams]= useSearchParams()
  const topic = searchParams.get("topic")
  const sort_by = searchParams.get("sort_by")
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState({})


  useEffect(() => {
    console.log(topic)
    console.log(sort_by)
    setIsLoading(true);
    if(topic) {
      getArticleByQuery(topic).then((articles) => {
        setArticles(articles);        
        setIsLoading(false);
      });
    }
    if(sort_by) {
      getArticleByOrder(sort_by).then((articles) => {
        setArticles(articles);        
        setIsLoading(false);
      });
    }
    
  }, [topic, sort_by]);

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
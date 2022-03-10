import { useState, useEffect } from "react";
import ArticleTile from "./ArticleTile"
import {getArticles} from "../api";


  export default function ArticleDisplay({topic}) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(true);
      getArticles(topic).then((articles) => {
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
  
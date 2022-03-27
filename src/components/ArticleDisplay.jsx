import { useState, useEffect } from "react";
import ArticleTile from "./ArticleTile"
import {getArticles, getArticleByOrder} from "../api";
import { Link } from "react-router-dom";


  export default function ArticleDisplay() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(true);
      getArticles().then((articles) => {
        setArticles(articles);        
        setIsLoading(false);
      });
    }, []);

    if (isLoading) return <p>please standby...</p>;
    return (
      <section className="articlesTiles">
        <div>
          <Link to={`/articles?sort_by=votes`}><h4 className="sorter">Most popular</h4></Link>
          <Link to={`/articles?sort_by=created_at`}><h4 className="sorter">Most recent</h4></Link>
          <Link to={`/articles?sort_by=comment_count`}><h4 className="sorter">Most talked about</h4></Link>

        </div>
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
  
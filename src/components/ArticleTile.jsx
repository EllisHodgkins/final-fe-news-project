import { Link } from "react-router-dom";


export default function ArticleTile({ article_id, title, topic, author, body, created_at, votes, comment_count }) {
      
    return (
      
      <article id={article_id} className="ArticleTile">
        <Link className="main-article-title" to={`/articles/${article_id}`}>{title}</Link>
        <div className="articleInfo">
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Votes: {votes}</p>
          <p>Comments: {comment_count}</p>
        </div>
      </article>
    );
  }
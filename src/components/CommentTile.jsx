import { Link } from "react-router-dom";


export default function CommentTile({ comment_id, author, body, created_at, votes }) {
      
    return (
      
      <article id={comment_id} className="CommentTile">
        <div className="commentInfo">
          <p>User: {author}</p>
          <p>{created_at}</p>
          <p>Votes: {votes}</p>
          <p>Comment: {body}</p>
        </div>
      </article>
    );
  }
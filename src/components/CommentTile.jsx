import { Link } from "react-router-dom";
import { deleteComment } from "../api";


export default function CommentTile({ comment_id, author, body, created_at, votes }) {
      const handleDelete = (comment_id) => {
        deleteComment(comment_id);
}

    return (
      
      <article id={comment_id} className="CommentTile">
        <div className="commentInfo">
          <p>User: {author}</p>
          <p>{created_at}</p>
          <p>Votes: {votes}</p>
          <p>Comment: {body}</p>
          <button onClick={() => handleDelete(comment_id)}>Delete</button>
        </div>
      </article>
    );
  }
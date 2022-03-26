import { useState, useEffect } from "react";
import {getComments} from "../api";
import CommentTile from "./CommentTile";
import { useParams } from "react-router-dom";
import PostComment from "./PostComment";


export default function CommentDisplay({comment}) {
    const { article_id } = useParams()
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getComments(article_id).then((comments) => {
          setComments(comments);        
          setIsLoading(false);
        });
      }, [article_id]);
      
      if (isLoading) return <p>please standby...</p>;
      return (
        <section className="commentsTiles">
          <div><PostComment/></div>
          {comments.comments.map(({ comment_id, body, article_id, author, votes, created_at }) => {
            return (
              <CommentTile
              comment_id={comment_id}
              body={body}
              article_id={article_id}
              author={author}
              votes={votes}
              created_at={created_at}
              />
            );
          })}
        </section>
      );
}
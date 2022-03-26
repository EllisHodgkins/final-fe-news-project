import { useState, useEffect } from "react";
import {postComment, getComments} from "../api";
import { useParams } from "react-router-dom";


export default function PostComment() {
const { article_id } = useParams();
const [comment, setComment] = useState({});
const [username, setUsername] = useState({});
const [message, setMessage] = useState({});
const [attemptedPost, setAttemptedPost] = useState(false);

const handleChangeUsername = (event) => {
const { value, name } = event.target;
setUsername({[name]: value});
console.log(username)
}

const handleChangeComment = (event) => {
    const { value, name } = event.target;
    setComment({[name]: value});
    console.log(comment)
}

const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, comment, username)
    .then(response => {
    setAttemptedPost( true );
    setMessage({message: "Your comment has been posted successfully!"})
    setUsername("");
    setComment("");
    })
    .catch(err => {
        setAttemptedPost( true );
        setMessage({message: "Something went wrong - please check username"});
        setUsername("");
        setComment("");
    })
}

return (
    attemptedPost ?
<section>
   <form onSubmit={handleSubmit}>
    <input placeholder="username" name="username" onChange={handleChangeUsername}></input>
    <textarea placeholder="Enter your comment here" name="body" onChange={handleChangeComment}></textarea>
    <button>Submit</button>
   </form>
   <h4>{message.message}</h4>
</section>
    :
<section>
   <form onSubmit={handleSubmit}>
    <input placeholder="username" name="username" onChange={handleChangeUsername}></input>
    <textarea placeholder="Enter your comment here" name="body" onChange={handleChangeComment}></textarea>
    <button>Submit</button>
   </form>
</section>
)
}

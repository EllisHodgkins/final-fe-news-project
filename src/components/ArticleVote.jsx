import { useState, useEffect } from "react";
import { patchArticleVotes } from "../api";
import { useParams } from "react-router-dom";

export default function ArticleVote() {
    const { article_id } = useParams()

const handleUpvote = (event) => {
    patchArticleVotes(article_id, 1)
}

const handleDownvote = (event) => {
    patchArticleVotes(article_id, -1)
}


    return (
        <section>
            <button onClick={handleUpvote}>👍</button>
            <button onClick={handleDownvote}>👎</button>  
        </section>
    )
}


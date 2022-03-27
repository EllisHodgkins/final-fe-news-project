import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://nc-news-example-seminar-2-4.herokuapp.com/api'
  });

const getArticles = () => {
    return newsApi.get(`/articles`) 
    .then((response) => {
        return response.data
    })
}

const getArticleById = (article_id) => {
    console.log(article_id)
    return newsApi.get(`/articles/${article_id}`) 
    .then((response) => {
        console.log(response.data)
        return response.data
    })
}

const getArticleByQuery = (topic) => {
    return newsApi.get(`/articles?topic=${topic}`)
    .then((response) => {
        return response.data
    })
}

const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((response) => {
        return response.data
    })
}

const postComment = ( article_id, body, username ) => {
    return newsApi.post(`/articles/${article_id}/comments`, {
        username: username.username,
        body: body.body
    }).then((response) => {
        return response.data;
    })
}

const patchArticleVotes = ( article_id, inc_votes ) => {
    return newsApi.patch(`/articles/${article_id}`, {
        inc_votes: inc_votes
    }).then((response) => {
        return response.data;
    })
}

const deleteComment = (comment_id) => {
    return newsApi.delete(`/comments/${comment_id}`)
    .then((response) => {
        return response.data
    })
}

const getArticleByOrder = (order) => {
    return newsApi.get(`/articles?sort_by=${order}`)
    .then((response) => {
        return response.data
    })
}
 

export { getArticles, newsApi, getArticleById, getArticleByQuery, getComments, postComment, patchArticleVotes, deleteComment, getArticleByOrder };
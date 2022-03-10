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


export {getArticles, newsApi, getArticleById};
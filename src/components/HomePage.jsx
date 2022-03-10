import React from "react"
import ArticleDisplay from "./ArticleDisplay"

export default function HomePage({filter}) {

    return (
        <div id="homepage">
            <ArticleDisplay filter={filter}/>
        </div>
    )
}
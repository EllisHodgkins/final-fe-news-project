import { getArticles } from "../api";
import React from "react";
import { Link } from "react-router-dom";


export default function Header({setFilter, setContent}) {
    getArticles()

    return (
      <header id="header-container">
        <div id="main-title">
            <Link to={`/`}><h1 className="Logo">NC News</h1></Link>
            <div id="topic-nav">
            <Link to={`/articles?topic=coding`}><h2 className="Topic">Coding</h2></Link>
            <Link to={`/articles?topic=football`}><h2 className="Topic">Football</h2></Link>
            <Link to={`/articles?topic=cooking`}><h2 className="Topic">Cooking</h2></Link>
        </div>
        </div>
      </header>
    );
  }
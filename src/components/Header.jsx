import { getArticles } from "../api";
import React from "react";
import { Link } from "react-router-dom";


export default function Header({setFilter, setContent}) {
    getArticles()

    return (
      <header id="header-container">
        <div id="main-title">
            <Link to={`/`}><h1 className="Logo">NC News</h1></Link>
        </div>
      </header>
    );
  }
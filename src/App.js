import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import ArticleDisplay from './components/ArticleDisplay';
import ArticleTile from './components/ArticleTile';
import ArticlePage from './components/ArticlePage';
import { Routes, Route } from 'react-router-dom';


const App = () => { 

 return (
    <div className="App">
     <Header/>
     <Routes>
       
       <Route path="/" element={<HomePage/>}/>
       <Route path="/articles/:article_id" element={<ArticlePage/>}/>
       
     </Routes>
    </div>
 )
 }

export default App;

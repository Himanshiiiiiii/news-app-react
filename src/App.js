import { useEffect, useState } from 'react';
import './App.css';
import Navnews from './components/Navnews';
import NewsContent from './components/NewsConent/NewsContent';
import axios from 'axios';
import config from "./data/config.js";
import Footer from './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setloadmore] =useState(20);

  const newsApi = async () => {
    try {
      
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.apiKey}&category=${category}&pageSize=${loadmore}`);
      setNewsArray(news.data.articles); // Extracting articles array from response data
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    
  }, [newsResults,category,loadmore]);

  return (
    <div className="App">
      <Navnews setCategory={setCategory} />
      <NewsContent loadmore={loadmore} setloadmore={setloadmore}
       newsArray={newsArray} newsResults={newsResults} />
      <Footer/>
    </div>
  );
}

export default App;

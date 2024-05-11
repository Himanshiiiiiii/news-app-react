import { Container } from '@mui/material';
import React from 'react';
import "./NewsContent.css";
import NewsCard from '../NewsCard/NewsCard';

function NewsContent({ newsArray, newsResults, loadmore, setloadmore }) {
  // Ensure newsArray is an array before mapping
  const renderNews = Array.isArray(newsArray) && newsArray.length > 0 && newsArray.map((newsItem) => (
    <NewsCard newsItem={newsItem} key={newsItem.title} />
  ));



  return (
    <Container maxWidth="md">
      <div className='content'>
        <div className='downloadMessage'>
          <span className='downloadText'>For the best experience use NEWS App on your smartphone</span>
          <img src="google_play.webp" height="80%" alt="play store icon" />
          <img src="app_store.png" height="80%" alt="app store icon" />
        </div>
        {renderNews}

        {loadmore <= newsResults &&(
          <>
          <hr/>
          <button className='loadmore' onClick={()=> setloadmore(loadmore+20)}>Load More</button>
          </>
        )}

      
       
      </div>


    </Container>
  );
}

export default NewsContent;

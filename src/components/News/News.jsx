import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';

//assets
import news from '../../assets/sampleData/news.js'

function News({ topic }) {

  // const [articles, setArticles] = useState(news);
  useEffect(()=>{},[news])

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
  //     params: {
  //       q: { topic },
  //       pageNumber: '1',
  //       pageSize: '10',
  //       autoCorrect: 'true',
  //       safeSearch: 'true',
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API,
  //       'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
  //     },
  //   };
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setArticles(response.data.value);
  //       console.log(response.data.value);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [topic]);
  console.log('NEWS ',news)

  const excerpt = news.value.map((article) => {
      return (
        <div className='newsSelectionContainer'>
          <div className='newsThumb'>
            <img src={article.image.url} alt='article thumbnail' />
          </div>
          <div className='newsTitle'>
            <p>{article.title}</p>
          </div>
        </div>
      );
    });

  return excerpt ? <div>{excerpt}</div> : <div>LOADING...</div>;
}

export default News;

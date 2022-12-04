import React, { useState } from 'react';
import { useEffect } from 'react';

function ExchangeRate() {
  const rssUrl = useState('https://www.fx-exchange.com/eur/rss.xml');
  const [items, setItems] = useState([]);
  const getRss = async () => {
    const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, 'text/xml');
    const items = feed.querySelectorAll('item');
    const feedItems = [...items].map((el) => ({
      title: el.querySelector('title').innerHTML,
      description: el.querySelector('description').innerHTML,
      pubDate: el.querySelector('pubDate').innerHTML,
    }));
    setItems(feedItems);
  };
  
  useEffect(() => {
    getRss();
  }, [items]);

  console.log(items);
  const euroUs = items.filter(
    (feedItem) => feedItem.title === 'Euro(EUR)/US Dollar(USD)'
  );
  return (
    <div className='App'>
      {euroUs.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.pubDate}</p>
          </div>
        );
      })}
    </div>
  );
}
//   return (
//     <div><a href="https://www.fx-exchange.com/eur/rss.xml">Euro(EUR) To US Dollar(USD) Currency Exchange</a></div>
//   )
// }

export default ExchangeRate;

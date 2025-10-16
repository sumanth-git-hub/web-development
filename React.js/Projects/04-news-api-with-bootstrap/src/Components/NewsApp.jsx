import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import NewsCards from "./NewsCards";
import TimeAndDate from "./TimeAndDate";

const NewsApp = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [newsCategory, setNewsCategory] = useState("general")

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${newsCategory}&pageSize=100&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.articles);
        setNewsArticles(data.articles);
      });
  }, [newsCategory]);

  return (
    <section>
      <Navigation setNewsCategory={setNewsCategory} />
      <div className="position-relative py-2 mx-5">
      <h2 className="text-center fs-3 text mt-2">
        Latest <span className="badge bg-danger">News</span> Updates!
      </h2>
        <TimeAndDate />
      </div>
      <div className="d-flex justify-content-center flex-wrap p-2 gap-3">
        {newsArticles.map((news, index) => {
          return (
            <NewsCards
              key={index}
              newsHeadline={news.title}
              newsDescription={news.description}
              readMore={news.url}
              featuredImage= {news.urlToImage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NewsApp;

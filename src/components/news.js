import React, { useState, useEffect } from "react";
import Newsitem from "./newsitem";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${CapitalizeFirstLetter(props.category)}-Khabar`;
    updateNews();
  }, [page]);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(30);
    let parsed_data = await data.json();
    props.setProgress(50);
    setArticles((prevArticles) => [...prevArticles, ...parsed_data.articles]);
    setTotalResults(parsed_data.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div id="header_headlines" className="headlines">
        <h1
          className="text-center"
          style={{ marginTop: "100px", fontFamily: "ini" }}
        >
          Top {CapitalizeFirstLetter(props.category)} Headlines
        </h1>
      </div>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div key={element.url} className="col md-4">
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  source={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;

import React, { Component } from "react";
import Newsitem from "./newsitem";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
  CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.CapitalizeFirstLetter(
      this.props.category
    )}-Khabar`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(10);
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsed_data = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsed_data.articles,
      totalResults: parsed_data.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: this.state.articles.concat(parsed_data.articles),
      totalResults: parsed_data.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div id="header_headlines" className="headlines">
          <h1 className="text-center" style={{ margin: "100px 0px" }}>
            Top {this.CapitalizeFirstLetter(this.props.category)} Headlines
          </h1>
        </div>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
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
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default news;

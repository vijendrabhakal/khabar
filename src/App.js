import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import News from "./components/news";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 12;
  country = "in";
  apikey = "4ca48a6bd1564398925e537f69273108";

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  api={this.apikey}
                  setProgress={this.setProgress}
                  key="general"
                  category="general"
                  country={this.country}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  api={this.apikey}
                  setProgress={this.setProgress}
                  key="business"
                  category="business"
                  country={this.country}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  api={this.apikey}
                  setProgress={this.setProgress}
                  key="entertainment"
                  category="entertainment"
                  country={this.country}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  api={this.apikey}
                  setProgress={this.setProgress}
                  key="health"
                  category="health"
                  country={this.country}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  api={this.apikey}
                  setProgress={this.setProgress}
                  key="science"
                  category="science"
                  country={this.country}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  api={this.apikey}
                  setProgress={this.setProgress}
                  key="technology"
                  category="technology"
                  country={this.country}
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  api={this.apikey}
                  setProgress={this.setProgress}
                  key="sports"
                  category="sports"
                  country={this.country}
                  pageSize={this.pageSize}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

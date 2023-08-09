import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import News from "./components/news";

export default class App extends Component {
  pageSize = 3;
  country = "in";

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
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

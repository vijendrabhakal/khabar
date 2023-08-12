import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import News from "./components/news";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 12;
  const country = "in";
  const apikey = "4ca48a6bd1564398925e537f69273108";

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                api={apikey}
                setProgress={setProgress}
                key="general"
                category="general"
                country={country}
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                api={apikey}
                setProgress={setProgress}
                key="business"
                category="business"
                country={country}
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                api={apikey}
                setProgress={setProgress}
                key="entertainment"
                category="entertainment"
                country={country}
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                api={apikey}
                setProgress={setProgress}
                key="health"
                category="health"
                country={country}
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                api={apikey}
                setProgress={setProgress}
                key="science"
                category="science"
                country={country}
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                api={apikey}
                setProgress={setProgress}
                key="technology"
                category="technology"
                country={country}
                pageSize={pageSize}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                api={apikey}
                setProgress={setProgress}
                key="sports"
                category="sports"
                country={country}
                pageSize={pageSize}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, url, author, date } = this.props;

    return (
      <div className="my-3" style={{ width: "24rem" }}>
        <div
          className="card"
          style={{
            height: "500px",
            marginBottom: "50px",
            width: "24rem",
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span
            className="badge rounded-pill text-bg-danger"
            style={{
              margin: "-15px -30px 5px 200px",
            }}
          >
            By {!author ? "Unknown" : author}
          </span>
          <img
            style={{
              maxWidth: "23rem",
              maxHeight: "180px",
            }}
            src={imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
          <div
            className="card-footer"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href={url}
              className="btn btn-sm btn-dark"
              rel="noreferrer"
              target="_blank"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

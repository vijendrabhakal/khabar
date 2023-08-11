import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, url, source, date } = this.props;

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
          <div
            className="d-flex"
            style={{
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
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

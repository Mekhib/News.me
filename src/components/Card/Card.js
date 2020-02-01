import React, { Component } from "react";
import "../Card/Card.css";

function Card(props) {
  console.log(props);
  return props.data.articles.map(story => {
    return (
      <div className="card">
        <div className="image">
          <img
            src={
              story.urlToImage
                ? story.urlToImage
                : "https://colorlib.com/wp/wp-content/uploads/sites/2/thumbnail_newspaper-mockups.jpg"
            }
            alt="news article"
          />
        </div>
        <div className="content">
          <div className="header">{story.title}</div>
          <div className="meta">
            <a>
              From {story.source.name} - By: {story.author}
            </a>
          </div>
          <div className="description">{story.description}</div>
        </div>
        <div className="extra content">
          <a>
            <i className="external alternate icon"></i>
            {story.url}
          </a>
        </div>
      </div>
    );
  });
}

export default Card;

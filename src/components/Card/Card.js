import React, { Component } from "react";

function Card(props) {
  const style = {
    width: "92em !important",
    marginLeft: "5em !important"
  };
  console.log(props);
  return props.data.articles.map(story => {
    return (
      <div
        className="card"
        style={{ width: "92em !important", marginLeft: "5em !important" }}
      >
        <div className="image">
          <img src={story.urlToImage} />
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

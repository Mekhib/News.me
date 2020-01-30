import "../../CssData/stories.css";
import { render } from "react-dom";
import ImageGallery from "react-image-gallery";
var React = require("react");
var ReactDOM = require("react-dom");

function Stories(props) {
  console.log(props.TopStories);
  return (
    <ImageGallery
      items={props.TopStories}
      autoPlay={false}
      showPlayButton={false}
      defaultImage="https://cdn.pixabay.com/photo/2017/08/17/13/33/classified-2651347_960_720.jpg"
      slideInterval={5000}
      thumbnailPosition="left"
    />
  );
}

export default Stories;

import React, { Component } from "react";
import Sources from "./Sources";

class logo extends Component {
  componentDidMount() {
    console.log("hello", this.props.Images.data);
  }
  render() {
    return this.props.Images.map(img => {
      var result = img.id.replace(/-/g, "");
      return <Sources img={result} />;
    });
  }
}
export default logo;

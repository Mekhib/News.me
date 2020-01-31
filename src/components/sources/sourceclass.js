import React, { Component } from "react";
import Sources from "./Sources";

class logo extends Component {
  componentDidMount() {
    console.log("hello", this.props.Images.data);
  }
  render() {
    return this.props.Images.map((img, index) => {
      var result = img.id.replace(/-/g, "");
      return (
        <Sources
          img={result}
          index={index}
          key={index}
          SourceSelection={this.props.SourceSelection}
        />
      );
    });
  }
}
export default logo;

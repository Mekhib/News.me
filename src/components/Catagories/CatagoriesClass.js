import React, { Component } from "react";
import Catagory from "./Catagory";

class Catpics extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return this.props.Catogories.map((cat, index) => {
      return (
        <Catagory
          Catagory={cat.Catogory}
          Image={cat.Image}
          CatPick={this.props.CatPick}
          index={index}
        />
      );
    });
  }
}

export default Catpics;

import React, { Component } from "react";
import "../Catagories/Catagory.css";

function Cat(props) {
  var style = {
    backgroundImage: `url(${props.Image})`
  };
  return (
    <div
      className="module"
      style={style}
      onClick={props.CatPick(props.Catagory[props.index])}
    >
      <header>
        <h1>{props.Catagory}</h1>
      </header>
    </div>
  );
}

export default Cat;

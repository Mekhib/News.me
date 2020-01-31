import React, { Component } from "react";

function SourceProp(props) {
  console.log(props);
  var style = {
    borderRadius: "23px",
    backgroundImage: `url("https://logo.clearbit.com/${props.img}.com?size=200"), url("https://a57.foxnews.com/media.foxbusiness.com/BrightCove/854081161001/201909/1415/640/360/854081161001_6085087408001_6085084784001-vs.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "13em",
    width: "21em",
    padding: "5px",
    marginRight: "5em",
    p: {
      fontSize: "29px",
      textAlign: "center",
      top: "44em",
      marginLeft: "0.0em",
      background: "black",
      color: "yellow",
      borderRadius: "12px",
      padding: "0em",
      transform: "translate(8px, 127px)",
      width: "270px"
    }
  };
  return (
    <div
      className="logo"
      style={style}
      onClick={() => props.SourceSelection(props.index)}
    >
      <p style={style.p}>{props.img}</p>
    </div>
  );
}

export default SourceProp;

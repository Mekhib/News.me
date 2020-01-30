import React, { Component } from "react";
import CatClass from "../Catagories/CatagoriesClass";
import "../Grid/grid.css";

function Grid(props) {
  console.log(props);
  return (
    <div className="parent">
      <div className="div1">
        <CatClass
          Catogories={props.Catogories}
          CatPick={props.CatagoryPicked}
        ></CatClass>
      </div>
    </div>
  );
}

export default Grid;

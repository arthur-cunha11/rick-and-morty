import "../styles/search.css";
import loading from "../images/Loading.svg";
import React from "react";

/*
This component is render everytime a query is executed
It shows an image and a loading text in the middle of page and blur the background
*/
const Loading = () => {
  return (
    <div className="search__loading">
      <img alt="Loading" className="search__loading--image" src={loading} />
      <p className="search__loading--text">Loading</p>
    </div>
  );
};

export default Loading;

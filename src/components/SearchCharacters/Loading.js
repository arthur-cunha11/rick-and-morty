import "../../styles/search.css";
import loading from "../../images/Loading.svg";
import React from "react";

const Loading = () => {
  return (
    loading && (
      <div className="search__loading">
        <img alt="Loading" className="search__loading--image" src={loading} />
        <p className="search__loading--text">Loading</p>
      </div>
    )
  );
};

export default Loading;

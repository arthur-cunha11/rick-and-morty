import "../../styles/search.css";
import React, { useState } from "react";
import CardDetails from "./CardDetails";

const SearchResult = (props) => {
  const characters = props?.characters?.results;

  const [open, setOpen] = useState("");

  return characters?.map((element) => {
    return (
      <div key={element.id}>
        <div className="card" onClick={() => setOpen(element.id)}>
          <img
            alt="Character card"
            className={`card__image ${
              element.status === "Dead" ? "card__image--dead" : ""
            }`}
            src={element.image}
          />
          <div className="card__text">
            <span>{element.name}</span>
            <p>{element.species}</p>
          </div>
        </div>
        <div
          className={`card__details ${
            open === element.id ? "open" : "close"
          }`}
        >
          <div className="card__details__button">
            <button onClick={() => setOpen("")} type="button">
              Close
            </button>
          </div>
          <CardDetails selected={open} character={element} />
        </div>
      </div>
    );
  });
};

export default SearchResult;

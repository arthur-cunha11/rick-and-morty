import "../../styles/search.css";
import React, { useState } from "react";
import CardDetails from "./CardDetails/CardDetails";

// This component renders the searched character cards and open the card details
const SearchResult = ({ characters: { results } }) => {
  // It's not Boolean because it compares the searched character id with the clicked one on child component
  const [open, setOpen] = useState("");

  return results?.map((element) => {
    return (
      <div key={element.id}>
        <div className="card" onClick={() => setOpen(element.id)}>
          <img
            alt="Character card"
            className={`card__image ${
              element.status === "Dead" ? "dead" : ""
            }`}
            src={element.image}
          />
          <div className="card__text">
            <span>{element.name}</span>
            <p>{element.species}</p>
          </div>
        </div>
        <div
          className={`card__details ${open === element.id ? "open" : "close"}`}
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

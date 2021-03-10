import React from "react";

// This component renders the background blured and normal image of the character
const CardDetailsImage = ({ character }) => {
  return (
    <div className="card__details__image">
      <img
        alt="Card Detail Blur"
        className="card__details__image--blur"
        src={character?.image}
      />
      <div className="card__details__image--regular">
        <img
          alt="Card Detail"
          src={character?.image}
          className={`${character?.status === "Dead" ? "dead" : ""}`}
        />
        <div className="card__details__image--text">
          <span>{character?.name}</span>
          <p>{character?.species}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsImage;

import React from "react";
import residents from "../../../images/Residents.svg";

// This component renders the "Origin and Location" section inside card details
const CardDetailsPlace = ({ place, text }) => {
  return (
    <div className="card__details__text--origin">
      <h1 className="card__details__text--tittle">{text}</h1>
      <p>{place?.type || "Unknown Planet"}</p>
      <h2>{place?.name || "Unknown"}</h2>
      <span>{place?.dimension || "Unknown dimension"}</span>
      {place?.residents?.[0]?.name && (
        <div className="card__details__text--residents">
          <img alt="Residentes icon" src={residents} />
          <p>{place?.residents?.length + " residents"}</p>
        </div>
      )}
    </div>
  );
};

export default CardDetailsPlace;

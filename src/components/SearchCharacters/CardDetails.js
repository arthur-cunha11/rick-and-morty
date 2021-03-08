import React, { useEffect, useState } from "react";
import residents from "../../images/Residents.svg";

const CardDetails = (props) => {
  const character = props?.character;
  const location = character?.location;
  const origin = character?.origin;
  const selected = props?.selected;

  const [status, setStatus] = useState(
    "It can't be told if it is alive or dead."
  );

  useEffect(() => {
    if (character?.status === "Alive") {
      if (character?.gender === "Male") {
        setStatus("He is alive and well.");
      } else if (character?.gender === "Female") {
        setStatus("She is alive and well.");
      } else {
        setStatus("It is alive and well.");
      }
    } else if (character?.status === "Dead") {
      if (character?.gender === "Male") {
        setStatus("He is dead.");
      } else if (character?.gender === "Female") {
        setStatus("She is dead.");
      } else {
        setStatus("It is dead.");
      }
    } else {
      if (character?.gender === "Male") {
        setStatus("It can't be told if he is alive or dead.");
      } else if (character?.gender === "Female") {
        setStatus("It can't be told if she is alive or dead.");
      }
    }
  }, [character?.gender, character?.status]);

  if (selected === character.id) {
    return (
      <>
        <div className="card__details__image">
          <img
            alt="Card Detail Blur"
            className="card__details__image--blur"
            src={character?.image}
          />
          <div className="card__details__image--regular">
            <img alt="Card Detail" src={character?.image} />
            <div className="card__details__image--text">
              <span>{character?.name}</span>
              <p>{character?.species}</p>
            </div>
          </div>
        </div>
        <div className="card__details__text">
          <div className="card__details__text--about">
            <h1 className="card__details__text--tittle">A B O U T</h1>
            <p>
              {character?.name} is a {character?.gender} {character?.species}.{" "}
              {status} Last seen in{" "}
              {character?.episode?.[character?.episode?.length - 1]?.air_date}.
            </p>
          </div>
          <div className="card__details__text--origin">
            <h1 className="card__details__text--tittle">O R I G I N</h1>
            <p>{origin?.type || "Unknown Planet"}</p>
            <h2>{origin?.name || "Unknown"}</h2>
            <span>{origin?.dimension || "Unknown dimension"}</span>
            {origin?.residents?.[0]?.name && (
              <div className="card__details__text--residents">
                <img alt="Residentes icon" src={residents} />
                <p>{origin?.residents?.length + " residents"}</p>
              </div>
            )}
          </div>
          <div className="card__details__text--location">
            <h1 className="card__details__text--tittle">L O C A T I O N</h1>
            <p>{location?.type || "Unknown Planet"}</p>
            <h2>{location?.name || "Unknown"}</h2>
            <span>{location?.dimension || "Unknown dimension"}</span>
            {location?.residents?.[0]?.name && (
              <div className="card__details__text--residents">
                <img alt="Residentes icon" src={residents} />
                <p>{location?.residents?.length + " residents"}</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default CardDetails;

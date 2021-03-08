import React, { useEffect, useState } from "react";

// This component renders the "About" section inside card details
const CardDetailsPlace = (character) => {
  const [status, setStatus] = useState(
    "It can't be told if it is alive or dead."
  );

  // It makes all possible variations of texts
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

  return (
    <div className="card__details__text--about">
      <h1 className="card__details__text--tittle">A B O U T</h1>
      <p>
        {character?.name} is a {character?.gender} {character?.species}.{" "}
        {status} Last seen in{" "}
        {character?.episode?.[character?.episode?.length - 1]?.air_date}.
      </p>
    </div>
  );
};

export default CardDetailsPlace;

import CardDetailsAbout from "./CardDetailsAbout";
import CardDetailsImage from "./CardDetailsImage";
import CardDetailsPlace from "./CardDetailsPlace";
import React from "react";

// This component renders the character card details info
const CardDetails = ({ character, selected }) => {
  const location = character?.location;
  const origin = character?.origin;

  if (selected === character.id) {
    return (
      <>
        <CardDetailsImage character={character} />
        <div className="card__details__text">
          <CardDetailsAbout character={character} />
          <CardDetailsPlace place={location} text={"L O C A T I O N"} />
          <CardDetailsPlace place={origin} text={"O R I G I N"} />
        </div>
      </>
    );
  }
  return null;
};

export default CardDetails;

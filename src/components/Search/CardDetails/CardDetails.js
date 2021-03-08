import CardDetailsAbout from "./CardDetailsAbout";
import CardDetailsPlace from "./CardDetailsPlace";
import React from "react";

// This component renders the character card details info
const CardDetails = (props) => {
  const { character, selected } = props;

  const location = character?.location;
  const origin = character?.origin;

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

import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="" src={`/data.json/${props.image}`} />
      {/* monster comes off of props because monster is a prop in CardList, where Card is imported */}
      <h2>{props.name}</h2>
      {/* <p>{props.email}</p> */}
    </div>
  );
};

export default Card;

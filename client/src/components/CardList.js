import React from "react";
import Card from "./Card";

const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {/* mernNames comes off props because its a prop in CardList compponent in Home.js */}
      {props.mernNames.map((mernName) => (
        <Card key={mernName.id} mernName={mernName} />
      ))}
    </div>
  );
};

export default CardList;

import React from "react";
import Card from "./Card";
// data
import mernNames from "../json/data.json";

const CardList = () => {
  console.log(mernNames);
  return (
    <div className="card-list">
      {/* mernNames comes off props because its a prop in CardList compponent in Home.js */}
      {mernNames.map((mernName) => (
        <Card key={mernName.id} name={mernName.name} image={mernName.image} />
      ))}
    </div>
  );
};

export default CardList;

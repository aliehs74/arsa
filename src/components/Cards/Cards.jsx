import React from "react";
import Card from "./Card";
import { cardData } from "./cardItems";
export default function Cards() {


  var allCard = Object.keys(cardData).map((key) => <Card key={key} />);

  return <div className="Allcards">{allCard}</div>;
}

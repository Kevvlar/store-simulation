import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import CardItem from "../CardItem/CardItem";

import "./cardList.css";

const mapOrder = (array, order, key) => {
  array.sort(function (a, b) {
    var A = a[key],
      B = b[key];

    if (order.indexOf(A) > order.indexOf(B)) {
      return 1;
    } else {
      return -1;
    }
  });

  return array;
};

const CardList = ({ cards, cardOrder }) => {
  return (
    <Droppable>
      {(provided) => (
        <div className="card-list-container">
          {mapOrder(cards, cardOrder, "id").map((card, index) => (
            <CardItem card={card} key={card.id} index={index} />
          ))}
        </div>
      )}
    </Droppable>
  );
};

export default CardList;

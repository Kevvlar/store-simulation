import React from "react";
import { Draggable } from "react-beautiful-dnd";

import "./cardItem.css";

const CardItem = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className="card-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>{card.title}</p>
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;

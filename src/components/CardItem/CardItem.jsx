import React from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import { getCardData } from "../../redux";

import "./cardItem.css";

const CardItem = ({ card, index, getCardInfo }) => {
  return (
    <Draggable
      onFocus={() => console.log("yes")}
      draggableId={card.id}
      index={index}
    >
      {(provided) => (
        <div
          className="card-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onMouseDown={() => getCardInfo(card)}
        >
          <p>{card.title}</p>
          <p>{card.id}</p>
        </div>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCardInfo: (card) => dispatch(getCardData(card)),
  };
};

export default connect(null, mapDispatchToProps)(CardItem);

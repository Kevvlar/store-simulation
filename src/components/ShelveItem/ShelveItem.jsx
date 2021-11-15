import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { getFocusShelveItem } from "../../redux/index";

import CardForm from "../cardForm/CardForm";
import CardItem from "../CardItem/CardItem";

import "./shelveItem.css";

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

const ShelveItem = ({ shelveItem, index, getFocusShelve }) => {
  return (
    <Draggable draggableId={shelveItem.id} index={index}>
      {(provided) => (
        <div
          className="shelve-item"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="shelve-title-container" {...provided.dragHandleProps}>
            <h2 className="shelve-item-title">{shelveItem.title}</h2>
            <p>{shelveItem.id}</p>
          </div>
          <div>
            <CardForm shelveId={shelveItem.id} />
            <Droppable droppableId={shelveItem.id} type="card">
              {(provided) => (
                <div
                  className="card-list-container"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  onClick={() => {
                    getFocusShelve({
                      id: shelveItem.id,
                      title: shelveItem.title,
                    });
                  }}
                >
                  {mapOrder(shelveItem.cards, shelveItem.cardOrder, "id").map(
                    (card, index) => (
                      <CardItem card={card} key={card.id} index={index} />
                    )
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFocusShelve: (shelveInfo) => dispatch(getFocusShelveItem(shelveInfo)),
  };
};

export default connect(null, mapDispatchToProps)(ShelveItem);

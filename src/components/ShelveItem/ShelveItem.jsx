import React from "react";
import { Draggable } from "react-beautiful-dnd";

// Droppable

import "./shelveItem.css";

const ShelveItem = ({ shelveItem, index }) => {
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
        </div>
      )}
    </Draggable>
  );
};

export default ShelveItem;

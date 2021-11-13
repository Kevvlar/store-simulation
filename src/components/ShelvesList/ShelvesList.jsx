import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import {
  updateSelectShelvesOrder,
  updateShelvesOrderList,
} from "../../redux/index";

import ShelveItem from "../ShelveItem/ShelveItem";

import "./shelvesList.css";

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

const ShelvesList = ({
  shelves,
  shelvesOrder,
  updateSelectOrder,
  updateOrderList,
}) => {
  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    // move shelves
    if (type === "column" && destination.index !== source.index) {
      const newColumnOrder = Array.from(shelvesOrder);
      const [reOrderedItem] = newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, reOrderedItem);

      // send this to column orderState
      updateSelectOrder(newColumnOrder);
      updateOrderList();
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="shelves-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {mapOrder(shelves, shelvesOrder, "id").map((shelve, index) => (
              <ShelveItem shelveItem={shelve} key={shelve.id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => {
  return {
    shelves: state.shelve.selectShelves,
    shelvesOrder: state.shelveOrder.selectShelveOrder.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectOrder: (order) => dispatch(updateSelectShelvesOrder(order)),
    updateOrderList: () => dispatch(updateShelvesOrderList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelvesList);

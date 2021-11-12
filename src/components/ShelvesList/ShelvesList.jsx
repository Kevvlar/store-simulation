import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import {
  updateShelvesOrder,
  updateSelectShelvesOrder,
} from "../../redux/index";

import ShelveItem from "../ShelveItem/ShelveItem";

import "./shelvesList.css";

// const mapOrder = (array, order, key) => {
//   array.sort(function (a, b) {
//     var A = a[key],
//       B = b[key];

//     if (order.indexOf(A) > order.indexOf(B)) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });

//   return array;
// };

const ShelvesList = ({
  shelves,
  shelvesOrder,
  updateOrderSelectShelve,
  updateOrderShelves,
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
      // console.log("Old: ", shelvesOrder);
      // console.log("New: ", newColumnOrder);
      updateOrderSelectShelve(newColumnOrder);
      updateOrderShelves();
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
            {shelves.map((shelve, index) => (
              <ShelveItem shelveItem={shelve} key={index} index={index} />
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
    updateOrderSelectShelve: (order) =>
      dispatch(updateSelectShelvesOrder(order)),
    updateOrderShelves: () => dispatch(updateShelvesOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelvesList);

// {mapOrder(shelves, shelvesOrder, "id").map((shelve, index) => (
//   <ShelveItem shelveItem={shelve} key={index} index={index} />
// ))}

import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import {
  updateSelectShelvesOrder,
  updateShelvesOrderList,
  changeCardOrder,
  removeCard,
  changeCardShelve,
  changeCardShelveId,
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
  updateCardOrder,
  currentShelveId,
  reomveCardData,
  changeCardShelve,
  changeSelectCardId,
}) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

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

    // move card within column
    if (
      source.droppableId === destination.droppableId &&
      source.index !== destination.index &&
      type === "card"
    ) {
      const currentColumn = shelves.find((column) =>
        column.id === destination.droppableId ? column : null
      );
      const newCardOrder = Array.from(currentColumn.cardOrder);
      const [reOrderedCards] = newCardOrder.splice(source.index, 1);
      newCardOrder.splice(destination.index, 0, reOrderedCards);
      // console.log(newCardOrder);

      updateCardOrder({
        shelveId: currentShelveId,
        order: newCardOrder,
      });
    }

    // move card into another column
    if (source.droppableId !== destination.droppableId && type === "card") {
      const targetColumn = shelves.find((column) =>
        column.id === destination.droppableId ? column : null
      );

      const targetColumnCardOrder = targetColumn.cardOrder;
      const newTargetColumnCardOrder = [...targetColumnCardOrder];
      newTargetColumnCardOrder.splice(destination.index, 0, draggableId);

      reomveCardData();
      changeSelectCardId(destination.droppableId);
      changeCardShelve({
        targetShelve: destination.droppableId,
        order: newTargetColumnCardOrder,
      });
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
    currentShelveId: state.shelve.currentShelveId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectOrder: (order) => dispatch(updateSelectShelvesOrder(order)),
    updateOrderList: () => dispatch(updateShelvesOrderList()),
    updateCardOrder: (orderObj) => dispatch(changeCardOrder(orderObj)),
    reomveCardData: () => dispatch(removeCard()),
    changeCardShelve: (changeInfo) => dispatch(changeCardShelve(changeInfo)),
    changeSelectCardId: (newId) => dispatch(changeCardShelveId(newId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelvesList);

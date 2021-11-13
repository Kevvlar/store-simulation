import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  createShelveItem,
  getSelectShelves,
  addShelveToOrder,
  updateShelvesOrderList,
} from "../../redux/index";

import "./shelveForm.css";

const ShelveForm = ({
  addShelve,
  selectShopId,
  getShelves,
  addShelveOrder,
  updateOrderList,
}) => {
  const [shelveName, setShelveName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const shelveId = uuidv4();
        addShelve({
          shopId: selectShopId,
          id: shelveId,
          title: shelveName,
        });
        addShelveOrder(shelveId);
        updateOrderList();
        getShelves(selectShopId);
        setShelveName("");
      }}
      className="shelve-form-container"
    >
      <input
        type="text"
        value={shelveName}
        onChange={(e) => setShelveName(e.target.value)}
        placeholder="enter shelve name"
        className="shelve-form-input"
        required
      />
      <button className="shelve-form-button">Create</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    selectShopId: state.shop.selectShopId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShelve: (shelveItem) => dispatch(createShelveItem(shelveItem)),
    getShelves: (shopId) => dispatch(getSelectShelves(shopId)),
    addShelveOrder: (shelveId) => dispatch(addShelveToOrder(shelveId)),
    updateOrderList: () => dispatch(updateShelvesOrderList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelveForm);

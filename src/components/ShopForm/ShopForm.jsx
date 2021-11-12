import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addShopItem, createShelvesOrder } from "../../redux/index";

import "./shopForm.css";

const ShopForm = ({ addItem, addShelveOrder }) => {
  const [shopName, setShopName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const shopId = uuidv4();
        addItem({
          id: shopId,
          title: shopName,
        });
        addShelveOrder(shopId);
        setShopName("");
      }}
      className="shop-form-container"
    >
      <input
        type="text"
        value={shopName}
        onChange={(e) => setShopName(e.target.value)}
        placeholder="enter board name"
        className="shop-form-input"
        required
      />
      <button className="shop-form-button">Create</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (shopItem) => dispatch(addShopItem(shopItem)),
    addShelveOrder: (shopId) => dispatch(createShelvesOrder(shopId)),
  };
};

export default connect(null, mapDispatchToProps)(ShopForm);

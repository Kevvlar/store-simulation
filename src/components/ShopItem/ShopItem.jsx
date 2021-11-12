import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  selectShopItem,
  deleteShopItem,
  getSelectShelves,
  selectShelvesOrder,
} from "../../redux/index";

import "./shopItem.css";

const ShopItem = ({
  shopItem,
  selectItem,
  history,
  removeItem,
  getShelves,
  getShelveOrder,
}) => {
  return (
    <div className="shop-item-container">
      <li
        className="shop-item"
        onClick={() => {
          getShelves(shopItem.id);
          getShelveOrder(shopItem.id);
          selectItem(shopItem);
          history.push("/shop");
        }}
      >
        {shopItem.title}
      </li>
      <button
        onClick={() => {
          removeItem(shopItem.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectItem: (shopItem) => dispatch(selectShopItem(shopItem)),
    removeItem: (shopItemId) => dispatch(deleteShopItem(shopItemId)),
    getShelves: (shopId) => dispatch(getSelectShelves(shopId)),
    getShelveOrder: (shopId) => dispatch(selectShelvesOrder(shopId)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(ShopItem));

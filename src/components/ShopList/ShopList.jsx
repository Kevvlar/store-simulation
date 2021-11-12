import React from "react";
import { connect } from "react-redux";

import ShopItem from "../ShopItem/ShopItem";

import "./shopList.css";

const ShopList = ({ shopList }) => {
  return (
    <div className="shop-list-holder">
      <ul className="shop-list">
        {shopList.map((item, index) => (
          <ShopItem shopItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shopList: state.shop.shopList,
  };
};

export default connect(mapStateToProps, null)(ShopList);

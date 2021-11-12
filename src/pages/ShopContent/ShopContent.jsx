import React from "react";
import { connect } from "react-redux";
import "./shopContent.css";

import ShelvesList from "../../components/ShelvesList/ShelvesList";
import ShelveForm from "../../components/ShelveForm/ShelveForm";

const ShopContent = ({ shopName }) => {
  return (
    <div className="shop-content-conatiner">
      <h1 className="shops-title">{shopName}</h1>
      <ShelveForm />
      <ShelvesList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shopName: state.shop.selcetShopTitle,
  };
};

export default connect(mapStateToProps, null)(ShopContent);

import React from "react";

import ShopList from "../../components/ShopList/ShopList";
import ShopForm from "../../components/ShopForm/ShopForm";

import "./shopsPage.css";

const ShopsPage = () => {
  return (
    <div className="shops-paage-container">
      <h1 className="shops-title">Shops Area</h1>
      <ShopForm />
      <ShopList />
    </div>
  );
};

export default ShopsPage;

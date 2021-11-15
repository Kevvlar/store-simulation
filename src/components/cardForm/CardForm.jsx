import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addCard } from "../../redux/index";

import "./cardForm.css";

const CardForm = ({ shelveId, createCard }) => {
  const [cardName, setCardName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const cardId = uuidv4();
        const cardObj = {
          shelveId: shelveId,
          id: cardId,
          title: cardName,
        };
        createCard(cardObj);
        setCardName("");
      }}
      className="card-form-container"
    >
      <input
        type="text"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        placeholder="enter card name"
        className="card-form-input"
        required
      />
      <button className="card-form-button">Create</button>
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
    createCard: (cardObj) => dispatch(addCard(cardObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);

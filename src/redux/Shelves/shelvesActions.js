import {
  CREATE_SHELVE_ITEM,
  GET_SELECT_SHELVES,
  DELETE_SHELVES_GLOBAL,
  GET_FOCUS_SHELVE_ITEM,
  ADD_CARD,
  UPDATE_CARD_ORDER,
  GET_CARD_DATA,
  REMOVE_CARD_FROM_SHELVE,
  CHANGE_CARD_SHELVE,
  CHANGE_CARD_SHELVE_ID,
} from "./shelvesTypes";

export const createShelveItem = (shelveItem) => {
  return {
    type: CREATE_SHELVE_ITEM,
    payLoad: shelveItem,
  };
};

export const getSelectShelves = (shopId) => {
  return {
    type: GET_SELECT_SHELVES,
    payLoad: shopId,
  };
};

export const deleteShelvesGlobal = (shopId) => {
  return {
    type: DELETE_SHELVES_GLOBAL,
    payLoad: shopId,
  };
};

export const getFocusShelveItem = (shelveInfo) => {
  return {
    type: GET_FOCUS_SHELVE_ITEM,
    payLoad: shelveInfo,
  };
};

export const addCard = (cardObj) => {
  return {
    type: ADD_CARD,
    payLoad: cardObj,
  };
};

export const changeCardOrder = (orderObj) => {
  return {
    type: UPDATE_CARD_ORDER,
    payLoad: orderObj,
  };
};

export const removeCard = () => {
  return {
    type: REMOVE_CARD_FROM_SHELVE,
  };
};

export const changeCardShelve = (changeInfo) => {
  return {
    type: CHANGE_CARD_SHELVE,
    payLoad: changeInfo,
  };
};

export const changeCardShelveId = (newShelveId) => {
  return {
    type: CHANGE_CARD_SHELVE_ID,
    payLoad: newShelveId,
  };
};

export const getCardData = (card) => {
  return {
    type: GET_CARD_DATA,
    payLoad: card,
  };
};

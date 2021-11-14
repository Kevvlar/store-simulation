import {
  CREATE_SHELVE_ITEM,
  GET_SELECT_SHELVES,
  DELETE_SHELVES_GLOBAL,
  ADD_CARD_TO_SELECT_SHELVE,
  UPDATE_SELECT_SHELVE_CARD_ORDER,
  GET_FOCUS_SHELVE_ITEM,
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

export const addCardToSelectShelve = (cardObj) => {
  return {
    type: ADD_CARD_TO_SELECT_SHELVE,
    payLoad: cardObj,
  };
};

export const updateSelectShelveCardOrder = (cardOrderObj) => {
  return {
    type: UPDATE_SELECT_SHELVE_CARD_ORDER,
    payLoad: cardOrderObj,
  };
};

export const getFocusShelveItem = (shelveInfo) => {
  return {
    type: GET_FOCUS_SHELVE_ITEM,
    payLoad: shelveInfo,
  };
};

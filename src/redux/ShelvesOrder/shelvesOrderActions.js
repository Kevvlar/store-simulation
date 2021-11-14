import {
  CREATE_SHELVES_ORDER,
  SELECT_SHELVES_ORDER,
  ADD_SHELVE_TO_ORDER,
  UPDATE_SELECT_SHELVES_ORDER,
  UPDATE_SHELVES_ORDER_LIST,
  DELETE_SHELVE_ORDER_GLOBAL,
} from "./shelvesOrderTypes";

export const createShelvesOrder = (shopId) => {
  return {
    type: CREATE_SHELVES_ORDER,
    payLoad: shopId,
  };
};

export const selectShelvesOrder = (shopId) => {
  return {
    type: SELECT_SHELVES_ORDER,
    payLoad: shopId,
  };
};

export const addShelveToOrder = (shelveId) => {
  return {
    type: ADD_SHELVE_TO_ORDER,
    payLoad: shelveId,
  };
};

export const updateShelvesOrderList = () => {
  return {
    type: UPDATE_SHELVES_ORDER_LIST,
  };
};

export const updateSelectShelvesOrder = (order) => {
  return {
    type: UPDATE_SELECT_SHELVES_ORDER,
    payLoad: order,
  };
};

export const deleteShelveOrderGlobal = (shopId) => {
  return {
    type: DELETE_SHELVE_ORDER_GLOBAL,
    payLoad: shopId,
  };
};

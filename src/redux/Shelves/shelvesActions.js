import { CREATE_SHELVE_ITEM, GET_SELECT_SHELVES } from "./shelvesTypes";

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

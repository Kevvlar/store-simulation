import { SELECT_SHOP_ITEM, ADD_SHOP_ITEM, DELETE_SHOP_ITEM } from "./shopTypes";

import { deleteShelvesGlobal, deleteShelveOrderGlobal } from "../index";

export const selectShopItem = (shopItem) => {
  return {
    type: SELECT_SHOP_ITEM,
    payLoad: shopItem,
  };
};

export const addShopItem = (shopItem) => {
  return {
    type: ADD_SHOP_ITEM,
    payLoad: shopItem,
  };
};

export const deleteShopItem = (shopItemId) => {
  return {
    type: DELETE_SHOP_ITEM,
    payLoad: shopItemId,
  };
};

export const deleteEntireShop = (shopId) => {
  return (dispatch) => {
    dispatch(deleteShelvesGlobal(shopId));
    dispatch(deleteShelveOrderGlobal(shopId));
    dispatch(deleteShopItem(shopId));
  };
};

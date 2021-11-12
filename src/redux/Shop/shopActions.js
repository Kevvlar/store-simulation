import { SELECT_SHOP_ITEM, ADD_SHOP_ITEM, DELETE_SHOP_ITEM } from "./shopTypes";

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

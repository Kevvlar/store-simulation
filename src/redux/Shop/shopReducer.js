import { SELECT_SHOP_ITEM, ADD_SHOP_ITEM, DELETE_SHOP_ITEM } from "./shopTypes";

const initialState = {
  selectShopId: "",
  selcetShopTitle: "",
  shopList: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SHOP_ITEM:
      return {
        ...state,
        selectShopId: action.payLoad.id,
        selcetShopTitle: action.payLoad.title,
      };

    case ADD_SHOP_ITEM:
      return {
        ...state,
        selectShopId: "",
        selcetShopTitle: "",
        shopList: [
          ...state.shopList,
          { id: action.payLoad.id, title: action.payLoad.title },
        ],
      };

    case DELETE_SHOP_ITEM: {
      return {
        ...state,
        shopList: state.shopList.filter((item) => item.id !== action.payLoad),
        selectShopId: "",
        selcetShopTitle: "",
        shelvesOrder: [],
      };
    }

    default:
      return state;
  }
};

export default shopReducer;

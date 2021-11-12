import {
  CREATE_SHELVES_ORDER,
  SELECT_SHELVES_ORDER,
  ADD_SHELVE_TO_ORDER,
  UPDATE_SHELVES_ORDER,
  UPDATE_SELECT_SHELVES_ORDER,
} from "./shelvesOrderTypes";

const initialState = {
  selectShelveOrder: {},
  shelveOrders: [],
};

const shelvesOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHELVES_ORDER:
      return {
        ...state,
        shelveOrders: [
          ...state.shelveOrders,
          {
            shopId: action.payLoad,
            order: [],
          },
        ],
      };

    case SELECT_SHELVES_ORDER:
      return {
        ...state,
        selectShelveOrder: state.shelveOrders.find(
          (order) => order.shopId === action.payLoad
        ),
      };

    case ADD_SHELVE_TO_ORDER:
      return {
        ...state,
        selectShelveOrder: {
          ...state.selectShelveOrder,
          order: [...state.selectShelveOrder.order, action.payLoad],
        },
      };

    case UPDATE_SELECT_SHELVES_ORDER:
      return {
        ...state,
        selectShelveOrder: {
          ...state.selectShelveOrder,
          order: action.payLoad,
        },
      };

    case UPDATE_SHELVES_ORDER:
      return {
        ...state,
        shelveOrders: state.shelveOrders.map((shelve) => {
          if (shelve.shopId === state.selectShelveOrder.shopId) {
            shelve.order = state.selectShelveOrder.order;
          }

          return shelve;
        }),
      };

    default:
      return state;
  }
};

export default shelvesOrderReducer;

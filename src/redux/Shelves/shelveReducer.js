import {
  CREATE_SHELVE_ITEM,
  GET_SELECT_SHELVES,
  DELETE_SHELVES_GLOBAL,
  ADD_CARD_TO_SELECT_SHELVE,
  UPDATE_SELECT_SHELVE_CARD_ORDER,
  GET_FOCUS_SHELVE_ITEM,
} from "./shelvesTypes";

const initialState = {
  currentShelveTitle: "",
  currentShelveId: "",
  selectShelves: [],
  shelves: [],
};

const shelvesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOCUS_SHELVE_ITEM:
      return {
        ...state,
        currentShelveTitle: action.payLoad.title,
        currentShelveId: action.payLoad.id,
      };

    case CREATE_SHELVE_ITEM:
      return {
        ...state,
        shelves: [
          ...state.shelves,
          {
            shopId: action.payLoad.shopId,
            id: action.payLoad.id,
            title: action.payLoad.title,
            cardOrder: [],
            cards: [],
          },
        ],
        selectShelves: state.shelves.filter(
          (item) => item.shopId === action.payLoad.shopId
        ),
      };

    case GET_SELECT_SHELVES:
      return {
        ...state,
        selectShelves: state.shelves.filter(
          (item) => item.shopId === action.payLoad
        ),
      };

    case ADD_CARD_TO_SELECT_SHELVE:
      return {
        ...state,
        selectShelves: state.selectShelves.map((shelve) => {
          if (shelve.id === action.payLoad.shelveId) {
            shelve.cards.push(action.payLoad);
            shelve.cardOrder.push(action.payLoad.id);
          }
          return shelve;
        }),
      };

    case UPDATE_SELECT_SHELVE_CARD_ORDER:
      return {
        ...state,
        selectShelves: state.selectShelves.map((shelve) => {
          if (shelve.id === action.payLoad.shelveId) {
            shelve.cardOrder = action.payLoad.cardOrder;
          }
          return shelve;
        }),
      };

    case DELETE_SHELVES_GLOBAL:
      return {
        ...state,
        selectShelves: [],
        shelves: state.shelves.filter((item) => item.shopId !== action.payLoad),
      };

    default:
      return state;
  }
};

export default shelvesReducer;

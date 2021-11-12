import { CREATE_SHELVE_ITEM, GET_SELECT_SHELVES } from "./shelvesTypes";

const initialState = {
  currentShelveTitle: "",
  selectShelves: [],
  shelves: [],
};

const shelvesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHELVE_ITEM:
      return {
        ...state,
        shelves: [
          ...state.shelves,
          {
            shopId: action.payLoad.shopId,
            id: action.payLoad.id,
            title: action.payLoad.title,
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

    default:
      return state;
  }
};

export default shelvesReducer;

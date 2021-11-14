import { CREATE_CARD } from "./cardTypes";

const initialState = {
  cards: [],
};

const cardReduder = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payLoad],
      };

    default:
      return state;
  }
};

export default cardReduder;

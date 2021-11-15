import {
  CREATE_SHELVE_ITEM,
  GET_SELECT_SHELVES,
  DELETE_SHELVES_GLOBAL,
  GET_FOCUS_SHELVE_ITEM,
  ADD_CARD,
  UPDATE_CARD_ORDER,
  GET_CARD_DATA,
  REMOVE_CARD_FROM_SHELVE,
  CHANGE_CARD_SHELVE_ID,
  CHANGE_CARD_SHELVE,
} from "./shelvesTypes";

const initialState = {
  currentShelveTitle: "",
  currentShelveId: "",
  currentCard: {},
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

    case ADD_CARD:
      return {
        ...state,
        selectShelves: state.selectShelves.map((shelve) =>
          shelve.id === action.payLoad.shelveId
            ? {
                ...shelve,
                cards: [...shelve.cards, action.payLoad],
                cardOrder: [...shelve.cardOrder, action.payLoad.id],
              }
            : shelve
        ),
        shelves: state.shelves.map((shelve) =>
          shelve.id === action.payLoad.shelveId
            ? {
                ...shelve,
                cards: [...shelve.cards, action.payLoad],
                cardOrder: [...shelve.cardOrder, action.payLoad.id],
              }
            : shelve
        ),
      };

    case GET_CARD_DATA:
      return {
        ...state,
        currentCard: action.payLoad,
      };

    case UPDATE_CARD_ORDER:
      return {
        ...state,
        selectShelves: state.selectShelves.map((shelve) =>
          shelve.id === action.payLoad.shelveId
            ? {
                ...shelve,
                cardOrder: action.payLoad.order,
              }
            : shelve
        ),
        shelves: state.shelves.map((shelve) =>
          shelve.id === action.payLoad.shelveId
            ? {
                ...shelve,
                cardOrder: action.payLoad.order,
              }
            : shelve
        ),
      };

    case REMOVE_CARD_FROM_SHELVE:
      return {
        ...state,
        selectShelves: state.selectShelves.map((shelve) =>
          shelve.id === state.currentCard.shelveId
            ? {
                ...shelve,
                cards: shelve.cards.filter(
                  (card) => card.id !== state.currentCard.id
                ),
                cardOrder: shelve.cardOrder.filter(
                  (cardId) => cardId !== state.currentCard.id
                ),
              }
            : shelve
        ),
        shelves: state.shelves.map((shelve) =>
          shelve.id === state.currentCard.shelveId
            ? {
                ...shelve,
                cards: shelve.cards.filter(
                  (card) => card.id !== state.currentCard.id
                ),
                cardOrder: shelve.cardOrder.filter(
                  (cardId) => cardId !== state.currentCard.id
                ),
              }
            : shelve
        ),
      };

    case CHANGE_CARD_SHELVE_ID:
      return {
        ...state,
        currentCard: {
          ...state.currentCard,
          shelveId: action.payLoad,
        },
      };

    case CHANGE_CARD_SHELVE:
      return {
        ...state,
        selectShelves: state.selectShelves.map((shelve) =>
          shelve.id === action.payLoad.targetShelve
            ? {
                ...shelve,
                cards: [...shelve.cards, state.currentCard],
                cardOrder: action.payLoad.order,
              }
            : shelve
        ),
        shelves: state.shelves.map((shelve) =>
          shelve.id === action.payLoad.targetShelve
            ? {
                ...shelve,
                cards: [...shelve.cards, state.currentCard],
                cardOrder: action.payLoad.order,
              }
            : shelve
        ),
        currentCard: {},
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

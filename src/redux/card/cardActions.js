import { CREATE_CARD } from "./cardTypes";

export const createCard = (cardObj) => {
  return {
    type: CREATE_CARD,
    payLoad: cardObj,
  };
};

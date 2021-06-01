import { FETCH_CARDS, SAVE_CARD, EDIT_CARD } from "./types";

const fetchCards = (cards) => {
  return {
    type: FETCH_CARDS,
    payload: cards,
  };
};

const saveCard = (card) => {
  return {
    type: SAVE_CARD,
    payload: card,
  };
};

const editCard = (card) => {
  return {
    type: EDIT_CARD,
    payload: card,
  };
};


export { fetchCards, saveCard, editCard };

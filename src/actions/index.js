import { FETCH_CARDS, SAVE_CARD } from "./types";

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

export { fetchCards, saveCard };

import { FETCH_CARDS, SAVE_CARD, EDIT_CARD } from "../actions/types";

const initialState = { cards: null, error: null, loading: false };

const sessionsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_CARDS:
      return { ...state, cards: payload };
    case SAVE_CARD:
      return { ...state, cards: [ ...state.cards, payload ] };
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id !== payload.id) {
            return card;
          }

          return { ...payload };
        }),
      };
    default:
      return state;
  }
};

export default sessionsReducer;

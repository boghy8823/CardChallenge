import { FETCH_CARDS, SAVE_CARD } from "../actions/types";

const initialState = { cards: null, error: null, loading: false };

const sessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, cards: action.payload };
    case SAVE_CARD:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export default sessionsReducer;

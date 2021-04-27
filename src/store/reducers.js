import { SAVE_SESSION, FETCH_SESSIONS } from "../actions/types";

const initialState = { currentSession: null, error: null, loading: false };

const sessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SESSIONS:
      return { ...state, sessions: action.payload };
    case SAVE_SESSION:
      return { ...state, paylod: action.payload };
    default:
      return state;
  }
};

export default sessionsReducer;

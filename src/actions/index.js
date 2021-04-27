import { SAVE_SESSION, FETCH_SESSIONS } from "./types";

const fetchSessions = (sessions) => {
  return {
    type: FETCH_SESSIONS,
    payload: sessions,
  };
};

const saveSession = (session) => {
  return {
    type: SAVE_SESSION,
    payload: session,
  };
};

export { fetchSessions, saveSession };

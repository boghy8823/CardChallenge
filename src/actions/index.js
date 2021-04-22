import { SAVE_SESSION, FETCH_SESSIONS } from "./types";

const fetchSessions = () => ({
  type: FETCH_SESSIONS,
  payload: "mata",
});

const saveSession = (session) => {
  return {
    type: SAVE_SESSION,
    payload: session,
  };
};

export { fetchSessions, saveSession };

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ROUTES from "../../constants/routes";
import { PageWrapper, Container } from "./History.styled";
import NavigationLink from "../../components/NavigationLink";
import { isToday, isThisWeek, isThisMonth } from "../../helpers/timerHelper";
import RANGES from "../../constants/ranges";
import server from "../../apis/server";
import { fetchSessions } from "../../actions";

const History = () => {
  const dispatch = useDispatch();

  const sessions = useSelector((state) => state.sessions);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSessions = async () => {
      setLoading(true);
      try {
        const { data } = await server.get("/sessions");

        dispatch(fetchSessions(data));
      } catch (err) {
        setError(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    loadSessions();
  }, [dispatch]);

  const getSessionForToday = () => {
    return sessions
      .filter((session) => isToday(new Date(session.start)))
      .map((session) => session.name);
  };

  const getSessionForWeek = () => {
    return sessions
      .filter((session) => isThisWeek(new Date(session.start)))
      .map((session) => session.name);
  };

  const getSessionForMonth = () => {
    return sessions
      .filter((session) => isThisMonth(new Date(session.start)))
      .map((session) => session.name);
  };

  return (
    <PageWrapper>
      <Container>
        <NavigationLink route={ROUTES.HOME}>Home</NavigationLink>
        <NavigationLink route={ROUTES.HISTORY}>History</NavigationLink>
        <p>History</p>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            sessions && (
              <>
                <div>
                  {RANGES.TODAY}: {getSessionForToday()}
                </div>
                <div>
                  {RANGES.THIS_WEEK}: {getSessionForWeek()}
                </div>
                <div>
                  {RANGES.THIS_MONTH} {getSessionForMonth()}
                </div>
              </>
            )
          )}
        </div>
        {error && <p>There has been an error</p>}
      </Container>
    </PageWrapper>
  );
};

History.propTypes = {};

export default History;

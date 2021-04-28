import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tabs from "../../components/Tabs";
import SessionsList from "../../components/SessionsList";
import { PageWrapper, TabsContainer } from "./History.styled";
import { isToday, isThisWeek, isThisMonth } from "../../helpers/timerHelper";
import server from "../../apis/server";
import { fetchSessions } from "../../actions";

const History = () => {
  const dispatch = useDispatch();
  const sessions = useSelector((state) => state.sessions);
  const [activeTabIndex, setActiveTabIndex] = useState("today");

  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const { data } = await server.get("/sessions");

        dispatch(fetchSessions(data));
      } catch (err) {
        setError(err?.response?.data?.message);
      }
    };
    loadSessions();
  }, [dispatch]);

  const getSessionForToday = () => {
    return sessions.filter((session) => isToday(new Date(session.start)));
  };

  const getSessionForWeek = () => {
    return sessions.filter((session) => isThisWeek(new Date(session.start)));
  };

  const getSessionForMonth = () => {
    return sessions.filter((session) => isThisMonth(new Date(session.start)));
  };

  // TODO replace label and tab names with constants
  const tabs = [
    {
      isActive: activeTabIndex === "today",
      label: "Today",
      id: "today",
    },
    {
      isActive: activeTabIndex === "week",
      label: "This week",
      id: "week",
    },
    {
      isActive: activeTabIndex === "month",
      label: "This month",
      id: "month",
    },
  ];

  return (
    <PageWrapper>
          {sessions && (
            <>
              <TabsContainer>
                <Tabs tabs={tabs} onTabClick={setActiveTabIndex} />
                <SessionsList
                  sessions={getSessionForToday()}
                  isActive={activeTabIndex === "today"}
                />
                <SessionsList
                  sessions={getSessionForWeek()}
                  isActive={activeTabIndex === "week"}
                />
                <SessionsList
                  sessions={getSessionForMonth()}
                  isActive={activeTabIndex === "month"}
                />
              </TabsContainer>
            </>
          )}
        {error && <p>There has been an error</p>}
    </PageWrapper>
  );
};

History.propTypes = {};

export default History;

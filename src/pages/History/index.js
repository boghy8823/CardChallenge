import React from "react";
import ROUTES from "../../constants/routes";
import { PageWrapper, Container } from "./History.styled";
import NavigationLink from "../../components/NavigationLink";
import { isToday, isThisWeek, isThisMonth } from "../../helpers/timerHelper";

const History = () => {
  const sessions = [
    {
      start: "2021-04-22T06:45:00.000Z",
      end: "2021-04-22T07:45:00.000Z",
      duration: 131,
      name: "today",
    },
    {
      start: "2021-04-22T06:45:00.000Z",
      end: "2021-04-22T07:45:00.000Z",
      duration: 131,
      name: "today",
    },
    {
      start: "2021-04-22T06:45:00.000Z",
      end: "2021-04-22T07:45:00.000Z",
      duration: 51,
      name: "today",
    },
    {
      start: "2021-04-19T06:45:00.000Z",
      end: "2021-04-19T07:45:00.000Z",
      duration: 111,
      name: "week",
    },
    {
      start: "2021-03-17T06:45:00.000Z",
      end: "2021-03-17T07:45:00.000Z",
      duration: 121,
      name: "month",
    },
  ];

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
          <p>Ranges:</p>
          <div>Day: {getSessionForToday()}</div>
          <div>Week: {getSessionForWeek()}</div>
          <div>Month {getSessionForMonth()}</div>
        </div>
      </Container>
    </PageWrapper>
  );
};

History.propTypes = {};

export default History;

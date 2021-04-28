import React from "react";
import PropTypes from "prop-types";
import { SessionsListWrapper, SessionItemList } from "./SessionsList.styled";

const SessionsList = ({ sessions, isActive }) => (
  <SessionsListWrapper>
    {sessions.map((session) => (
      <SessionItemList key={session.start} isActive={isActive}>
        {session.name} - {session.duration}
      </SessionItemList>
    ))}
  </SessionsListWrapper>
);

SessionsList.propTypes = {
    sessions: PropTypes.arrayOf(
    PropTypes.shape({
      duration: PropTypes.number,
      end: PropTypes.string,
      start: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  isActive: PropTypes.bool,
};

SessionsList.defaultProps = {
    sessions: [],
    isActive: false
};

export default SessionsList;
